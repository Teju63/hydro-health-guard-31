import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Code, 
  Database, 
  Cpu, 
  Wifi,
  Download,
  ExternalLink,
  Book,
  Settings,
  Shield
} from "lucide-react";

interface DocumentationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DocumentationModal = ({ open, onOpenChange }: DocumentationModalProps) => {
  const technicalSpecs = [
    {
      category: "IoT Hardware",
      icon: Wifi,
      items: [
        "Arduino Uno R3/ESP32 microcontrollers",
        "pH, Turbidity, TDS, Temperature sensors",
        "GSM/WiFi connectivity modules",
        "Solar power management system"
      ]
    },
    {
      category: "Software Stack",
      icon: Code,
      items: [
        "Frontend: React.js + TypeScript",
        "Backend: Node.js + Express.js",
        "Database: MongoDB Atlas",
        "ML Pipeline: Python + TensorFlow"
      ]
    },
    {
      category: "AI/ML Models",
      icon: Cpu,
      items: [
        "Water quality classification (Random Forest)",
        "Disease outbreak prediction (LSTM)",
        "Anomaly detection (Isolation Forest)",
        "Risk assessment scoring algorithm"
      ]
    }
  ];

  const apiEndpoints = [
    { method: "GET", endpoint: "/api/sensors/data", description: "Retrieve real-time sensor data" },
    { method: "POST", endpoint: "/api/alerts/create", description: "Create new health alert" },
    { method: "GET", endpoint: "/api/predictions/outbreak", description: "Get outbreak predictions" },
    { method: "POST", endpoint: "/api/reports/symptom", description: "Submit symptom report" }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Technical Documentation
          </DialogTitle>
          <DialogDescription>
            Comprehensive technical documentation for the Smart Community Health Monitoring System
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="hardware">Hardware</TabsTrigger>
            <TabsTrigger value="software">Software</TabsTrigger>
            <TabsTrigger value="deployment">Deployment</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="prose max-w-none">
                  <h4 className="font-semibold mb-2">Problem Statement</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Rural communities in Northeast India face recurring water-borne diseases due to poor water quality 
                    monitoring and delayed health response systems. Traditional approaches lack real-time data collection 
                    and predictive capabilities.
                  </p>
                  
                  <h4 className="font-semibold mb-2">Solution Approach</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our integrated IoT + AI system provides continuous water quality monitoring, AI-powered disease 
                    outbreak prediction, and community health management through a unified platform designed specifically 
                    for rural deployment.
                  </p>

                  <h4 className="font-semibold mb-2">Key Innovation</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li>Real-time correlation between water quality and health symptoms</li>
                    <li>ML-powered early warning system with 91% accuracy</li>
                    <li>Mobile-first design optimized for low-bandwidth rural areas</li>
                    <li>Solar-powered, weatherproof IoT sensor nodes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Impact Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">72%</div>
                    <p className="text-sm text-muted-foreground">Faster outbreak detection</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">85%</div>
                    <p className="text-sm text-muted-foreground">Reduction in response time</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <p className="text-sm text-muted-foreground">Communities served</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">91%</div>
                    <p className="text-sm text-muted-foreground">Prediction accuracy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Data Flow Pipeline</h4>
                    <div className="flex items-center justify-between text-sm">
                      <span className="bg-blue-100 px-2 py-1 rounded">IoT Sensors</span>
                      <span>→</span>
                      <span className="bg-green-100 px-2 py-1 rounded">Data Processing</span>
                      <span>→</span>
                      <span className="bg-purple-100 px-2 py-1 rounded">AI Analysis</span>
                      <span>→</span>
                      <span className="bg-red-100 px-2 py-1 rounded">Alert System</span>
                    </div>
                  </div>

                  {technicalSpecs.map((spec, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <spec.icon className="h-5 w-5 text-primary" />
                        <h4 className="font-semibold">{spec.category}</h4>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {spec.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hardware" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wifi className="h-5 w-5" />
                  IoT Hardware Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Water Quality Sensors</h4>
                      <ul className="text-sm space-y-1">
                        <li><strong>pH Sensor:</strong> Range 0-14, ±0.1 accuracy</li>
                        <li><strong>Turbidity:</strong> 0-4000 NTU, ±5% accuracy</li>
                        <li><strong>TDS:</strong> 0-1000ppm, ±2% accuracy</li>
                        <li><strong>Temperature:</strong> -10°C to 80°C, ±0.5°C</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Communication & Power</h4>
                      <ul className="text-sm space-y-1">
                        <li><strong>Connectivity:</strong> GSM/4G, WiFi fallback</li>
                        <li><strong>Power:</strong> Solar + 12V battery backup</li>
                        <li><strong>Enclosure:</strong> IP67 weatherproof rating</li>
                        <li><strong>Data Rate:</strong> 15-minute intervals</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-800 mb-1">Installation Guidelines</h4>
                    <p className="text-sm text-amber-700">
                      Sensors should be installed in primary water sources (wells, pumps, reservoirs) 
                      with proper calibration and monthly maintenance schedules.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="software" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  API Reference
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {apiEndpoints.map((endpoint, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Badge variant={endpoint.method === "GET" ? "secondary" : "default"}>
                          {endpoint.method}
                        </Badge>
                        <code className="text-sm bg-muted px-2 py-1 rounded">{endpoint.endpoint}</code>
                      </div>
                      <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Database Schema
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted p-3 rounded-lg">
                    <h4 className="font-semibold mb-2">Core Collections</h4>
                    <ul className="text-sm space-y-1">
                      <li><strong>sensors:</strong> Device metadata and configuration</li>
                      <li><strong>readings:</strong> Time-series sensor data</li>
                      <li><strong>alerts:</strong> Generated warnings and notifications</li>
                      <li><strong>reports:</strong> Community health reports</li>
                      <li><strong>users:</strong> Health workers and admin accounts</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deployment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Deployment Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Production Requirements</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Node.js 18+ runtime environment</li>
                      <li>• MongoDB Atlas or self-hosted cluster</li>
                      <li>• SSL certificates for HTTPS</li>
                      <li>• SMS gateway integration (Twilio/local provider)</li>
                      <li>• Load balancer for high availability</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Security Considerations</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• End-to-end encryption for sensor data</li>
                      <li>• Role-based access control (RBAC)</li>
                      <li>• API rate limiting and authentication</li>
                      <li>• Regular security audits and updates</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between pt-4 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close Documentation
          </Button>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button>
              <ExternalLink className="h-4 w-4 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DocumentationModal;