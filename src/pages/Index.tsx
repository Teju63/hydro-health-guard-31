import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MonitoringDashboard from "@/components/MonitoringDashboard";
import PredictionAlerts from "@/components/PredictionAlerts";
import CommunityPortalEnhanced from "@/components/CommunityPortalEnhanced";
import ImpactVisualization from "@/components/ImpactVisualization";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MonitoringDashboard />
      <PredictionAlerts />
      <CommunityPortalEnhanced />
      <ImpactVisualization />
      <Footer />
    </div>
  );
};

export default Index;
