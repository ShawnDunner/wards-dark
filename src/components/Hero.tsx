import { Button } from "@/components/ui/button";
import { Phone, Clock } from "lucide-react";
import wardsLogo from "@/assets/wards-logo.png";
const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <img src={wardsLogo} alt="Wards Service Centre Logo" className="w-48 md:w-64 lg:w-72 mx-auto mb-8 drop-shadow-2xl" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-[#eb5516]">
            Wards Service Centre
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Premium Auto Care & Maintenance
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Clock className="w-5 h-5 text-primary" />
            <p className="text-lg text-foreground">Booking system availble 24/7 for your convenience</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToBooking} className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8">
              Book a Service
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact} className="border-primary text-[#eb5516] hover:bg-primary/10 text-lg px-8">
              <Phone className="mr-2 w-5 h-5" />
              To Book In Your Vehicle Call Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;