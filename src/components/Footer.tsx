import wardsLogo from "@/assets/wards-logo.png";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-8 items-center">
          {/* Left Logo */}
          <div className="flex justify-start">
            <img src={wardsLogo} alt="Wards Service Centre Logo" className="w-48 md:w-56 opacity-50 hover:opacity-100 transition-opacity" />
          </div>

          {/* Center Content */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
              Wards Service Centre
            </h3>
            <p className="text-muted-foreground mb-4">
              Premium Auto Care & Maintenance
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-primary transition-colors">
                About Us
              </a>
              <span>•</span>
              <a href="#faqs" className="hover:text-primary transition-colors">
                FAQs
              </a>
              <span>•</span>
              <a href="#privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#terms" className="hover:text-primary transition-colors">
                Terms & Conditions
              </a>
              <span>•</span>
              <a href="#careers" className="hover:text-primary transition-colors">
                Carers / Join Our Team
              </a>
              <span>•</span>
              <a href="#sitemap" className="hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              © {new Date().getFullYear()} Wards Service Centre. All rights reserved.
            </p>
          </div>

          {/* Right Logo */}
          <div className="flex justify-end">
            <img src={wardsLogo} alt="Wards Service Centre Logo" className="w-48 md:w-56 opacity-50 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
