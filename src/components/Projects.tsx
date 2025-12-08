import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Multi-Camera Face Detection Dashboard",
      period: "August 2025 - Present",
      hostedUrl: "https://github.com/guptarajshri/face_detection/tree/face_detection_v1",
      githubUrl: "https://github.com/guptarajshri/face_detection/tree/face_detection_v1",
      description:
        "A comprehensive dashboard for managing RTSP cameras with real-time face detection capabilities, live streaming via WebRTC, and instant alert notifications.",
      highlights: [
        "Built dashboard to add/manage RTSP cameras and view live streams via WebRTC",
        "Implemented JWT authentication and protected REST APIs for camera CRUD operations",
        "Integrated WebSockets for instant face-detection alerts and per-camera statistics",
        "Developed Golang worker for processing multiple camera streams with face detection",
        "Used FFmpeg + OpenCV for frame processing and MediaMTX for WebRTC publishing",
        "Dockerized microservices architecture with Prisma + PostgreSQL backend",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Docker",
        "WebRTC",
        "MediaMTX",
        "Prisma",
        "PostgreSQL",
        "Go",
        "FFmpeg",
        "OpenCV",
      ],
    },
    {
      title: "IntelliAcademy – EdTech Platform",
      period: "January 2023 - June 2023",
      hostedUrl: "",
      githubUrl: "",
      description:
        "A full-stack MERN application designed to enhance online learning with tailored dashboards for instructors and students, payment integration, and engagement analytics.",
      highlights: [
        "Developed full-stack web application using MERN stack",
        "Implemented Razorpay for secure payment processing",
        "Integrated Cloudinary for media uploads and management",
        "Built tailored dashboards with engagement analytics",
        "Secured platform with Bcrypt password hashing and JWT authentication",
      ],
      technologies: [
        "React",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Razorpay",
        "Cloudinary",
        "JWT",
        "Bcrypt",
      ],
    },
    {
      title: "PortFolio – Rajshri Gupta",
      period: "October 2025 - October 2025",
      hostedUrl: "http://rajshrigupta-portfolio.s3-website.ap-south-1.amazonaws.com/",
      githubUrl: "https://github.com/guptarajshri/rajshrigupta-portfolio",
      description:
        "I recently developed and deployed my personal software developer portfolio, designed to present my professional experience, technical skills, and project work in a clean, structured, and modern format. This portfolio was built with a focus on performance, scalability, and high-quality UI/UX engineering.",
      highlights: [
        "Developed my portfolio using a modern, production-ready technology stack focused on performance, scalability, and automation",
        "The project is containerized using 𝗗𝗼𝗰𝗸𝗲𝗿 to create a consistent build and runtime environment",
        "integrated with 𝗝𝗲𝗻𝗸𝗶𝗻𝘀 𝘁𝗼 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗲 the 𝗖𝗜/𝗖𝗗 pipeline for building and deploying updates",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Jenkins",
        "Docker",
        "AWS",
        "S3",
        "CI/CD",
        "Github",
        "Vite",
        "Tailwind"
      ],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world applications and technical expertise
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  {/* <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-bold">{project.title}</h3>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition"
                        title="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div> */}
                  <div className="flex items-center gap-3 mb-1">
                    {/* Title with hover underline + primary color */}
                    <a
                      href={project.hostedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
      text-2xl font-bold 
      transition 
      hover:text-[hsl(var(--primary))] 
      hover:underline
    "
                    >
                      {project.title}
                    </a>

                    {/* GitHub Icon with primary color on hover */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
        text-muted-foreground 
        transition 
        hover:text-[hsl(var(--primary))]
      "
                        title="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{project.period}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className="flex items-start gap-3 text-muted-foreground text-sm"
                  >
                    <span className="text-primary mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
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

export default Projects;
