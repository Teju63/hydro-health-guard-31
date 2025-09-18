import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Github, Mail, Phone, MapPin, Award } from "lucide-react";
import DemoModal from "./DemoModal";
import DocumentationModal from "./DocumentationModal";

const Footer = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);
  return (
    <footer className="bg-gradient-hero text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl">HealthGuard</h3>
                <p className="text-sm text-white/80">Smart Health Monitoring</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              Revolutionary IoT-powered early warning system preventing water-borne diseases 
              in rural Northeast India. Advanced monitoring and AI-driven predictions for 
              proactive community health protection.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-yellow-300" />
              <span className="text-white/90">Advanced HealthTech Solution</span>
            </div>
          </div>

          {/* Contact & Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact & Demo</h4>
            <div className="space-y-3">
              <a 
                href="mailto:healthguard@example.com" 
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                healthguard@example.com
              </a>
              <a 
                href="tel:+911234567890" 
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 12345 67890
              </a>
              <div className="flex items-start gap-2 text-white/80">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Northeast India<br/>Rural Health Initiative</span>
              </div>
              <a 
                href="https://github.com/healthguard" 
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Github className="h-4 w-4" />
                View Documentation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">
              © 2024 HealthGuard - Smart Community Health Monitoring System for Rural Healthcare.
            </p>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10"
                size="sm"
                onClick={() => setDemoOpen(true)}
              >
                View Demo
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10"
                size="sm"
                onClick={() => setDocsOpen(true)}
              >
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>

      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
      <DocumentationModal open={docsOpen} onOpenChange={setDocsOpen} />
    </footer>
  );
};

export default Footer;