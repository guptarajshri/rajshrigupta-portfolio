import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "GarudaUAV Soft Solutions Pvt. Ltd",
      companyUrl: "https://garudauav.com/",
      subtitle: "A Trentar Group Company Backed By Dorf Ketal",
      period: "September 2023 - Present",
      achievements: [
        "Designed and developed AI-driven anomaly detection workflows and dashboards, reducing manual inspection effort by 60%",
        "Implemented automated reporting with precise geolocation tagging, improving asset reliability and reducing downtime",
        "Built interactive 2D/3D geospatial visualizations using Leaflet, Mapbox, Potree.js, and Three.js for drone captured data",
        "Developed REST APIs for analytics dashboards, anomaly tracking, and automated PDF/Excel reports with dynamic filters",
        "Engineered scalable frontend architecture with pagination, Lazy Loading, Change Detection (OnPush), Bundle Optimization, Caching Strategies, WCAG Standards",
        "Secured the platform with JWT Authentication, Azure AD SSO, RBAC, CAPTCHA, and encrypted APIs",
      ],
      technologies: [
        "Angular",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "AWS",
        "Azure AD",
        "Leaflet",
        "Mapbox",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-primary font-semibold hover:underline"
                    >
                      {exp.company}
                    </a>
                    {exp.subtitle && (
                      <p className="text-sm text-muted-foreground">{exp.subtitle}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-primary mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
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

export default Experience;
