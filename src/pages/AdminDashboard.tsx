import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  MapPin, 
  AlertTriangle, 
  TrendingUp, 
  Calendar, 
  Download,
  Eye,
  Settings,
  BarChart3,
  Activity,
  Shield
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LocationSelector from "@/components/LocationSelector";
import { useTranslation } from "@/hooks/useTranslation";
import { toast } from "sonner";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedTimeframe, setSelectedTimeframe] = useState("7days");
  const { t } = useTranslation();

  // Mock data
  const healthStats = {
    totalReports: 247,
    activeWorkers: 15,
    highRiskAreas: 3,
    resolvedCases: 89
  };

  const recentReports = [
    {
      id: "RPT001",
      worker: "Dr. Priya Sharma",
      location: "Whitefield",
      symptoms: "Fever, Diarrhea",
      cases: 5,
      severity: "High",
      date: "2024-01-15",
      status: "Under Investigation"
    },
    {
      id: "RPT002", 
      worker: "Nurse Aman Singh",
      location: "Koramangala",
      symptoms: "Stomach Pain",
      cases: 2,
      severity: "Low",
      date: "2024-01-15",
      status: "Resolved"
    },
    {
      id: "RPT003",
      worker: "Dr. Mary Konyak", 
      location: "Electronic City",
      symptoms: "Vomiting, Fever",
      cases: 8,
      severity: "High",
      date: "2024-01-14",
      status: "Alert Sent"
    }
  ];

  const healthWorkers = [
    {
      id: "HW001",
      name: "Dr. Priya Sharma",
      role: "Community Health Officer",
      location: "Whitefield District",
      status: "Active",
      reports: 23,
      lastActive: "2 hours ago"
    },
    {
      id: "HW002",
      name: "Nurse Aman Singh", 
      role: "Field Health Worker",
      location: "Koramangala Hills",
      status: "Active",
      reports: 18,
      lastActive: "4 hours ago"
    },
    {
      id: "HW003",
      name: "Dr. Mary Konyak",
      role: "Rural Health Coordinator",
      location: "Electronic City",
      status: "Offline",
      reports: 31,
      lastActive: "1 day ago"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "bg-danger/10 text-danger";
      case "Medium":
        return "bg-warning/10 text-warning";
      case "Low":
        return "bg-success/10 text-success";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success/10 text-success";
      case "Offline":
        return "bg-muted text-muted-foreground";
      case "Under Investigation":
        return "bg-warning/10 text-warning";
      case "Resolved":
        return "bg-success/10 text-success";
      case "Alert Sent":
        return "bg-danger/10 text-danger";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {t("adminDashboard")}
              </h1>
              <p className="text-muted-foreground">
                {t("adminDashboardDescription")}
              </p>
            </div>
            <div className="flex gap-2">
              <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24hours">{t("last24Hours")}</SelectItem>
                  <SelectItem value="7days">{t("last7Days")}</SelectItem>
                  <SelectItem value="30days">{t("last30Days")}</SelectItem>
                  <SelectItem value="90days">{t("last90Days")}</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                {t("overview")}
              </TabsTrigger>
              <TabsTrigger value="reports" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                {t("reports")}
              </TabsTrigger>
              <TabsTrigger value="workers" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                {t("healthWorkers")}
              </TabsTrigger>
              <TabsTrigger value="monitoring" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {t("monitoring")}
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                {t("settings")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-card shadow-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{t("totalReports")}</p>
                        <p className="text-2xl font-bold text-foreground">{healthStats.totalReports}</p>
                      </div>
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Activity className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex items-center mt-2 text-xs">
                      <TrendingUp className="h-3 w-3 text-success mr-1" />
                      <span className="text-success">+12%</span>
                      <span className="text-muted-foreground ml-1">{t("fromLastWeek")}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{t("activeWorkers")}</p>
                        <p className="text-2xl font-bold text-foreground">{healthStats.activeWorkers}</p>
                      </div>
                      <div className="p-3 bg-success/10 rounded-lg">
                        <Users className="h-6 w-6 text-success" />
                      </div>
                    </div>
                    <div className="flex items-center mt-2 text-xs">
                      <TrendingUp className="h-3 w-3 text-success mr-1" />
                      <span className="text-success">+3</span>
                      <span className="text-muted-foreground ml-1">{t("newThisWeek")}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{t("highRiskAreas")}</p>
                        <p className="text-2xl font-bold text-foreground">{healthStats.highRiskAreas}</p>
                      </div>
                      <div className="p-3 bg-warning/10 rounded-lg">
                        <AlertTriangle className="h-6 w-6 text-warning" />
                      </div>
                    </div>
                    <div className="flex items-center mt-2 text-xs">
                      <span className="text-warning">Monitoring</span>
                      <span className="text-muted-foreground ml-1">{t("actively")}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{t("resolvedCases")}</p>
                        <p className="text-2xl font-bold text-foreground">{healthStats.resolvedCases}</p>
                      </div>
                      <div className="p-3 bg-success/10 rounded-lg">
                        <Shield className="h-6 w-6 text-success" />
                      </div>
                    </div>
                    <div className="flex items-center mt-2 text-xs">
                      <span className="text-success">85%</span>
                      <span className="text-muted-foreground ml-1">{t("resolutionRate")}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    {t("recentActivity")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentReports.slice(0, 5).map((report) => (
                      <div key={report.id} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {report.worker.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-medium text-foreground text-sm">{report.worker}</p>
                            <p className="text-xs text-muted-foreground">{report.location} • {report.cases} {t("cases")}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className={getSeverityColor(report.severity)}>
                          {t(report.severity.toLowerCase())}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports" className="space-y-6">
              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    {t("healthReports")}
                  </CardTitle>
                  <CardDescription>
                    {t("allHealthReportsDescription")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t("reportId")}</TableHead>
                        <TableHead>{t("healthWorker")}</TableHead>
                        <TableHead>{t("location")}</TableHead>
                        <TableHead>{t("symptoms")}</TableHead>
                        <TableHead>{t("cases")}</TableHead>
                        <TableHead>{t("severity")}</TableHead>
                        <TableHead>{t("status")}</TableHead>
                        <TableHead>{t("date")}</TableHead>
                        <TableHead>{t("actions")}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentReports.map((report) => (
                        <TableRow key={report.id}>
                          <TableCell className="font-medium">{report.id}</TableCell>
                          <TableCell>{report.worker}</TableCell>
                          <TableCell>{report.location}</TableCell>
                          <TableCell>{report.symptoms}</TableCell>
                          <TableCell>{report.cases}</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className={getSeverityColor(report.severity)}>
                              {t(report.severity.toLowerCase())}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary" className={getStatusColor(report.status)}>
                              {report.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{report.date}</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              <Eye className="h-3 w-3 mr-1" />
                              {t("view")}
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="workers" className="space-y-6">
              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    {t("healthWorkersManagement")}
                  </CardTitle>
                  <CardDescription>
                    {t("manageHealthWorkersDescription")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t("workerId")}</TableHead>
                        <TableHead>{t("name")}</TableHead>
                        <TableHead>{t("role")}</TableHead>
                        <TableHead>{t("location")}</TableHead>
                        <TableHead>{t("status")}</TableHead>
                        <TableHead>{t("reports")}</TableHead>
                        <TableHead>{t("lastActive")}</TableHead>
                        <TableHead>{t("actions")}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {healthWorkers.map((worker) => (
                        <TableRow key={worker.id}>
                          <TableCell className="font-medium">{worker.id}</TableCell>
                          <TableCell>{worker.name}</TableCell>
                          <TableCell>{worker.role}</TableCell>
                          <TableCell>{worker.location}</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className={getStatusColor(worker.status)}>
                              {t(worker.status.toLowerCase())}
                            </Badge>
                          </TableCell>
                          <TableCell>{worker.reports}</TableCell>
                          <TableCell>{worker.lastActive}</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              <Eye className="h-3 w-3 mr-1" />
                              {t("view")}
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monitoring" className="space-y-6">
              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {t("liveMonitoring")}
                  </CardTitle>
                  <CardDescription>
                    {t("realTimeHealthMonitoring")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <LocationSelector onLocationSelect={(location) => {
                    console.log("Admin selected location:", location);
                    toast.success(t("monitoringLocationSet"));
                  }} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    {t("systemSettings")}
                  </CardTitle>
                  <CardDescription>
                    {t("configureSystemSettings")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="alert-threshold">{t("alertThreshold")}</Label>
                      <Select defaultValue="5">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3">3 {t("cases")}</SelectItem>
                          <SelectItem value="5">5 {t("cases")}</SelectItem>
                          <SelectItem value="10">10 {t("cases")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="notification-frequency">{t("notificationFrequency")}</Label>
                      <Select defaultValue="immediate">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">{t("immediate")}</SelectItem>
                          <SelectItem value="hourly">{t("hourly")}</SelectItem>
                          <SelectItem value="daily">{t("daily")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button className="bg-gradient-hero text-white">
                    {t("saveSettings")}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;