import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Activity, BarChart3, AlertTriangle, Users, Home } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "@/hooks/useTranslation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, currentLanguage, setCurrentLanguage } = useTranslation();

  const navItems = [
    { name: t("home"), href: "#home", icon: Home },
    { name: t("monitoring"), href: "#monitoring", icon: Activity },
    { name: "Predictions", href: "#predictions", icon: AlertTriangle },
    { name: t("community"), href: "#community", icon: Users },
    { name: "Impact", href: "#impact", icon: BarChart3 },
  ];

  const NavLink = ({ item, mobile = false }: { item: typeof navItems[0], mobile?: boolean }) => (
    <a
      href={item.href}
      className={`flex items-center gap-2 transition-smooth ${
        mobile 
          ? "text-foreground hover:text-primary py-2" 
          : "text-muted-foreground hover:text-primary"
      }`}
      onClick={() => mobile && setIsOpen(false)}
    >
      <item.icon className="h-4 w-4" />
      {item.name}
    </a>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-hero rounded-lg">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">HealthGuard</h1>
              <p className="text-xs text-muted-foreground">Smart Health Monitoring</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
            <LanguageSelector 
              currentLanguage={currentLanguage} 
              onLanguageChange={setCurrentLanguage} 
            />
            <Button 
              variant="default" 
              className="bg-gradient-hero text-white border-0 shadow-health"
              onClick={() => window.location.href = '/admin'}
            >
              {t("admin")}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <NavLink key={item.name} item={item} mobile />
                ))}
                <div className="pt-4">
                  <LanguageSelector 
                    currentLanguage={currentLanguage} 
                    onLanguageChange={setCurrentLanguage} 
                  />
                </div>
                <Button 
                  variant="default" 
                  className="bg-gradient-hero text-white border-0 mt-4"
                  onClick={() => window.location.href = '/admin'}
                >
                  {t("admin")}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;