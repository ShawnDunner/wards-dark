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
              <a href="tel:0738692222" className="hover:text-primary transition-colors">
                07 3869 2222
              </a>
              <span>•</span>
              <a href="tel:0492220222" className="hover:text-primary transition-colors">
                0492 220 222
              </a>
              <span>•</span>
              <span>Available 24/7</span>
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
