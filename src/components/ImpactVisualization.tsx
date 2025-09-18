import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, Heart, DollarSign, Clock, Users, Shield, MapPin } from "lucide-react";

const ImpactVisualization = () => {
  const impactMetrics = [
    {
      title: "Lives Saved",
      value: "1,247",
      change: "+23%",
      icon: Heart,
      description: "Through early detection and prevention",
      color: "success"
    },
    {
      title: "Response Time",
      value: "4.2h",
      change: "-65%",
      icon: Clock,
      description: "Average time from detection to action",
      color: "primary"
    },
    {
      title: "Communities Protected",
      value: "89",
      change: "+45%",
      icon: Shield,
      description: "Rural communities under active monitoring",
      color: "secondary"
    },
    {
      title: "Cost Savings",
      value: "₹2.3Cr",
      change: "+180%",
      icon: DollarSign,
      description: "Healthcare cost reduction this year",
      color: "warning"
    }
  ];

  const regionData = [
    { region: "Dimapur District", population: 45000, coverage: 95, incidents: 12, prevented: 8 },
    { region: "Kohima Hills", population: 32000, coverage: 88, incidents: 8, prevented: 6 },
    { region: "Mokokchung Valley", population: 28000, coverage: 92, incidents: 5, prevented: 4 },
    { region: "Tuensang Area", population: 21000, coverage: 78, incidents: 15, prevented: 9 },
  ];

  const beforeAfterData = [
    { metric: "Disease Outbreak Frequency", before: "Every 2-3 months", after: "Every 8-10 months", improvement: "70% reduction" },
    { metric: "Early Detection Rate", before: "15%", after: "87%", improvement: "480% increase" },
    { metric: "Community Response Time", before: "48-72 hours", after: "4-6 hours", improvement: "85% faster" },
    { metric: "Prevention Success Rate", before: "30%", after: "94%", improvement: "213% increase" }
  ];

  return (
    <section id="impact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real-World Impact & Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable improvements in disease prevention, response time, and community health 
            outcomes across rural Northeast India
          </p>
        </div>

        {/* Key Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactMetrics.map((metric, idx) => (
            <Card key={idx} className="bg-gradient-card shadow-card border-0 hover:shadow-health transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <metric.icon className={`h-8 w-8 text-${metric.color}`} />
                  <Badge variant="secondary" className={`bg-${metric.color}/10 text-${metric.color}`}>
                    {metric.change}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {metric.value}
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {metric.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regional Coverage Map Visualization */}
        <Card className="bg-gradient-card shadow-card border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Regional Coverage & Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                {regionData.map((region, idx) => (
                  <div key={idx} className="p-4 bg-muted/20 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{region.region}</h4>
                        <p className="text-sm text-muted-foreground">
                          Population: {region.population.toLocaleString()}
                        </p>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {region.coverage}% Coverage
                      </Badge>
                    </div>
                    <Progress value={region.coverage} className="h-2 mb-3" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Incidents: </span>
                        <span className="font-medium text-foreground">{region.incidents}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Prevented: </span>
                        <span className="font-medium text-success">{region.prevented}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="h-80 bg-muted/20 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-3">
                  <MapPin className="h-16 w-16 text-primary mx-auto" />
                  <h3 className="font-semibold text-foreground">Interactive Map Visualization</h3>
                  <p className="text-muted-foreground">
                    Real-time coverage map showing IoT sensors, health checkpoints, 
                    and risk assessment across Northeast India
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Before vs After Comparison */}
        <Card className="bg-gradient-card shadow-card border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Before vs After Implementation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Traditional Approach (Before)
                </h3>
                <div className="space-y-4">
                  {beforeAfterData.map((item, idx) => (
                    <div key={idx} className="p-3 bg-danger/5 border border-danger/10 rounded-lg">
                      <div className="font-medium text-foreground">{item.metric}</div>
                      <div className="text-danger font-semibold">{item.before}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Smart Monitoring System (After)
                </h3>
                <div className="space-y-4">
                  {beforeAfterData.map((item, idx) => (
                    <div key={idx} className="p-3 bg-success/5 border border-success/10 rounded-lg">
                      <div className="font-medium text-foreground">{item.metric}</div>
                      <div className="text-success font-semibold">{item.after}</div>
                      <div className="text-xs text-success mt-1">{item.improvement}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Economic & Social Impact */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-warning" />
                Economic Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <span className="text-muted-foreground">Healthcare Cost Reduction</span>
                <span className="font-bold text-success">₹2.3 Crores</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <span className="text-muted-foreground">Prevention vs Treatment Savings</span>
                <span className="font-bold text-success">85% less cost</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <span className="text-muted-foreground">Productivity Loss Avoided</span>
                <span className="font-bold text-success">₹1.8 Crores</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <span className="text-muted-foreground">ROI on Implementation</span>
                <span className="font-bold text-primary">340%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary" />
                Social Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <span className="text-muted-foreground">Community Awareness</span>
                <span className="font-bold text-success">+95%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <span className="text-muted-foreground">Health Worker Efficiency</span>
                <span className="font-bold text-success">+78%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <span className="text-muted-foreground">Public Trust in Healthcare</span>
                <span className="font-bold text-success">+82%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <span className="text-muted-foreground">Quality of Life Index</span>
                <span className="font-bold text-primary">8.7/10</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactVisualization;