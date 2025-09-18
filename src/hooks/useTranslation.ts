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
    register: 'Register',
    view: 'View',
    edit: 'Edit',
    delete: 'Delete',
    save: 'Save',
    cancel: 'Cancel',
    actions: 'Actions',
    
    // Hero Section
    heroTitle: 'Smart Health Monitoring for Rural Communities',
    heroSubtitle: 'Real-time water quality monitoring and AI-powered disease prediction system for Northeast India',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Get Started Page
    getStartedTitle: 'Join Our Health Network',
    getStartedSubtitle: 'Register as a health worker to start monitoring and reporting health cases in your community',
    healthWorkerRegistration: 'Health Worker Registration',
    registrationDescription: 'Complete your registration to join our health surveillance network',
    fullName: 'Full Name',
    enterFullName: 'Enter your full name',
    phoneNumber: 'Phone Number',
    emailAddress: 'Email Address',
    role: 'Role',
    selectRole: 'Select your role',
    organization: 'Organization',
    organizationPlaceholder: 'Health center, NGO, Government agency',
    experience: 'Experience',
    selectExperience: 'Select your experience level',
    specializations: 'Areas of Specialization',
    agreeToTerms: 'I agree to the terms and conditions and privacy policy',
    completeRegistration: 'Complete Registration',
    setupLocation: 'Setup Location',
    locationSetup: 'Location Setup',
    locationSetupDescription: 'Set up your primary monitoring location',
    locationSelected: 'Location selected successfully',
    training: 'Training',
    trainingModules: 'Training Modules',
    trainingDescription: 'Complete these modules to get started',
    startTraining: 'Start Training',
    duration: 'Duration',
    available: 'Available',
    'coming-soon': 'Coming Soon',
    registrationSuccess: 'Registration completed successfully!',
    agreeToTermsError: 'Please agree to the terms and conditions',
    
    // Roles
    ashaWorker: 'ASHA Worker',
    nurse: 'Nurse',
    doctor: 'Doctor',
    coordinator: 'Health Coordinator',
    volunteer: 'Community Volunteer',
    
    // Experience levels
    zeroToOneYear: '0-1 Year',
    oneToThreeYears: '1-3 Years',
    threeToFiveYears: '3-5 Years',
    moreThanFiveYears: '5+ Years',
    
    // Specializations
    waterborneDiseases: 'Waterborne Diseases',
    maternalHealth: 'Maternal Health',
    childHealth: 'Child Health',
    nutrition: 'Nutrition',
    vaccination: 'Vaccination',
    emergencyResponse: 'Emergency Response',
    
    // Training modules
    waterQualityBasics: 'Water Quality Basics',
    symptomRecognition: 'Symptom Recognition',
    dataCollection: 'Data Collection Methods',
    emergencyProtocols: 'Emergency Protocols',
    communityEngagement: 'Community Engagement',
    
    // Admin Dashboard
    adminDashboard: 'Admin Dashboard',
    adminDashboardDescription: 'Monitor health surveillance activities and manage the system',
    overview: 'Overview',
    reports: 'Reports',
    healthWorkers: 'Health Workers',
    settings: 'Settings',
    totalReports: 'Total Reports',
    activeWorkers: 'Active Workers',
    highRiskAreas: 'High Risk Areas',
    resolvedCases: 'Resolved Cases',
    fromLastWeek: 'from last week',
    newThisWeek: 'new this week',
    actively: 'actively',
    resolutionRate: 'resolution rate',
    recentActivity: 'Recent Activity',
    healthReports: 'Health Reports',
    allHealthReportsDescription: 'View and manage all health reports submitted by field workers',
    reportId: 'Report ID',
    healthWorker: 'Health Worker',
    cases: 'Cases',
    severity: 'Severity',
    status: 'Status',
    date: 'Date',
    healthWorkersManagement: 'Health Workers Management',
    manageHealthWorkersDescription: 'Manage registered health workers and their activities',
    workerId: 'Worker ID',
    name: 'Name',
    lastActive: 'Last Active',
    liveMonitoring: 'Live Monitoring',
    realTimeHealthMonitoring: 'Real-time health monitoring with location tracking',
    monitoringLocationSet: 'Monitoring location has been set',
    systemSettings: 'System Settings',
    configureSystemSettings: 'Configure system alerts and notifications',
    alertThreshold: 'Alert Threshold',
    notificationFrequency: 'Notification Frequency',
    immediate: 'Immediate',
    hourly: 'Hourly',
    daily: 'Daily',
    saveSettings: 'Save Settings',
    
    // Time periods
    last24Hours: 'Last 24 Hours',
    last7Days: 'Last 7 Days',
    last30Days: 'Last 30 Days',
    last90Days: 'Last 90 Days',
    
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
    medium: 'Medium',
    active: 'Active',
    
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
    register: 'रजिस्टर करें',
    view: 'देखें',
    edit: 'संपादित करें',
    delete: 'हटाएं',
    save: 'सेव करें',
    cancel: 'रद्द करें',
    actions: 'कार्य',
    
    // Hero Section
    heroTitle: 'ग्रामीण समुदायों के लिए स्मार्ट स्वास्थ्य निगरानी',
    heroSubtitle: 'पूर्वोत्तर भारत के लिए वास्तविक समय पानी की गुणवत्ता निगरानी और AI-संचालित रोग पूर्वानुमान प्रणाली',
    getStarted: 'शुरू करें',
    learnMore: 'और जानें',
    
    // Get Started Page
    getStartedTitle: 'हमारे स्वास्थ्य नेटवर्क में शामिल हों',
    getStartedSubtitle: 'अपने समुदाय में स्वास्थ्य मामलों की निगरानी और रिपोर्टिंग शुरू करने के लिए स्वास्थ्य कार्यकर्ता के रूप में पंजीकरण करें',
    healthWorkerRegistration: 'स्वास्थ्य कार्यकर्ता पंजीकरण',
    registrationDescription: 'हमारे स्वास्थ्य निगरानी नेटवर्क में शामिल होने के लिए अपना पंजीकरण पूरा करें',
    fullName: 'पूरा नाम',
    enterFullName: 'अपना पूरा नाम दर्ज करें',
    phoneNumber: 'फोन नंबर',
    emailAddress: 'ईमेल पता',
    role: 'भूमिका',
    selectRole: 'अपनी भूमिका चुनें',
    organization: 'संगठन',
    organizationPlaceholder: 'स्वास्थ्य केंद्र, NGO, सरकारी एजेंसी',
    experience: 'अनुभव',
    selectExperience: 'अपना अनुभव स्तर चुनें',
    specializations: 'विशेषज्ञता के क्षेत्र',
    agreeToTerms: 'मैं नियम और शर्तों और गोपनीयता नीति से सहमत हूं',
    completeRegistration: 'पंजीकरण पूरा करें',
    setupLocation: 'स्थान सेट करें',
    locationSetup: 'स्थान सेटअप',
    locationSetupDescription: 'अपना प्राथमिक निगरानी स्थान सेट करें',
    locationSelected: 'स्थान सफलतापूर्वक चुना गया',
    training: 'प्रशिक्षण',
    trainingModules: 'प्रशिक्षण मॉड्यूल',
    trainingDescription: 'शुरू करने के लिए इन मॉड्यूल को पूरा करें',
    startTraining: 'प्रशिक्षण शुरू करें',
    duration: 'अवधि',
    available: 'उपलब्ध',
    'coming-soon': 'जल्द आ रहा है',
    registrationSuccess: 'पंजीकरण सफलतापूर्वक पूरा हुआ!',
    agreeToTermsError: 'कृपया नियम और शर्तों से सहमत हों',
    
    // Roles
    ashaWorker: 'आशा कार्यकर्ता',
    nurse: 'नर्स',
    doctor: 'डॉक्टर',
    coordinator: 'स्वास्थ्य समन्वयक',
    volunteer: 'सामुदायिक स्वयंसेवक',
    
    // Experience levels
    zeroToOneYear: '0-1 वर्ष',
    oneToThreeYears: '1-3 वर्ष',
    threeToFiveYears: '3-5 वर्ष',
    moreThanFiveYears: '5+ वर्ष',
    
    // Specializations
    waterborneDiseases: 'जल जनित रोग',
    maternalHealth: 'मातृ स्वास्थ्य',
    childHealth: 'बाल स्वास्थ्य',
    nutrition: 'पोषण',
    vaccination: 'टीकाकरण',
    emergencyResponse: 'आपातकालीन प्रतिक्रिया',
    
    // Training modules
    waterQualityBasics: 'पानी की गुणवत्ता की मूल बातें',
    symptomRecognition: 'लक्षण पहचान',
    dataCollection: 'डेटा संग्रह विधियां',
    emergencyProtocols: 'आपातकालीन प्रोटोकॉल',
    communityEngagement: 'सामुदायिक सहभागिता',
    
    // Admin Dashboard
    adminDashboard: 'व्यवस्थापक डैशबोर्ड',
    adminDashboardDescription: 'स्वास्थ्य निगरानी गतिविधियों की निगरानी करें और सिस्टम का प्रबंधन करें',
    overview: 'अवलोकन',
    reports: 'रिपोर्ट',
    healthWorkers: 'स्वास्थ्य कार्यकर्ता',
    settings: 'सेटिंग्स',
    totalReports: 'कुल रिपोर्ट',
    activeWorkers: 'सक्रिय कार्यकर्ता',
    highRiskAreas: 'उच्च जोखिम क्षेत्र',
    resolvedCases: 'हल किए गए मामले',
    fromLastWeek: 'पिछले सप्ताह से',
    newThisWeek: 'इस सप्ताह नए',
    actively: 'सक्रिय रूप से',
    resolutionRate: 'समाधान दर',
    recentActivity: 'हाल की गतिविधि',
    healthReports: 'स्वास्थ्य रिपोर्ट',
    allHealthReportsDescription: 'फील्ड वर्कर्स द्वारा प्रस्तुत सभी स्वास्थ्य रिपोर्ट देखें और प्रबंधित करें',
    reportId: 'रिपोर्ट आईडी',
    healthWorker: 'स्वास्थ्य कार्यकर्ता',
    cases: 'मामले',
    severity: 'गंभीरता',
    status: 'स्थिति',
    date: 'दिनांक',
    healthWorkersManagement: 'स्वास्थ्य कार्यकर्ता प्रबंधन',
    manageHealthWorkersDescription: 'पंजीकृत स्वास्थ्य कार्यकर्ताओं और उनकी गतिविधियों का प्रबंधन करें',
    workerId: 'कार्यकर्ता आईडी',
    name: 'नाम',
    lastActive: 'अंतिम सक्रिय',
    liveMonitoring: 'लाइव निगरानी',
    realTimeHealthMonitoring: 'स्थान ट्रैकिंग के साथ रीयल-टाइम स्वास्थ्य निगरानी',
    monitoringLocationSet: 'निगरानी स्थान सेट किया गया है',
    systemSettings: 'सिस्टम सेटिंग्स',
    configureSystemSettings: 'सिस्टम अलर्ट और नोटिफिकेशन कॉन्फ़िगर करें',
    alertThreshold: 'अलर्ट थ्रेशोल्ड',
    notificationFrequency: 'अधिसूचना आवृत्ति',
    immediate: 'तत्काल',
    hourly: 'प्रति घंटा',
    daily: 'दैनिक',
    saveSettings: 'सेटिंग्स सेव करें',
    
    // Time periods
    last24Hours: 'पिछले 24 घंटे',
    last7Days: 'पिछले 7 दिन',
    last30Days: 'पिछले 30 दिन',
    last90Days: 'पिछले 90 दिन',
    
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
    medium: 'मध्यम',
    active: 'सक्रिय',
    
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
    register: 'ನೋಂದಣಿ ಮಾಡಿ',
    view: 'ವೀಕ್ಷಿಸಿ',
    edit: 'ಸಂಪಾದಿಸಿ',
    delete: 'ಅಳಿಸಿ',
    save: 'ಉಳಿಸಿ',
    cancel: 'ರದ್ದುಮಾಡಿ',
    actions: 'ಕ್ರಿಯೆಗಳು',
    
    // Hero Section
    heroTitle: 'ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ಸ್ಮಾರ್ಟ್ ಆರೋಗ್ಯ ಮಾನಿಟರಿಂಗ್',
    heroSubtitle: 'ಈಶಾನ್ಯ ಭಾರತಕ್ಕೆ ನೈಜ-ಸಮಯದ ನೀರಿನ ಗುಣಮಟ್ಟ ಮಾನಿಟರಿಂಗ್ ಮತ್ತು AI-ಚಾಲಿತ ರೋಗ ಮುನ್ಸೂಚನೆ ವ್ಯವಸ್ಥೆ',
    getStarted: 'ಪ್ರಾರಂಭಿಸಿ',
    learnMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
    
    // Get Started Page
    getStartedTitle: 'ನಮ್ಮ ಆರೋಗ್ಯ ನೆಟ್‌ವರ್ಕ್‌ಗೆ ಸೇರಿ',
    getStartedSubtitle: 'ನಿಮ್ಮ ಸಮುದಾಯದಲ್ಲಿ ಆರೋಗ್ಯ ಪ್ರಕರಣಗಳ ಮೇಲ್ವಿಚಾರಣೆ ಮತ್ತು ವರದಿ ಮಾಡಲು ಆರೋಗ್ಯ ಕಾರ್ಯಕರ್ತರಾಗಿ ನೋಂದಣಿ ಮಾಡಿ',
    healthWorkerRegistration: 'ಆರೋಗ್ಯ ಕಾರ್ಯಕರ್ತ ನೋಂದಣಿ',
    registrationDescription: 'ನಮ್ಮ ಆರೋಗ್ಯ ಕಣ್ಗಾವಲು ನೆಟ್‌ವರ್ಕ್‌ಗೆ ಸೇರಲು ನಿಮ್ಮ ನೋಂದಣಿಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ',
    fullName: 'ಪೂರ್ಣ ಹೆಸರು',
    enterFullName: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
    phoneNumber: 'ಫೋನ್ ಸಂಖ್ಯೆ',
    emailAddress: 'ಇಮೇಲ್ ವಿಳಾಸ',
    role: 'ಪಾತ್ರ',
    selectRole: 'ನಿಮ್ಮ ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    organization: 'ಸಂಸ್ಥೆ',
    organizationPlaceholder: 'ಆರೋಗ್ಯ ಕೇಂದ್ರ, NGO, ಸರ್ಕಾರಿ ಏಜೆನ್ಸಿ',
    experience: 'ಅನುಭವ',
    selectExperience: 'ನಿಮ್ಮ ಅನುಭವದ ಮಟ್ಟವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    specializations: 'ವಿಶೇಷತೆಯ ಕ್ಷೇತ್ರಗಳು',
    agreeToTerms: 'ನಾನು ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು ಮತ್ತು ಗೌಪ್ಯತೆ ನೀತಿಯನ್ನು ಒಪ್ಪುತ್ತೇನೆ',
    completeRegistration: 'ನೋಂದಣಿಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ',
    setupLocation: 'ಸ್ಥಳವನ್ನು ಸೆಟಪ್ ಮಾಡಿ',
    locationSetup: 'ಲೊಕೇಶನ್ ಸೆಟಪ್',
    locationSetupDescription: 'ನಿಮ್ಮ ಪ್ರಾಥಮಿಕ ಮೇಲ್ವಿಚಾರಣಾ ಸ್ಥಳವನ್ನು ಸೆಟಪ್ ಮಾಡಿ',
    locationSelected: 'ಸ್ಥಳವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ',
    training: 'ತರಬೇತಿ',
    trainingModules: 'ತರಬೇತಿ ಮಾಡ್ಯೂಲ್‌ಗಳು',
    trainingDescription: 'ಪ್ರಾರಂಭಿಸಲು ಈ ಮಾಡ್ಯೂಲ್‌ಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ',
    startTraining: 'ತರಬೇತಿ ಪ್ರಾರಂಭಿಸಿ',
    duration: 'ಅವಧಿ',
    available: 'ಲಭ್ಯ',
    'coming-soon': 'ಶೀಘ್ರದಲ್ಲೇ ಬರುತ್ತದೆ',
    registrationSuccess: 'ನೋಂದಣಿ ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡಿದೆ!',
    agreeToTermsError: 'ದಯವಿಟ್ಟು ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳನ್ನು ಒಪ್ಪಿರಿ',
    
    // Roles
    ashaWorker: 'ಆಶಾ ಕಾರ್ಯಕರ್ತ',
    nurse: 'ನರ್ಸ್',
    doctor: 'ವೈದ್ಯ',
    coordinator: 'ಆರೋಗ್ಯ ಸಂಯೋಜಕ',
    volunteer: 'ಸಮುದಾಯ ಸ್ವಯಂಸೇವಕ',
    
    // Experience levels
    zeroToOneYear: '0-1 ವರ್ಷ',
    oneToThreeYears: '1-3 ವರ್ಷಗಳು',
    threeToFiveYears: '3-5 ವರ್ಷಗಳು',
    moreThanFiveYears: '5+ ವರ್ಷಗಳು',
    
    // Specializations
    waterborneDiseases: 'ನೀರಿನ ಮೂಲಕ ಹರಡುವ ರೋಗಗಳು',
    maternalHealth: 'ಮಾತೃ ಆರೋಗ್ಯ',
    childHealth: 'ಮಕ್ಕಳ ಆರೋಗ್ಯ',
    nutrition: 'ಪೋಷಣೆ',
    vaccination: 'ಲಸಿಕೆ',
    emergencyResponse: 'ತುರ್ತು ಪ್ರತಿಕ್ರಿಯೆ',
    
    // Training modules
    waterQualityBasics: 'ನೀರಿನ ಗುಣಮಟ್ಟದ ಮೂಲತತ್ವಗಳು',
    symptomRecognition: 'ಲಕ್ಷಣ ಗುರುತಿಸುವಿಕೆ',
    dataCollection: 'ಡೇಟಾ ಸಂಗ್ರಹ ವಿಧಾನಗಳು',
    emergencyProtocols: 'ತುರ್ತು ಪ್ರೋಟೋಕಾಲ್‌ಗಳು',
    communityEngagement: 'ಸಮುದಾಯ ಸಹಭಾಗಿತ್ವ',
    
    // Admin Dashboard
    adminDashboard: 'ನಿರ್ವಾಹಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    adminDashboardDescription: 'ಆರೋಗ್ಯ ಕಣ್ಗಾವಲು ಚಟುವಟಿಕೆಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ ಮತ್ತು ಸಿಸ್ಟಂ ನಿರ್ವಹಿಸಿ',
    overview: 'ಅವಲೋಕನ',
    reports: 'ವರದಿಗಳು',
    healthWorkers: 'ಆರೋಗ್ಯ ಕಾರ್ಯಕರ್ತರು',
    settings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
    totalReports: 'ಒಟ್ಟು ವರದಿಗಳು',
    activeWorkers: 'ಸಕ್ರಿಯ ಕಾರ್ಯಕರ್ತರು',
    highRiskAreas: 'ಹೆಚ್ಚು ಅಪಾಯದ ಪ್ರದೇಶಗಳು',
    resolvedCases: 'ಪರಿಹರಿಸಿದ ಪ್ರಕರಣಗಳು',
    fromLastWeek: 'ಕಳೆದ ವಾರದಿಂದ',
    newThisWeek: 'ಈ ವಾರ ಹೊಸ',
    actively: 'ಸಕ್ರಿಯವಾಗಿ',
    resolutionRate: 'ಪರಿಹಾರ ದರ',
    recentActivity: 'ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ',
    healthReports: 'ಆರೋಗ್ಯ ವರದಿಗಳು',
    allHealthReportsDescription: 'ಫೀಲ್ಡ್ ವರ್ಕರ್‌ಗಳಿಂದ ಸಲ್ಲಿಸಲಾದ ಎಲ್ಲಾ ಆರೋಗ್ಯ ವರದಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ',
    reportId: 'ವರದಿ ಐಡಿ',
    healthWorker: 'ಆರೋಗ್ಯ ಕಾರ್ಯಕರ್ತ',
    cases: 'ಪ್ರಕರಣಗಳು',
    severity: 'ತೀವ್ರತೆ',
    status: 'ಸ್ಥಿತಿ',
    date: 'ದಿನಾಂಕ',
    healthWorkersManagement: 'ಆರೋಗ್ಯ ಕಾರ್ಯಕರ್ತರ ನಿರ್ವಹಣೆ',
    manageHealthWorkersDescription: 'ನೋಂದಾಯಿತ ಆರೋಗ್ಯ ಕಾರ್ಯಕರ್ತರು ಮತ್ತು ಅವರ ಚಟುವಟಿಕೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ',
    workerId: 'ಕಾರ್ಯಕರ್ತ ಐಡಿ',
    name: 'ಹೆಸರು',
    lastActive: 'ಕೊನೆಯ ಸಕ್ರಿಯ',
    liveMonitoring: 'ಲೈವ್ ಮೇಲ್ವಿಚಾರಣೆ',
    realTimeHealthMonitoring: 'ಸ್ಥಳ ಟ್ರ್ಯಾಕಿಂಗ್‌ನೊಂದಿಗೆ ನೈಜ-ಸಮಯದ ಆರೋಗ್ಯ ಮೇಲ್ವಿಚಾರಣೆ',
    monitoringLocationSet: 'ಮೇಲ್ವಿಚಾರಣಾ ಸ್ಥಳವನ್ನು ಸೆಟ್ ಮಾಡಲಾಗಿದೆ',
    systemSettings: 'ಸಿಸ್ಟಂ ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
    configureSystemSettings: 'ಸಿಸ್ಟಂ ಅಲರ್ಟ್‌ಗಳು ಮತ್ತು ಅಧಿಸೂಚನೆಗಳನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ',
    alertThreshold: 'ಅಲರ್ಟ್ ಥ್ರೆಶೋಲ್ಡ್',
    notificationFrequency: 'ಅಧಿಸೂಚನೆ ಆವರ್ತನ',
    immediate: 'ತತ್ಕ್ಷಣ',
    hourly: 'ಗಂಟೆಗೊಮ್ಮೆ',
    daily: 'ದೈನಂದಿನ',
    saveSettings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಉಳಿಸಿ',
    
    // Time periods
    last24Hours: 'ಕಳೆದ 24 ಗಂಟೆಗಳು',
    last7Days: 'ಕಳೆದ 7 ದಿನಗಳು',
    last30Days: 'ಕಳೆದ 30 ದಿನಗಳು',
    last90Days: 'ಕಳೆದ 90 ದಿನಗಳು',
    
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
    medium: 'ಮಧ್ಯಮ',
    active: 'ಸಕ್ರಿಯ',
    
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