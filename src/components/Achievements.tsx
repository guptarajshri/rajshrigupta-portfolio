import { Card } from "@/components/ui/card";
import { Award, TrendingUp, Users, Zap } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: "Performance Excellence",
      description: "Optimized application performance by 40% through efficient Angular architecture",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Built cloud-native SaaS applications serving thousands of users",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Successfully collaborated in Agile teams across multiple projects",
      color: "text-primary",
    },
    {
      icon: Zap,
      title: "Modern Workflows",
      description: "Implemented CI/CD pipelines and modern development practices",
      color: "text-primary",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:scale-105 transition-all duration-300 bg-card border-border hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 animate-pulse">
                <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
