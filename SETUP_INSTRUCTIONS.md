# Local Development Setup Instructions

## Prerequisites
- Node.js (v18 or later)
- Git
- VS Code (recommended IDE)

## Step-by-Step Setup

### 1. Clone and Setup Project
```bash
# Clone your project from Lovable
git clone <your-project-url>
cd <your-project-name>

# Install dependencies
npm install
```

### 2. Development Server
```bash
# Start development server
npm run dev

# The app will be available at:
# http://localhost:5173
```

### 3. VS Code Extensions (Recommended)
Install these extensions for better development experience:
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **TypeScript Importer**
- **Auto Rename Tag**
- **Prettier - Code formatter**

### 4. Project Structure
```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── AdminDashboard.tsx
│   ├── CommunityPortalEnhanced.tsx
│   ├── LocationSelector.tsx
│   ├── BangaloreLocationSelector.tsx
│   └── ...
├── hooks/              # Custom React hooks
│   └── useTranslation.ts
├── data/               # Static data files
│   └── bangaloreLocations.ts
├── pages/              # Main pages
└── types/              # TypeScript definitions
```

### 5. Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### 6. Key Features Implemented

#### ✅ Multilingual Support (English, Hindi, Kannada)
- Language selector in navigation
- Translated UI components
- Bangalore location names in local languages

#### ✅ Google Maps Integration
- Interactive maps for location selection
- Requires Google Maps API key
- Bangalore-focused with local areas

#### ✅ Admin Dashboard
- Available at `/admin` route
- Real-time monitoring interface
- Health worker management

#### ✅ Community Health Portal
- Symptom reporting system
- Health worker tracking
- Location-based reporting

### 7. Backend Integration (Required for Full Functionality)

For SMS/WhatsApp messaging and data storage, you need to:

1. **Connect to Supabase** (Recommended)
   - Click the green Supabase button in Lovable interface
   - Set up authentication and database
   - Store Twilio API keys in Supabase secrets

2. **Add Twilio Integration**
   - Create Twilio account
   - Get API credentials
   - Store in Supabase edge function secrets
   - Implement SMS/WhatsApp sending logic

### 8. Environment Setup

#### Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
2. Create a new project or select existing
3. Enable Maps JavaScript API and Places API
4. Create API key and restrict it to your domain
5. Enter API key in the location selector component

#### Twilio Setup (After Supabase Connection)
1. Create [Twilio account](https://www.twilio.com/)
2. Get Account SID and Auth Token
3. Set up WhatsApp Business API
4. Store credentials in Supabase secrets

### 9. Current Limitations (Frontend Only)
- Simulated sensor data (not real IoT integration)
- Mock health worker data
- No actual SMS/WhatsApp sending
- No persistent data storage

### 10. Production Deployment
```bash
# Build for production
npm run build

# The dist/ folder contains the built app
# Deploy to your preferred hosting service
```

### 11. Troubleshooting

#### Common Issues:
1. **Port already in use**: Try `npm run dev -- --port 3000`
2. **Module not found**: Run `npm install` again
3. **TypeScript errors**: Check imports and type definitions
4. **Map not loading**: Verify Google Maps API key

#### Getting Help:
- Check browser console for errors
- Verify all dependencies are installed
- Ensure API keys are correctly configured

### 12. Next Steps for Full Implementation
1. Connect to Supabase for backend functionality
2. Implement Twilio SMS/WhatsApp integration
3. Add real IoT sensor data integration
4. Set up user authentication
5. Implement data persistence
6. Add push notifications
7. Deploy to production

This setup provides a fully functional frontend with multilingual support and Google Maps integration. For complete functionality including messaging and data storage, follow the Supabase integration steps.