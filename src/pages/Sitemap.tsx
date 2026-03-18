import Footer from "@/components/Footer";

const pages = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "FAQs", href: "/faqs" },
  { label: "Book", href: "/book" },
  { label: "Sitemap", href: "/sitemap" },
];

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-4xl font-bold md:text-5xl">Sitemap</h1>
            <p className="text-lg text-muted-foreground">Use the links below to navigate the website.</p>
          </div>
          <div className="space-y-3">
            {pages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="block rounded-lg border border-border bg-card px-5 py-4 text-lg transition-colors hover:border-primary hover:text-primary"
              >
                {page.label}
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
