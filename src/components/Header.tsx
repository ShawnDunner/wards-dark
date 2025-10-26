import wardsLogo from "@/assets/wards-logo.png";

const Header = () => {
  return (
    <header className="py-6 px-4 bg-background">
      <div className="container mx-auto flex justify-center">
        <img 
          src={wardsLogo} 
          alt="Wards Service Centre Logo" 
          className="h-32 md:h-40 w-auto"
        />
      </div>
    </header>
  );
};

export default Header;
