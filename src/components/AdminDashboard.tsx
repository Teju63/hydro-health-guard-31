import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Activity, 
  AlertTriangle, 
  TrendingUp, 
  MapPin, 
  Droplets,
  ThermometerSun,
  Settings,
  Bell,
  CheckCircle
} from "lucide-react";

const AdminDashboard = () => {
  const [activeAlerts, setActiveAlerts] = useState(3);

  const mockData = {
    totalCommunities: 47,
    activeSensors: 89,
    alertsToday: 5,
    healthWorkers: 23,
    recentAlerts: [
      { id: 1, location: "Kohima District", risk: "High", type: "Water Quality", time: "2 hours ago" },
      { id: 2, location: "Dimapur", risk: "Medium", type: "Disease Pattern", time: "4 hours ago" },
      { id: 3, location: "Mokokchung", risk: "Low", type: "Sensor Maintenance", time: "6 hours ago" },
    ],
    waterQuality: [
      { sensor: "KHM-001", location: "Kohima Village", ph: 6.8, turbidity: 12, tds: 245, status: "Good" },
      { sensor: "DMP-002", location: "Dimapur Central", ph: 7.2, turbidity: 8, tds: 198, status: "Excellent" },
      { sensor: "MOK-003", location: "Mokokchung Town", ph: 6.5, turbidity: 18, tds: 312, status: "Fair" },
    ]
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "High": return "destructive";
      case "Medium": return "default";
      case "Low": return "secondary";
      default: return "outline";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Excellent": return "bg-green-500";
      case "Good": return "bg-blue-500";
      case "Fair": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Monitor community health and manage early warning systems</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Communities</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.totalCommunities}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sensors</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.activeSensors}</div>
              <p className="text-xs text-muted-foreground">98% operational</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alerts Today</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.alertsToday}</div>
              <p className="text-xs text-muted-foreground">-40% from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Health Workers</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.healthWorkers}</div>
              <p className="text-xs text-muted-foreground">Online: 18</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="alerts" className="space-y-6">
          <TabsList className="grid w-full lg:w-[400px] grid-cols-3">
            <TabsTrigger value="alerts">Active Alerts</TabsTrigger>
            <TabsTrigger value="sensors">Sensor Data</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="alerts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Recent Alerts & Notifications
                </CardTitle>
                <CardDescription>
                  Monitor and manage health alerts across all communities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.recentAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{alert.location}</p>
                          <p className="text-sm text-muted-foreground">{alert.type} • {alert.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={getRiskColor(alert.risk)}>{alert.risk} Risk</Badge>
                        <Button size="sm" variant="outline">
                          Investigate
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sensors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-primary" />
                  Water Quality Monitoring
                </CardTitle>
                <CardDescription>
                  Real-time sensor data from all monitoring stations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.waterQuality.map((sensor) => (
                    <div key={sensor.sensor} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="font-medium">{sensor.location}</p>
                          <p className="text-sm text-muted-foreground">Sensor ID: {sensor.sensor}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${getStatusColor(sensor.status)}`}></div>
                          <span className="text-sm font-medium">{sensor.status}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">pH Level</p>
                          <p className="font-semibold">{sensor.ph}</p>
                          <Progress value={(sensor.ph / 14) * 100} className="h-2 mt-1" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Turbidity (NTU)</p>
                          <p className="font-semibold">{sensor.turbidity}</p>
                          <Progress value={(sensor.turbidity / 50) * 100} className="h-2 mt-1" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">TDS (ppm)</p>
                          <p className="font-semibold">{sensor.tds}</p>
                          <Progress value={(sensor.tds / 500) * 100} className="h-2 mt-1" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    System Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Alert Thresholds</span>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sensor Calibration</span>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>User Permissions</span>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notification Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>SMS Alerts</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Email Notifications</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>WhatsApp Integration</span>
                    <Button variant="outline" size="sm">Setup</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;