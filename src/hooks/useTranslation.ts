import { useState } from 'react';

export type Language = 'en' | 'hi' | 'kn';

const translations = {
  en: {
    // Navigation
    home: 'Home',
    monitoring: 'Live Monitoring',
    community: 'Community',
    admin: 'Admin',
    
    // Common
    submit: 'Submit',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    
    // Hero Section
    heroTitle: 'Smart Health Monitoring for Rural Communities',
    heroSubtitle: 'Real-time water quality monitoring and AI-powered disease prediction system for Northeast India',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Monitoring Dashboard
    waterQuality: 'Water Quality Parameters',
    ph: 'pH Level',
    turbidity: 'Turbidity',
    conductivity: 'Conductivity',
    tds: 'TDS',
    temperature: 'Temperature',
    sensorStatus: 'Sensor Status',
    online: 'Online',
    offline: 'Offline',
    
    // Community Portal
    reportSymptoms: 'Report Health Symptoms',
    location: 'Location',
    symptoms: 'Symptoms',
    fever: 'Fever',
    diarrhea: 'Diarrhea',
    vomiting: 'Vomiting',
    nausea: 'Nausea',
    submitReport: 'Submit Report',
    
    // Alerts
    riskLevel: 'Risk Level',
    low: 'Low',
    moderate: 'Moderate',
    high: 'High',
    
    // Bangalore Areas
    locations: {
      whitefield: 'Whitefield',
      koramangala: 'Koramangala',
      indiranagar: 'Indiranagar',
      jayanagar: 'Jayanagar',
      malleshwaram: 'Malleshwaram',
      rajajinagar: 'Rajajinagar',
      vijayanagar: 'Vijayanagar',
      btmLayout: 'BTM Layout',
      electronic_city: 'Electronic City',
      hebbal: 'Hebbal'
    }
  },
  hi: {
    // Navigation
    home: 'होम',
    monitoring: 'लाइव मॉनिटरिंग',
    community: 'समुदाय',
    admin: 'व्यवस्थापक',
    
    // Common
    submit: 'जमा करें',
    loading: 'लोड हो रहा है...',
    error: 'त्रुटि',
    success: 'सफलता',
    
    // Hero Section
    heroTitle: 'ग्रामीण समुदायों के लिए स्मार्ट स्वास्थ्य निगरानी',
    heroSubtitle: 'पूर्वोत्तर भारत के लिए वास्तविक समय पानी की गुणवत्ता निगरानी और AI-संचालित रोग पूर्वानुमान प्रणाली',
    getStarted: 'शुरू करें',
    learnMore: 'और जानें',
    
    // Monitoring Dashboard
    waterQuality: 'पानी की गुणवत्ता पैरामीटर',
    ph: 'pH स्तर',
    turbidity: 'टर्बिडिटी',
    conductivity: 'चालकता',
    tds: 'TDS',
    temperature: 'तापमान',
    sensorStatus: 'सेंसर स्थिति',
    online: 'ऑनलाइन',
    offline: 'ऑफलाइन',
    
    // Community Portal
    reportSymptoms: 'स्वास्थ्य लक्षण रिपोर्ट करें',
    location: 'स्थान',
    symptoms: 'लक्षण',
    fever: 'बुखार',
    diarrhea: 'दस्त',
    vomiting: 'उल्टी',
    nausea: 'मतली',
    submitReport: 'रिपोर्ट जमा करें',
    
    // Alerts
    riskLevel: 'जोखिम स्तर',
    low: 'कम',
    moderate: 'मध्यम',
    high: 'उच्च',
    
    // Bangalore Areas
    locations: {
      whitefield: 'व्हाइटफील्ड',
      koramangala: 'कोरमंगला',
      indiranagar: 'इंदिरानगर',
      jayanagar: 'जयनगर',
      malleshwaram: 'मल्लेश्वरम',
      rajajinagar: 'राजाजीनगर',
      vijayanagar: 'विजयनगर',
      btmLayout: 'BTM लेआउट',
      electronic_city: 'इलेक्ट्रॉनिक सिटी',
      hebbal: 'हेब्बल'
    }
  },
  kn: {
    // Navigation
    home: 'ಮನೆ',
    monitoring: 'ಲೈವ್ ಮಾನಿಟರಿಂಗ್',
    community: 'ಸಮುದಾಯ',
    admin: 'ನಿರ್ವಾಹಕ',
    
    // Common
    submit: 'ಸಲ್ಲಿಸಿ',
    loading: 'ಲೋಡ್ ಆಗುತ್ತಿದೆ...',
    error: 'ದೋಷ',
    success: 'ಯಶಸ್ಸು',
    
    // Hero Section
    heroTitle: 'ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ಸ್ಮಾರ್ಟ್ ಆರೋಗ್ಯ ಮಾನಿಟರಿಂಗ್',
    heroSubtitle: 'ಈಶಾನ್ಯ ಭಾರತಕ್ಕೆ ನೈಜ-ಸಮಯದ ನೀರಿನ ಗುಣಮಟ್ಟ ಮಾನಿಟರಿಂಗ್ ಮತ್ತು AI-ಚಾಲಿತ ರೋಗ ಮುನ್ಸೂಚನೆ ವ್ಯವಸ್ಥೆ',
    getStarted: 'ಪ್ರಾರಂಭಿಸಿ',
    learnMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
    
    // Monitoring Dashboard
    waterQuality: 'ನೀರಿನ ಗುಣಮಟ್ಟ ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು',
    ph: 'pH ಮಟ್ಟ',
    turbidity: 'ಟರ್ಬಿಡಿಟಿ',
    conductivity: 'ವಾಹಕತೆ',
    tds: 'TDS',
    temperature: 'ತಾಪಮಾನ',
    sensorStatus: 'ಸೆನ್ಸರ್ ಸ್ಥಿತಿ',
    online: 'ಆನ್‌ಲೈನ್',
    offline: 'ಆಫ್‌ಲೈನ್',
    
    // Community Portal
    reportSymptoms: 'ಆರೋಗ್ಯ ಲಕ್ಷಣಗಳನ್ನು ವರದಿ ಮಾಡಿ',
    location: 'ಸ್ಥಳ',
    symptoms: 'ಲಕ್ಷಣಗಳು',
    fever: 'ಜ್ವರ',
    diarrhea: 'ಅತಿಸಾರ',
    vomiting: 'ವಾಂತಿ',
    nausea: 'ವಾಕರಿಕೆ',
    submitReport: 'ವರದಿ ಸಲ್ಲಿಸಿ',
    
    // Alerts
    riskLevel: 'ಅಪಾಯ ಮಟ್ಟ',
    low: 'ಕಡಿಮೆ',
    moderate: 'ಮಧ್ಯಮ',
    high: 'ಹೆಚ್ಚು',
    
    // Bangalore Areas
    locations: {
      whitefield: 'ವೈಟ್‌ಫೀಲ್ಡ್',
      koramangala: 'ಕೊರಮಂಗಲ',
      indiranagar: 'ಇಂದಿರಾನಗರ',
      jayanagar: 'ಜಯನಗರ',
      malleshwaram: 'ಮಲ್ಲೇಶ್ವರಂ',
      rajajinagar: 'ರಾಜಾಜೀನಗರ',
      vijayanagar: 'ವಿಜಯನಗರ',
      btmLayout: 'BTM ಲೇಔಟ್',
      electronic_city: 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿ',
      hebbal: 'ಹೆಬ್ಬಾಳ್'
    }
  }
};

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return {
    t,
    currentLanguage,
    setCurrentLanguage
  };
};