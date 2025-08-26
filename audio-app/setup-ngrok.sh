#!/bin/bash

# Setup script for ngrok with custom domain
# Usage: ./setup-ngrok.sh

echo "🚀 Setting up Audio Streaming App with ngrok..."
echo "Your custom domain: audiocast.ngrok.io"
echo ""

# Check if ngrok is installed
if ! command -v ngrok &> /dev/null; then
    echo "❌ ngrok is not installed. Please install it first:"
    echo "   brew install ngrok"
    echo "   or download from: https://ngrok.com/download"
    exit 1
fi

echo "✅ ngrok is installed"
echo ""

# Start the local server if not already running
if ! pgrep -f "node server.js" > /dev/null; then
    echo "🔄 Starting local server..."
    npm start &
    SERVER_PID=$!
    echo "✅ Server started with PID: $SERVER_PID"
    sleep 3
else
    echo "✅ Server is already running"
fi

echo ""
echo "🌐 Starting ngrok tunnel..."
echo "   Local server: http://localhost:3000"
echo "   Public URL: https://audiocast.ngrok.io"
echo ""

# Start ngrok with custom domain
ngrok http --domain=audiocast.ngrok.io 3000

echo ""
echo "🛑 ngrok tunnel stopped"

# Clean up
if [ ! -z "$SERVER_PID" ]; then
    echo "🔄 Stopping local server..."
    kill $SERVER_PID 2>/dev/null
    echo "✅ Server stopped"
fi
