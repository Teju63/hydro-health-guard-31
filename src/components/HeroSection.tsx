import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, Users, MapPin } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-health">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Advanced HealthTech Solution for Rural Communities
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                {t("heroTitle")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("heroSubtitle")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-hero text-white border-0 shadow-health hover:shadow-lg transition-all"
              >
                {t("getStarted")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary">
                {t("learnMore")}
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Shield, label: "Disease Prevention", value: "85%" },
                { icon: Zap, label: "Response Time", value: "-60%" },
                { icon: Users, label: "Communities", value: "500+" },
                { icon: MapPin, label: "Coverage Area", value: "50km²" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-bold text-2xl text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-gradient-card shadow-health border-0">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Problem Statement
                  </h3>
                  <p className="text-muted-foreground">
                    Rural communities in Northeast India face recurring water-borne diseases 
                    due to poor water quality monitoring and delayed health responses.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-danger/10 rounded-lg">
                    <div className="text-2xl font-bold text-danger">12%</div>
                    <div className="text-sm text-muted-foreground">Disease Rate</div>
                  </div>
                  <div className="p-4 bg-warning/10 rounded-lg">
                    <div className="text-2xl font-bold text-warning">48h</div>
                    <div className="text-sm text-muted-foreground">Response Delay</div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Our Solution
                  </h3>
                  <p className="text-muted-foreground">
                    AI-powered early warning system with IoT sensors, real-time monitoring, 
                    and community health surveillance for proactive disease prevention.
                  </p>
                </div>
              </div>
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;