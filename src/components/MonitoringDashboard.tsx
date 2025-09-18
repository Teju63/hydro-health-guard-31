import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Droplets, Thermometer, Zap, Eye, TrendingUp, AlertTriangle } from "lucide-react";

const MonitoringDashboard = () => {
  // Simulated IoT sensor data
  const waterQualityData = [
    { 
      parameter: "pH Level", 
      value: 7.2, 
      unit: "", 
      status: "Good", 
      icon: Droplets,
      range: "6.5-8.5",
      progress: 80
    },
    { 
      parameter: "Turbidity", 
      value: 2.1, 
      unit: "NTU", 
      status: "Excellent", 
      icon: Eye,
      range: "< 5 NTU",
      progress: 95
    },
    { 
      parameter: "TDS", 
      value: 180, 
      unit: "ppm", 
      status: "Good", 
      icon: Zap,
      range: "< 500 ppm",
      progress: 75
    },
    { 
      parameter: "Temperature", 
      value: 24.5, 
      unit: "°C", 
      status: "Normal", 
      icon: Thermometer,
      range: "20-30°C",
      progress: 85
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Excellent": return "success";
      case "Good": return "primary";
      case "Normal": return "secondary";
      case "Warning": return "warning";
      case "Critical": return "danger";
      default: return "secondary";
    }
  };

  const recentAlerts = [
    { time: "2 hours ago", message: "Water quality optimal - All parameters normal", type: "success" },
    { time: "6 hours ago", message: "Slight pH increase detected in Sector 3", type: "warning" },
    { time: "1 day ago", message: "Routine maintenance completed successfully", type: "info" }
  ];

  return (
    <section id="monitoring" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Live IoT Monitoring Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time water quality monitoring using IoT sensors deployed across rural communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {waterQualityData.map((data, idx) => (
            <Card key={idx} className="bg-gradient-card shadow-card border-0 hover:shadow-health transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <data.icon className="h-8 w-8 text-primary" />
                  <Badge variant="secondary" className={`bg-${getStatusColor(data.status)}/10 text-${getStatusColor(data.status)}`}>
                    {data.status}
                  </Badge>
                </div>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {data.parameter}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">
                      {data.value}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {data.unit}
                    </span>
                  </div>
                  <Progress value={data.progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    Safe range: {data.range}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Water Quality Trends (Last 24 Hours)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto" />
                    <p className="text-muted-foreground">Interactive Chart Visualization</p>
                    <p className="text-sm text-muted-foreground">
                      Real-time data from 12 IoT sensors across the region
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  Recent Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert, idx) => (
                    <div key={idx} className="border-l-4 border-primary/20 pl-4 py-2">
                      <p className="text-sm text-foreground">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 mt-6">
              <CardHeader>
                <CardTitle className="text-sm">System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Active Sensors</span>
                    <Badge variant="secondary" className="bg-success/10 text-success">12/12</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Data Transmission</span>
                    <Badge variant="secondary" className="bg-success/10 text-success">Online</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Last Update</span>
                    <span className="text-sm text-foreground">30 sec ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringDashboard;