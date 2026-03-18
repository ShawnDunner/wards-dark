import wardsLogo from "@/assets/Wards Service Centre logo design.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          <div className="flex-shrink-0">
            <img src={wardsLogo} alt="Wards Service Centre Logo" className="w-32 opacity-50 transition-opacity hover:opacity-100 md:w-48" />
          </div>

          <div className="flex-grow px-4 text-center md:px-8">
            <h3 className="mb-2 bg-gradient-primary bg-clip-text text-2xl font-bold text-transparent">Wards Service Centre</h3>
            <p className="mb-4 text-muted-foreground">Premium Auto Care & Maintenance</p>

            <nav className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground" aria-label="Footer links">
              <Link to="/" className="transition-colors hover:text-primary">Home</Link>
              <span>•</span>
              <Link to="/services" className="transition-colors hover:text-primary">Services</Link>
              <span>•</span>
              <Link to="/faqs" className="transition-colors hover:text-primary">FAQs</Link>
              <span>•</span>
              <Link to="/book" className="transition-colors hover:text-primary">Book</Link>
              <span>•</span>
              <Link to="/sitemap" className="transition-colors hover:text-primary">Sitemap</Link>
            </nav>

            <p className="mt-4 text-sm text-muted-foreground">© {new Date().getFullYear()} Wards Service Centre ABN 19 657 867 331. All rights reserved.</p>
          </div>

          <div className="flex-shrink-0">
            <img src={wardsLogo} alt="Wards Service Centre Logo" className="w-32 opacity-50 transition-opacity hover:opacity-100 md:w-48" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
