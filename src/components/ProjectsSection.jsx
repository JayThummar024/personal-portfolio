import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Instagram Clone",
    description: "A Social media app mimicking Instagram's core features.",
    image: "/projects/instagram.png",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express", "JWT", "Redux"],
    demoUrl: "#",
    githubUrl: "https://github.com/JayThummar024/insta-clone",
  },
  {
    id: 2,
    title: "ResMatch",
    description: "NLP-powered resume analyzer and recommender to optimize job applications.",
    image: "/projects/resmatch.jpeg",
    tags: ["Machine Learning", "Python", "Auto-Encoder", "streamlit"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/JayThummar024/ResMatch---NLP-based-Jobs-Resume-Recommender-System",
  },
  {
    id: 3,
    title: "Tomato - Food Delivery App",
    description:
      "Frontend of a food delivery application similar to Swiggy, built with React and Context API.",
    image: "/projects/food-app.png",
    tags: ["React", "Hooks", "Context API"],
    demoUrl: "#",
    githubUrl: "https://github.com/JayThummar024/swigato",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to
          detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* <a
                      disabled
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/JayThummar024"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
