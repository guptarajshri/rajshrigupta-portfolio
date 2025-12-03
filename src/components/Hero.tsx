import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePic from "../assets/Profile_picture.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(45, 55, 72, 0.95), rgba(45, 55, 72, 0.65)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <Avatar className="h-32 w-32 border-4 border-primary/20 animate-float">
            <AvatarImage src={profilePic} alt="Rajshri Gupta" />
              <AvatarFallback className="text-3xl bg-primary/10 text-primary">RG</AvatarFallback>
            </Avatar>
          </div>

          <div className="mb-6">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Software Developer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Rajshri Gupta</span> 👋
          </h1>

          <p className="text-xl md:text-xl text-muted-foreground mb-4">
            Software Developer specializing in building scalable, cloud-native SaaS applications
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            2+ years of experience creating interactive dashboards, real-time data visualizations, 
            and responsive UI components with modern workflows.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button size="lg" asChild className="animate-glow">
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/Rajshri_Gupta_Resume_Angular.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/guptarajshri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/rajshri-gupta/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:rajshri97556@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
            {/* <a
              href="tel:+91"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Phone"
            >
              <Phone size={28} />
            </a> */}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        style={{ animationDelay: "3s" }}
      ></div>
    </section>
  );
};

export default Hero;