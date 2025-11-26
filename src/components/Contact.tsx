import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rajshri97556@gmail.com",
      href: "mailto:rajshri97556@gmail.com",
    },
    // {
    //   icon: Phone,
    //   label: "Phone",
    //   value: "(+91) ",
    //   href: "tel:+91",
    // },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi NCR, India 201304",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/guptarajshri",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rajshri-gupta/",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or partnerships.
            Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{info.label}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.value}</p>
                )}
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card border-border text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              Looking for a dedicated developer to join your team or collaborate on a project?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Button size="lg" asChild>
                <a href="mailto:rajshri97556@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
              {/* <Button size="lg" variant="secondary" asChild>
                <a href="tel:">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Me
                </a>
              </Button> */}
            </div>
            <div className="flex items-center justify-center gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon size={24} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
