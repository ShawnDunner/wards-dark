import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AIBooking from "@/components/AIBooking";
import FAQs from "@/components/FAQs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Services />
      <AIBooking />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
