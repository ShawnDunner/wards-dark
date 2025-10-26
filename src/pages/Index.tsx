import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AIBooking from "@/components/AIBooking";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Services />
      <AIBooking />
      <BookingForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
