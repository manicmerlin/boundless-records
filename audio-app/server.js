const express = require('express');
const WebSocket = require('ws');
const path = require('path');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Simple authentication configuration
const BROADCASTER_PASSWORD = process.env.BROADCASTER_PASSWORD || 'broadcast123';

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/broadcast', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/authenticate', (req, res) => {
    const { password } = req.body;
    if (password === BROADCASTER_PASSWORD) {
        res.json({ success: true, redirectUrl: '/broadcast-room' });
    } else {
        res.json({ success: false, message: 'Invalid password' });
    }
});

app.get('/broadcast-room', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'broadcast.html'));
});

app.get('/listen', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'listen.html'));
});

// Boundless Records website route
app.get('/boundless-records', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'boundless-records.html'));
});

// WebSocket handling
let broadcaster = null;
let listeners = new Set();

wss.on('connection', function connection(ws) {
    console.log('New WebSocket connection');

    ws.on('message', function incoming(message) {
        try {
            // Try to parse as JSON for control messages
            const data = JSON.parse(message);
            
            if (data.type === 'broadcaster-join') {
                broadcaster = ws;
                ws.role = 'broadcaster';
                console.log('Broadcaster connected');
                
                // Send listener count to broadcaster
                ws.send(JSON.stringify({
                    type: 'listener-count',
                    count: listeners.size
                }));
                
            } else if (data.type === 'listener-join') {
                listeners.add(ws);
                ws.role = 'listener';
                console.log(`Listener connected. Total listeners: ${listeners.size}`);
                
                // Update broadcaster with new listener count
                if (broadcaster && broadcaster.readyState === WebSocket.OPEN) {
                    broadcaster.send(JSON.stringify({
                        type: 'listener-count',
                        count: listeners.size
                    }));
                }
            }
        } catch (e) {
            // If it's not JSON, it's audio data from broadcaster
            if (ws.role === 'broadcaster') {
                // Broadcast audio data to all listeners
                listeners.forEach(listener => {
                    if (listener.readyState === WebSocket.OPEN) {
                        listener.send(message);
                    }
                });
            }
        }
    });

    ws.on('close', function close() {
        console.log('WebSocket connection closed');
        
        if (ws.role === 'broadcaster') {
            broadcaster = null;
            console.log('Broadcaster disconnected');
            
            // Notify all listeners that broadcast ended
            listeners.forEach(listener => {
                if (listener.readyState === WebSocket.OPEN) {
                    listener.send(JSON.stringify({
                        type: 'broadcast-ended'
                    }));
                }
            });
            
        } else if (ws.role === 'listener') {
            listeners.delete(ws);
            console.log(`Listener disconnected. Total listeners: ${listeners.size}`);
            
            // Update broadcaster with new listener count
            if (broadcaster && broadcaster.readyState === WebSocket.OPEN) {
                broadcaster.send(JSON.stringify({
                    type: 'listener-count',
                    count: listeners.size
                }));
            }
        }
    });

    ws.on('error', function error(err) {
        console.error('WebSocket error:', err);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Audio streaming server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    if (process.env.NODE_ENV !== 'production') {
        console.log(`Broadcast at: http://localhost:${PORT}/broadcast`);
        console.log(`Listen at: http://localhost:${PORT}/listen`);
    }
});
