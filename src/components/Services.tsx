import { Card } from "@/components/ui/card";
import { Battery, ShieldCheck, Wrench, Droplet, Disc, BookOpen } from "lucide-react";

const services = [
  {
    icon: Battery,
    title: "Batteries, Starter Motors & Alternators",
    description: "Expert diagnostics and replacement for all electrical components",
    color: "primary"
  },
  {
    icon: ShieldCheck,
    title: "Safety Certificate",
    description: "COI Approved Inspection Station 9509 - ensuring your vehicle meets safety standards",
    color: "secondary"
  },
  {
    icon: Wrench,
    title: "Suspension & CV Shafts",
    description: "Complete suspension repairs and CV shaft replacements",
    color: "primary"
  },
  {
    icon: Droplet,
    title: "Coolant Flush, Brake Flush & Radiators",
    description: "Fluid services to keep your vehicle running smoothly",
    color: "secondary"
  },
  {
    icon: Disc,
    title: "Tyres & Balancing",
    description: "Premium tyre fitting, rotation, and precision wheel balancing",
    color: "primary"
  },
  {
    icon: BookOpen,
    title: "Log Book Servicing",
    description: "Manufacturer-compliant servicing to maintain your warranty",
    color: "secondary"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive automotive care for all your vehicle needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-orange group cursor-pointer animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
