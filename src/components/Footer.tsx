import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Built by Rajshri Gupta
          {/* with <Heart className="w-4 h-4 text-primary fill-primary" /> */}
           
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
