import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Activity, 
  AlertTriangle, 
  Users, 
  BarChart3,
  Droplets,
  Thermometer,
  Zap,
  Shield
} from "lucide-react";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  const [currentDemo, setCurrentDemo] = useState("overview");

  const demoFeatures = [
    {
      id: "monitoring",
      title: "Live IoT Monitoring",
      icon: Activity,
      description: "Real-time water quality and health data collection",
      metrics: [
        { label: "Water pH", value: "7.2", status: "good" },
        { label: "Turbidity", value: "8 NTU", status: "excellent" },
        { label: "Temperature", value: "24°C", status: "normal" },
        { label: "TDS", value: "245 ppm", status: "good" }
      ]
    },
    {
      id: "prediction",
      title: "AI Outbreak Prediction",
      icon: AlertTriangle,
      description: "Machine learning algorithms predict disease outbreaks",
      alerts: [
        { location: "Kohima District", risk: "Medium", confidence: "87%" },
        { location: "Dimapur", risk: "Low", confidence: "92%" },
        { location: "Mokokchung", risk: "High", confidence: "94%" }
      ]
    },
    {
      id: "community",
      title: "Community Health Portal",
      icon: Users,
      description: "Mobile-first interface for health workers",
      stats: {
        activeWorkers: 47,
        reportsToday: 23,
        communities: 15,
        responsiveness: "98%"
      }
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Play className="h-5 w-5 text-primary" />
            Interactive System Demo
          </DialogTitle>
          <DialogDescription>
            Explore the key features of our Smart Community Health Monitoring System
          </DialogDescription>
        </DialogHeader>

        <Tabs value={currentDemo} onValueChange={setCurrentDemo} className="mt-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="monitoring">IoT Sensors</TabsTrigger>
            <TabsTrigger value="prediction">AI Prediction</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Architecture Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Droplets className="h-8 w-8 text-blue-500" />
                      <div>
                        <h4 className="font-semibold">IoT Water Sensors</h4>
                        <p className="text-sm text-muted-foreground">Real-time quality monitoring</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Zap className="h-8 w-8 text-yellow-500" />
                      <div>
                        <h4 className="font-semibold">AI Processing</h4>
                        <p className="text-sm text-muted-foreground">Predictive analytics engine</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Shield className="h-8 w-8 text-green-500" />
                      <div>
                        <h4 className="font-semibold">Early Warning</h4>
                        <p className="text-sm text-muted-foreground">Automated alert system</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Users className="h-8 w-8 text-purple-500" />
                      <div>
                        <h4 className="font-semibold">Community Portal</h4>
                        <p className="text-sm text-muted-foreground">Health worker interface</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Live Sensor Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {demoFeatures[0].metrics.map((metric, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{metric.label}</span>
                        <Badge variant={metric.status === "excellent" ? "default" : "secondary"}>
                          {metric.status}
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold text-primary mt-1">{metric.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Sensor Location:</strong> Kohima District, Nagaland • 
                    <strong> Last Updated:</strong> 2 minutes ago • 
                    <strong> Status:</strong> Online
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prediction" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  AI Outbreak Predictions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {demoFeatures[1].alerts.map((alert, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{alert.location}</p>
                        <p className="text-sm text-muted-foreground">Confidence: {alert.confidence}</p>
                      </div>
                      <Badge 
                        variant={alert.risk === "High" ? "destructive" : alert.risk === "Medium" ? "default" : "secondary"}
                      >
                        {alert.risk} Risk
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>AI Model:</strong> Analyzing 15+ parameters including water quality, weather patterns, 
                    and historical health data to predict outbreak probability with 91% accuracy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Community Health Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">{demoFeatures[2].stats.activeWorkers}</div>
                    <p className="text-sm text-muted-foreground">Active Health Workers</p>
                  </div>
                  <div className="text-center p-3 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">{demoFeatures[2].stats.reportsToday}</div>
                    <p className="text-sm text-muted-foreground">Reports Today</p>
                  </div>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Mobile-First Design:</strong> Optimized for smartphones with offline capabilities, 
                    simple symptom reporting, and instant alert notifications via SMS/WhatsApp.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between pt-4 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close Demo
          </Button>
          <div className="flex gap-2">
            <Button variant="outline">
              View Full Documentation
            </Button>
            <Button>
              Request Live Demo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;