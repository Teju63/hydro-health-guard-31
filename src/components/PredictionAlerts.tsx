import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Brain, AlertTriangle, CheckCircle, Clock, MapPin, Send } from "lucide-react";

const PredictionAlerts = () => {
  const predictions = [
    {
      id: 1,
      region: "Dimapur District",
      riskLevel: "High",
      confidence: 87,
      predictedOutbreak: "Cholera",
      timeframe: "Next 48-72 hours",
      factors: ["Poor water quality in 3 locations", "Increased diarrhea cases", "Monsoon season"],
      recommendations: ["Immediate water testing", "Community health alert", "Preventive medication distribution"]
    },
    {
      id: 2,
      region: "Kohima Hills",
      riskLevel: "Moderate",
      confidence: 72,
      predictedOutbreak: "Typhoid",
      timeframe: "Next 5-7 days",
      factors: ["TDS levels rising", "Temperature fluctuation", "Seasonal patterns"],
      recommendations: ["Enhanced monitoring", "Community awareness", "Hygiene campaign"]
    },
    {
      id: 3,
      region: "Mokokchung Valley",
      riskLevel: "Low",
      confidence: 45,
      predictedOutbreak: "None",
      timeframe: "Next 2 weeks",
      factors: ["Stable water quality", "No symptom reports", "Good seasonal conditions"],
      recommendations: ["Continue routine monitoring", "Maintain preventive measures"]
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "High": return "danger";
      case "Moderate": return "warning";
      case "Low": return "success";
      default: return "secondary";
    }
  };

  const getRiskBg = (level: string) => {
    switch (level) {
      case "High": return "bg-danger/10";
      case "Moderate": return "bg-warning/10";
      case "Low": return "bg-success/10";
      default: return "bg-secondary/10";
    }
  };

  return (
    <section id="predictions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI-Powered Disease Prediction
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Machine learning algorithms analyze water quality data, health reports, and environmental 
            factors to predict potential disease outbreaks before they occur
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {predictions.map((prediction) => (
            <Card 
              key={prediction.id} 
              className={`bg-gradient-card shadow-card border-0 ${getRiskBg(prediction.riskLevel)} hover:shadow-health transition-all`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{prediction.region}</CardTitle>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`bg-${getRiskColor(prediction.riskLevel)}/10 text-${getRiskColor(prediction.riskLevel)}`}
                  >
                    {prediction.riskLevel} Risk
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    AI Confidence: {prediction.confidence}%
                  </span>
                </div>

                {prediction.predictedOutbreak !== "None" && (
                  <Alert className={`${getRiskBg(prediction.riskLevel)} border-${getRiskColor(prediction.riskLevel)}/20`}>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Predicted: {prediction.predictedOutbreak}</strong>
                      <br />
                      <span className="text-sm">{prediction.timeframe}</span>
                    </AlertDescription>
                  </Alert>
                )}

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Contributing Factors:</h4>
                  <ul className="space-y-1">
                    {prediction.factors.map((factor, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Recommended Actions:</h4>
                  <ul className="space-y-1">
                    {prediction.recommendations.map((rec, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 text-success mt-0.5 flex-shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                {prediction.riskLevel === "High" && (
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="bg-gradient-hero text-white border-0 flex-1">
                      <Send className="h-3 w-3 mr-1" />
                      Send Alert
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary text-primary">
                      View Details
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              AI Model Performance & Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">94.2%</div>
                <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
                <div className="text-xs text-muted-foreground mt-1">Last 6 months</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">8.5h</div>
                <div className="text-sm text-muted-foreground">Average Early Warning</div>
                <div className="text-xs text-muted-foreground mt-1">Before outbreak</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">23</div>
                <div className="text-sm text-muted-foreground">Prevented Outbreaks</div>
                <div className="text-xs text-muted-foreground mt-1">This year</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary/5 rounded-lg">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Real-time Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Our AI continuously processes data from 12 IoT sensors, 8 health checkpoints, 
                    and weather monitoring stations to provide accurate predictions 24/7.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PredictionAlerts;