import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageNav from "@/components/PageNav";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="px-4 py-16">
        <div className="container mx-auto">
          <PageNav />
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-4xl font-bold md:text-5xl">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive automotive care delivered by our experienced team.
            </p>
          </div>
          <Services />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
