import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, MessageSquare, TrendingUp, MapPin, Clock, Phone } from "lucide-react";

const CommunityPortal = () => {
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Symptom Reporting Form */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Quick Symptom Report
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dimapur">Dimapur District</SelectItem>
                      <SelectItem value="kohima">Kohima Hills</SelectItem>
                      <SelectItem value="mokokchung">Mokokchung Valley</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="cases">Number of Cases</Label>
                  <Input type="number" placeholder="Enter number of cases" />
                </div>

                <div>
                  <Label htmlFor="symptoms">Symptoms Observed</Label>
                  <Textarea 
                    placeholder="Describe symptoms (fever, diarrhea, vomiting, etc.)"
                    className="min-h-[80px]"
                  />
                </div>

                <div>
                  <Label htmlFor="severity">Severity Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - Mild symptoms</SelectItem>
                      <SelectItem value="moderate">Moderate - Concerning symptoms</SelectItem>
                      <SelectItem value="high">High - Severe symptoms</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-gradient-hero text-white border-0">
                  Submit Report
                </Button>

                <div className="text-center">
                  <Button variant="outline" size="sm" className="border-secondary text-secondary">
                    <Phone className="h-4 w-4 mr-2" />
                    Emergency Hotline: 108
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Active Health Workers */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card shadow-card border-0 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Active Health Workers
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

            {/* Recent Reports */}
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Recent Symptom Reports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report, idx) => (
                    <div key={idx} className="border-l-4 border-primary/20 pl-4 py-3 bg-muted/10 rounded-r-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{report.time}</span>
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
                          <p className="font-medium text-foreground">
                            {report.cases} case(s) - {report.symptoms}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Reported by {report.worker}
                          </p>
                        </div>
                        <Button size="sm" variant="outline" className="border-primary text-primary">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* AI Correlation Alert */}
        <Card className="bg-gradient-card shadow-card border-0 mt-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-warning/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-warning" />
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

export default CommunityPortal;