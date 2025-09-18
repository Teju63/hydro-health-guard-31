import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, User, Phone, Mail, Users, FileText, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BangaloreLocationSelector from "@/components/BangaloreLocationSelector";
import { useTranslation } from "@/hooks/useTranslation";
import { toast } from "sonner";

const GetStarted = () => {
  const [activeTab, setActiveTab] = useState("register");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    organization: "",
    experience: "",
    location: null,
    specialization: [],
    agreeToTerms: false
  });
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      toast.error(t("agreeToTermsError"));
      return;
    }
    console.log("Registration Data:", formData);
    toast.success(t("registrationSuccess"));
  };

  const healthWorkerRoles = [
    { value: "asha", label: t("ashaWorker") },
    { value: "nurse", label: t("nurse") },
    { value: "doctor", label: t("doctor") },
    { value: "coordinator", label: t("coordinator") },
    { value: "volunteer", label: t("volunteer") }
  ];

  const specializations = [
    { id: "waterborne", label: t("waterborneDiseases") },
    { id: "maternal", label: t("maternalHealth") },
    { id: "child", label: t("childHealth") },
    { id: "nutrition", label: t("nutrition") },
    { id: "vaccination", label: t("vaccination") },
    { id: "emergency", label: t("emergencyResponse") }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("getStartedTitle")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("getStartedSubtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="register" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {t("register")}
                </TabsTrigger>
                <TabsTrigger value="setup" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {t("setupLocation")}
                </TabsTrigger>
                <TabsTrigger value="training" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  {t("training")}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="register" className="space-y-6">
                <Card className="bg-gradient-card shadow-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      {t("healthWorkerRegistration")}
                    </CardTitle>
                    <CardDescription>
                      {t("registrationDescription")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">{t("fullName")} *</Label>
                          <Input 
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder={t("enterFullName")}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">{t("phoneNumber")} *</Label>
                          <Input 
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            placeholder="+91 XXXXX XXXXX"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">{t("emailAddress")}</Label>
                          <Input 
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="example@email.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="role">{t("role")} *</Label>
                          <Select value={formData.role} onValueChange={(value) => setFormData({...formData, role: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder={t("selectRole")} />
                            </SelectTrigger>
                            <SelectContent>
                              {healthWorkerRoles.map((role) => (
                                <SelectItem key={role.value} value={role.value}>
                                  {role.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="organization">{t("organization")}</Label>
                          <Input 
                            id="organization"
                            value={formData.organization}
                            onChange={(e) => setFormData({...formData, organization: e.target.value})}
                            placeholder={t("organizationPlaceholder")}
                          />
                        </div>
                        <div>
                          <Label htmlFor="experience">{t("experience")}</Label>
                          <Select value={formData.experience} onValueChange={(value) => setFormData({...formData, experience: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder={t("selectExperience")} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-1">{t("zeroToOneYear")}</SelectItem>
                              <SelectItem value="1-3">{t("oneToThreeYears")}</SelectItem>
                              <SelectItem value="3-5">{t("threeToFiveYears")}</SelectItem>
                              <SelectItem value="5+">{t("moreThanFiveYears")}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label className="text-base font-medium">{t("specializations")}</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                          {specializations.map((spec) => (
                            <div key={spec.id} className="flex items-center space-x-2">
                              <Checkbox 
                                id={spec.id}
                                checked={formData.specialization.includes(spec.id)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    setFormData({
                                      ...formData, 
                                      specialization: [...formData.specialization, spec.id]
                                    });
                                  } else {
                                    setFormData({
                                      ...formData,
                                      specialization: formData.specialization.filter(s => s !== spec.id)
                                    });
                                  }
                                }}
                              />
                              <Label htmlFor={spec.id} className="text-sm">
                                {spec.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="terms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => setFormData({...formData, agreeToTerms: !!checked})}
                        />
                        <Label htmlFor="terms" className="text-sm">
                          {t("agreeToTerms")}
                        </Label>
                      </div>

                      <Button type="submit" className="w-full bg-gradient-hero text-white">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        {t("completeRegistration")}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="setup" className="space-y-6">
                <Card className="bg-gradient-card shadow-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {t("locationSetup")}
                    </CardTitle>
                    <CardDescription>
                      {t("locationSetupDescription")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BangaloreLocationSelector 
                      onLocationSelect={(location) => {
                        setFormData({...formData, location});
                        toast.success(t("locationSelected"));
                      }} 
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="training" className="space-y-6">
                <div className="grid gap-6">
                  <Card className="bg-gradient-card shadow-card border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        {t("trainingModules")}
                      </CardTitle>
                      <CardDescription>
                        {t("trainingDescription")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { title: t("waterQualityBasics"), duration: "30 min", status: "available" },
                          { title: t("symptomRecognition"), duration: "45 min", status: "available" },
                          { title: t("dataCollection"), duration: "25 min", status: "available" },
                          { title: t("emergencyProtocols"), duration: "40 min", status: "coming-soon" },
                          { title: t("communityEngagement"), duration: "35 min", status: "coming-soon" }
                        ].map((module, idx) => (
                          <div key={idx} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                            <div>
                              <h4 className="font-medium text-foreground">{module.title}</h4>
                              <p className="text-sm text-muted-foreground">{t("duration")}: {module.duration}</p>
                            </div>
                            <Badge 
                              variant="secondary" 
                              className={module.status === "available" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}
                            >
                              {t(module.status)}
                            </Badge>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-6 bg-gradient-hero text-white">
                        {t("startTraining")}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GetStarted;