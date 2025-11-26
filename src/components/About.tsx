import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical thinking and innovative solutions",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Effective teamwork in Agile environments",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
            I'm a Software Developer with 2+ years of experience, specializing in Angular, React.js for 
            building scalable, cloud-native SaaS applications. Proficient in creating interactive 
            dashboards, real-time data visualizations, and responsive UI components with modern workflows.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Skilled in RESTful APIs integration, performance optimization, NgRx Store for 
            state management, and security best practices. Experienced in working within collaborative 
            Agile environments, delivering high-quality, user-focused solutions with strong attention 
            to scalability, usability, and cross-browser compatibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:scale-105 transition-transform duration-300 bg-card border-border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
