const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Wards Service Centre
          </h3>
          <p className="text-muted-foreground mb-4">
            Premium Auto Care & Maintenance
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <a href="tel:0732632257" className="hover:text-primary transition-colors">
              07 3263 2257
            </a>
            <span>•</span>
            <a href="tel:0408030099" className="hover:text-primary transition-colors">
              0408 030 099
            </a>
            <span>•</span>
            <span>Available 24/7</span>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            © {new Date().getFullYear()} Wards Service Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
