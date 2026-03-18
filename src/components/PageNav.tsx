import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "FAQs", to: "/faqs" },
  { label: "Book", to: "/book" },
  { label: "Sitemap", to: "/sitemap" },
];

const PageNav = () => {
  return (
    <nav className="mb-8 flex flex-wrap justify-center gap-3" aria-label="Page navigation">
      {navItems.map((item) => (
        <Link key={item.to} to={item.to}>
          <Button variant="outline" className="border-border bg-card hover:border-primary hover:text-primary">
            {item.label}
          </Button>
        </Link>
      ))}
    </nav>
  );
};

export default PageNav;
