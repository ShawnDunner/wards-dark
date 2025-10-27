import wardsLogo from "@/assets/wards-logo.png";
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Left Logo */}
          <div className="flex-shrink-0">
            <img src={wardsLogo} alt="Wards Service Centre Logo" className="w-32 md:w-48 opacity-50 hover:opacity-100 transition-opacity" />
          </div>

          {/* Center Content */}
          <div className="flex-grow text-center px-4 md:px-8">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
              Wards Service Centre
            </h3>
            <p className="text-muted-foreground mb-4">
              Premium Auto Care & Maintenance
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
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
            
            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 mt-4 mb-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              © {new Date().getFullYear()} Wards Service Centre ABN 19 657 867 331. All rights reserved.
            </p>
          </div>

          {/* Right Logo */}
          <div className="flex-shrink-0">
            <img src={wardsLogo} alt="Wards Service Centre Logo" className="w-32 md:w-48 opacity-50 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
