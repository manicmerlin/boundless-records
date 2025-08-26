# Boundless Records

🎵 **South Florida's Premier Independent Music Label**

## Live Website
Visit us at: [boundlessrecords.xyz](https://boundlessrecords.xyz)

## Artists
- **Bennett Boundless** - Visionary artist pushing musical boundaries
- **Alma de Agustina** - Emerging talent with soulful storytelling

## About
Boundless Records is an independent music label based in South Florida, dedicated to discovering and nurturing exceptional talent. We believe in the power of music to transcend boundaries and connect people across cultures and communities.

## Website Features
- 📱 Fully responsive design
- 🎨 Modern, professional styling  
- ⚡ Fast loading and optimized
- 🔍 SEO friendly
- 📧 Contact integration ready

## Deployment
This site is deployed using Cloudflare Pages with automatic GitHub integration.

---

# Audio Streaming Web App

A real-time audio streaming application that allows users to broadcast live audio and listeners to join and hear the stream in real-time.

## Features

- **Live Audio Broadcasting**: Stream microphone audio in real-time
- **Broadcaster Authentication**: Password protection for broadcasting access
- **Multiple Listeners**: Support for multiple simultaneous listeners (no authentication required)
- **Real-time Communication**: WebSocket-based communication for low latency
- **Audio Visualization**: Visual feedback for audio activity
- **Volume Control**: Adjustable volume for listeners
- **Connection Status**: Real-time connection and broadcasting status
- **Responsive Design**: Works on desktop and mobile devices

## How It Works

1. **Broadcaster**: Must authenticate with password, then can stream microphone audio
2. **Server**: Relays audio data from authenticated broadcaster to all connected listeners
3. **Listeners**: Can join freely without authentication to listen to the live audio stream
4. **WebSockets**: Enable real-time bidirectional communication

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- A modern web browser with microphone support
- For public access: ngrok (optional, for sharing outside your network)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to:
   - Main page: `http://localhost:3000`
   - Broadcaster: `http://localhost:3000/broadcast`
   - Listener: `http://localhost:3000/listen`

### Using with ngrok (Public Access)

To share your audio stream with people outside your local network:

1. **Install ngrok** (if not already installed):
   ```bash
   brew install ngrok
   # or download from https://ngrok.com/download
   ```

2. **Quick setup with custom domain**:
   ```bash
   ./setup-ngrok.sh
   ```

3. **Manual setup**:
   ```bash
   # Start your local server
   npm start
   
   # In another terminal, start ngrok
   ngrok http --domain=audiocast.ngrok.io 3000
   ```

4. **Access your app**:
   - Broadcaster: `https://audiocast.ngrok.io/broadcast`
   - Listeners: `https://audiocast.ngrok.io/listen`
   - Share the listener URL with your audience!

### Development

For development with auto-restart:
```bash
npm run dev
```

## Usage

### For Broadcasters

1. Go to `http://localhost:3000/broadcast` (or `https://audiocast.ngrok.io/broadcast`)
2. Enter the broadcaster password (default: `broadcast123`)
3. Click "Start Broadcasting"
4. Allow microphone access when prompted
5. Share the listener URL with your audience
6. Monitor listener count in real-time

### For Listeners

1. Go to `http://localhost:3000/listen` (or `https://audiocast.ngrok.io/listen`)
2. Click "Join Stream" (no password required)
3. Adjust volume as needed
4. Enjoy the live audio stream!

## Technical Details

### Audio Format
- Uses WebM container with Opus codec for efficient compression
- 100ms chunks for low latency
- Automatic audio enhancements (echo cancellation, noise suppression)

### Architecture
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Backend**: Node.js with Express and WebSocket (ws library)
- **Real-time Communication**: WebSocket for audio data and control messages
- **Audio Processing**: Web Audio API for recording and playback

### Browser Compatibility
- Chrome 66+
- Firefox 60+
- Safari 12+
- Edge 79+

## Configuration

The server runs on port 3000 by default. You can change this by setting the `PORT` environment variable:

```bash
PORT=8080 npm start
```

## Security Considerations

- **HTTPS Required**: Modern browsers require HTTPS for microphone access
- **Origin Validation**: Consider implementing origin validation for production
- **Rate Limiting**: Add rate limiting for WebSocket connections
- **Authentication**: Implement user authentication for private broadcasts

## Troubleshooting

### Microphone Access Issues
- Ensure you're using HTTPS in production
- Check browser permissions for microphone access
- Try refreshing the page and allowing permissions again

### Audio Quality Issues
- Check your internet connection
- Ensure other applications aren't using the microphone
- Try closing other browser tabs that might be using audio

### Connection Issues
- Verify the server is running
- Check firewall settings
- Ensure WebSocket connections are allowed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details
