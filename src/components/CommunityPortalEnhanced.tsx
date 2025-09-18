import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, MapPin, Phone, Send, Plus, Clock } from "lucide-react";
import BangaloreLocationSelector from "./BangaloreLocationSelector";
import { useTranslation } from "@/hooks/useTranslation";

const CommunityPortalEnhanced = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { t } = useTranslation();

  const healthWorkers = [
    { 
      name: "Dr. Priya Sharma", 
      role: "Community Health Officer", 
      location: "Dimapur District",
      status: "Active",
      lastReport: "2 hours ago",
      patients: 45
    },
    { 
      name: "Nurse Aman Singh", 
      role: "Field Health Worker", 
      location: "Kohima Hills",
      status: "Active",
      lastReport: "4 hours ago",
      patients: 32
    },
    { 
      name: "Dr. Mary Konyak", 
      role: "Rural Health Coordinator", 
      location: "Mokokchung Valley",
      status: "Offline",
      lastReport: "1 day ago",
      patients: 28
    }
  ];

  const recentReports = [
    { 
      time: "30 min ago",
      worker: "Dr. Priya Sharma",
      symptoms: "Fever, Diarrhea",
      cases: 3,
      severity: "Moderate"
    },
    { 
      time: "2 hours ago",
      worker: "Nurse Aman Singh",
      symptoms: "Stomach pain",
      cases: 1,
      severity: "Low"
    },
    { 
      time: "5 hours ago",
      worker: "Dr. Mary Konyak",
      symptoms: "Vomiting, Fever",
      cases: 2,
      severity: "High"
    }
  ];

  return (
    <section id="community" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Community Health Portal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mobile-first interface enabling rural health workers to report symptoms, 
            track cases, and collaborate with the AI system for early disease detection
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="report">Report Symptoms</TabsTrigger>
            <TabsTrigger value="workers">Health Workers</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Active Health Workers */}
              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Active Health Workers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {healthWorkers.slice(0, 3).map((worker, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {worker.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground text-sm">{worker.name}</h4>
                            <p className="text-xs text-muted-foreground">{worker.location}</p>
                          </div>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={worker.status === "Active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}
                        >
                          {worker.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Reports */}
              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Recent Reports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentReports.slice(0, 3).map((report, idx) => (
                      <div key={idx} className="border-l-4 border-primary/20 pl-3 py-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-muted-foreground">{report.time}</span>
                          <Badge 
                            variant="secondary" 
                            className={`text-xs ${
                              report.severity === "High" ? "bg-danger/10 text-danger" :
                              report.severity === "Moderate" ? "bg-warning/10 text-warning" :
                              "bg-success/10 text-success"
                            }`}
                          >
                            {report.severity}
                          </Badge>
                        </div>
                        <p className="text-sm font-medium text-foreground">
                          {report.cases} case(s) - {report.symptoms}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="report" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Submit Health Report</CardTitle>
                <CardDescription>
                  Report symptoms and health concerns in your community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="reporter-name">Reporter Name</Label>
                    <Input id="reporter-name" placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="contact">Contact Number</Label>
                    <Input id="contact" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                
                <BangaloreLocationSelector onLocationSelect={(location) => {
                  console.log('Selected location:', location);
                }} />
                
                <div>
                  <Label htmlFor="symptoms">Symptoms Observed</Label>
                  <Textarea 
                    id="symptoms" 
                    placeholder="Describe the symptoms (fever, diarrhea, vomiting, etc.)"
                    className="min-h-[100px]"
                  />
                </div>
                <div>
                  <Label htmlFor="affected-count">Number of Affected People</Label>
                  <Input id="affected-count" type="number" placeholder="0" />
                </div>
                <Button className="w-full bg-gradient-hero text-white">
                  <Send className="h-4 w-4 mr-2" />
                  {t("submitReport")}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workers" className="space-y-6">
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  All Health Workers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {healthWorkers.map((worker, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold">
                          {worker.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{worker.name}</h4>
                          <p className="text-sm text-muted-foreground">{worker.role}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="h-3 w-3 text-primary" />
                            <span className="text-xs text-muted-foreground">{worker.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant="secondary" 
                          className={worker.status === "Active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}
                        >
                          {worker.status}
                        </Badge>
                        <div className="text-sm text-muted-foreground mt-1">
                          {worker.patients} patients
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Last: {worker.lastReport}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* AI Correlation Alert */}
        <Card className="bg-gradient-card shadow-card border-0 mt-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-warning/10 rounded-lg">
                <Clock className="h-6 w-6 text-warning" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">
                  AI Correlation Alert
                </h3>
                <p className="text-muted-foreground">
                  Our AI has detected a correlation between recent symptom reports and declining 
                  water quality in Dimapur District. Automatic alert sent to local health authorities 
                  and water quality monitoring team.
                </p>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="bg-gradient-hero text-white border-0">
                    View Analysis
                  </Button>
                  <Button size="sm" variant="outline" className="border-primary text-primary">
                    Send Additional Alert
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CommunityPortalEnhanced;