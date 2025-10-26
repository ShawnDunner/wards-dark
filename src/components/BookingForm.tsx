import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";
import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    date: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for booking submission
    console.log("Booking submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-2">Book Online</h2>
              <p className="text-muted-foreground">Fill out the form below to schedule your service</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="bg-input border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0400 000 000"
                    className="bg-input border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-input border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="vehicle">Vehicle Details</Label>
                <Input 
                  id="vehicle" 
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  placeholder="Make, Model, Year"
                  className="bg-input border-border"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="service">Service Type</Label>
                  <Input 
                    id="service" 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="e.g., Log Book Service"
                    className="bg-input border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input 
                    id="date" 
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-input border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific concerns or requirements?"
                  className="bg-input border-border min-h-[100px]"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Submit Booking Request
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                We'll confirm your booking via phone or email within 24 hours
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
