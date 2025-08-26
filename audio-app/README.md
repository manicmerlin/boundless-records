# Boundless Records - Audio Streaming Platform

🎙️ **Live Audio Streaming for Boundless Records**

## Features
- Live audio broadcasting with password protection
- Real-time listening for multiple users
- WebSocket-based low-latency communication
- Responsive design for all devices
- Real-time listener count for broadcasters

## Deployment
This app requires a Node.js server environment with WebSocket support.

**Live at**: stream.boundlessrecords.xyz

## Local Development
```bash
npm install
npm start
```

Visit `http://localhost:3000` to access the streaming platform.

## Environment Variables
- `PORT`: Server port (default: 3000)
- `BROADCASTER_PASSWORD`: Password for broadcasters (default: "broadcast123")

## Usage
- **Broadcasters**: Go to `/broadcast`, enter password, start streaming
- **Listeners**: Go to `/listen`, click "Join Stream" to listen live

---
Part of the Boundless Records ecosystem - visit https://boundlessrecords.xyz
