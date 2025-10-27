import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Phone } from "lucide-react";
const AIBooking = () => {
  const handleAICall = () => {
    // Placeholder for AI call functionality
    console.log("AI Call initiated");
  };
  return <section id="booking" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border-border shadow-purple">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-secondary flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Book with Our <span className="bg-gradient-secondary bg-clip-text text-transparent">AI Assistant</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our intelligent AI agent is available 24/7 to answer your<br />
                questions and book your service appointment
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-muted/50 border-border">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Call Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our AI assistant to book your service
                </p>
                <div className="space-y-2">
                  <a href="tel:0738692222" className="block text-lg font-semibold text-primary hover:text-primary-glow transition-colors">
                    07 3869 2222
                  </a>
                  <a href="tel:0492220222" className="block text-lg font-semibold text-primary hover:text-primary-glow transition-colors">
                    0492 220 222
                  </a>
                </div>
              </Card>

              <Card className="p-6 bg-muted/50 border-border">
                <h3 className="text-xl font-semibold mb-3">What Our AI Can Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Answer service-related questions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Check available time slots
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Book your vehicle service
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Provide service information
                  </li>
                </ul>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" onClick={handleAICall} className="bg-gradient-secondary hover:shadow-purple transition-all duration-300 text-lg px-8">
                <Phone className="mr-2 w-5 h-5" />
                Start AI Call
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Available 24/7 • Instant booking confirmation
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default AIBooking;