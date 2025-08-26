# Audio Streaming Platform Deployment Options

## 🎙️ Current Status
- **Main Website**: https://boundlessrecords.xyz (✅ Live)
- **Streaming Platform**: stream.boundlessrecords.xyz (🔄 Setup needed)

## 🚀 Deployment Options for Audio Streaming

### Option 1: Railway (Recommended - Free Tier Available)
1. **Go to**: https://railway.app
2. **Sign up** with GitHub
3. **Deploy from GitHub**:
   - Repository: `manicmerlin/boundless-records`
   - Root Directory: `/audio-app`
   - Start Command: `npm start`
4. **Custom Domain**: Add `stream.boundlessrecords.xyz`

### Option 2: Render (Free Tier)
1. **Go to**: https://render.com
2. **Connect GitHub** repository
3. **Web Service** settings:
   - Name: `boundless-records-streaming`
   - Root Directory: `audio-app`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. **Custom Domain**: Add `stream.boundlessrecords.xyz`

### Option 3: Heroku (Paid)
1. **Go to**: https://heroku.com
2. **Create new app**: `boundless-records-stream`
3. **Connect GitHub** repository
4. **Settings**:
   - Buildpack: Node.js
   - App directory: `audio-app`
5. **Custom Domain**: Add `stream.boundlessrecords.xyz`

### Option 4: Local Development with ngrok (Testing)
```bash
cd audio-app
npm install
npm start
# In another terminal:
ngrok http 3000 --domain=stream.boundlessrecords.xyz
```

## 🔧 Quick Setup Instructions

### For Railway (Easiest):
1. **Visit**: https://railway.app/new
2. **Deploy from GitHub repo**
3. **Settings**:
   - Root Directory: `audio-app`
   - Start Command: `npm start`
   - PORT: 3000
4. **Add custom domain**: `stream.boundlessrecords.xyz`

### DNS Configuration (Already Set Up)
✅ **stream.boundlessrecords.xyz** DNS record created
🔄 **Need to update** the A record to point to your hosting provider's IP

## 📋 What's in the Audio App
- **Location**: `/audio-app/` directory
- **Features**:
  - Live audio broadcasting
  - Real-time listeners
  - Password-protected broadcasting
  - WebSocket communication
  - Responsive design

## 🌐 Integration with Main Site
- **Link added** to main website contact section
- **Subdomain ready**: stream.boundlessrecords.xyz
- **Separate deployment** needed (Node.js server required)

## 🎯 Next Steps
1. **Choose a hosting platform** (Railway recommended)
2. **Deploy the audio-app** directory
3. **Update DNS** to point to hosting provider
4. **Test streaming functionality**
