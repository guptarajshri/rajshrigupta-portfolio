import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import { ExternalLink } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Science Informatics",
      institution: "Institute of Informatics and Communication, University of Delhi",
      year: "2021-2023",
      type: "Masters",
    },
    {
      degree: "Bachelor of Science, Mathematics and Computer Science",
      institution: "Maharaja Agrasen College, University of Delhi",
      year: "2016-2019",
      type: "Bachelors",
    },
  ];

  const certifications = [
    {
      title: "Angular - The Complete Guide",
      provider: "Udemy",
      year: "2025",
      url: "https://www.udemy.com/certificate/UC-e7c331f9-3a56-4133-9ae0-7e47f7b6fa2c/"
    },
    {
      title: "Full Stack Web Development and Mobile App Development – MERN Stack",
      provider: "Udemy",
      year: "2025",
      url: "https://www.udemy.com/certificate/UC-9af3865f-78c5-41f4-b454-ecae0393d419/"
    },
    {
      title: "Data Structure and Algorithm",
      provider: "Code Help",
      year: "2025",
      url: "https://www.codehelp.in"
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="text-primary" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                // <Card
                //   key={index}
                //   className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300"
                // >
                //   <h4 className="font-semibold mb-2">{cert.title}</h4>
                //   <p className="text-sm text-muted-foreground mb-2">{cert.provider}</p>
                //   <span className="text-xs text-primary">{cert.year}</span>
                // </Card>
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-[hsl(var(--primary))] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
        font-semibold 
        hover:text-[hsl(var(--primary))] 
        hover:underline 
        transition
      "
                    >
                      {cert.title}
                    </a>

                    {/* Link Icon */}
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-[hsl(var(--primary))] transition"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">{cert.provider}</p>
                  <span className="text-xs text-primary">{cert.year}</span>
                </Card>

              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
