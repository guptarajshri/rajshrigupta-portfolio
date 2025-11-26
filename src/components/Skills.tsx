import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "Angular",
        "TypeScript",
        "JavaScript",
        "React.js",
        "RxJS",
        "NgRx",
        "Angular Material",
        "Bootstrap",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: "Backend & APIs",
      skills: [
        "Java",
        "SpringBoot",
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "GraphQL",
        "MongoDB",
        "PostgreSQL",
        "Prisma",
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "Docker",
        "Kubernetes",
        "AWS",
        "CI/CD",
        "Jenkins",
        "Azure AD",
      ],
    },
    {
      category: "Tools & Testing",
      skills: [
        "Git",
        "GitHub",
        "VSCode",
        "JIRA",
        "Postman",
        "Figma",
        "Webpack",
        "Vite",
      ],
    },
    {
      category: "AI & Modern Tools",
      skills: [
        "Cursor",
        "GitHub Copilot",
        "ChatGPT",
        "Gemini",
        "Antigravity",
        "Claude",
        "Lovable",
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Agile/SCRUM",
        "Client Communication",
        "Time Management",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
