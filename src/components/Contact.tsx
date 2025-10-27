import { Card } from "@/components/ui/card";
import { Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We're here to help with all your automotive needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 bg-card border-border text-center hover:border-primary/50 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Call Us</h3>
            <div className="space-y-2">
              <a href="tel:0732632257" className="block text-lg text-primary hover:text-primary-glow transition-colors">
                07 3263 2257
              </a>
              <a href="tel:0408030099" className="block text-lg text-primary hover:text-primary-glow transition-colors">
                0408 030 099
              </a>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border text-center hover:border-secondary/50 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-gradient-secondary flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Availability</h3>
            <p className="text-muted-foreground">
              24/7 Call Service
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Our AI assistant is always available to help you
            </p>
          </Card>

          <Card className="p-6 bg-card border-border text-center hover:border-primary/50 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Location</h3>
            <p className="text-muted-foreground">
              168 Barrett Street
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Your trusted local auto care provider
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
