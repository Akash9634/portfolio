import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: "Smart Lease",
    description: "A comprehensive property leasing platform designed to streamline the rental experience for landlords and tenants. Features seamless payment integration, image management, and AI-powered smart contracts generation.",
    tags: ["Spring Boot", "React", "Razorpay", "Cloudinary", "Google Gemini API"],
    githubUrl: "https://github.com/Akash9634",
    liveUrl: "https://example.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
            <FolderGit2 className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Featured Projects</h2>
            <p className="text-slate-400 mt-2">Showcasing my best full-stack work</p>
          </div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group flex flex-col lg:flex-row gap-8 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all"
            >
              {/* Project Image Placeholder */}
              <div className="lg:w-2/5 relative overflow-hidden bg-slate-800 min-h-[300px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center p-8 bg-slate-900">
                  <div className="w-full h-full rounded-xl border-2 border-slate-800 border-dashed flex flex-col items-center justify-center gap-4 bg-slate-950/50">
                     <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 tracking-tighter">SMART<br/>LEASE</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-md text-sm font-semibold border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-white font-medium hover:underline underline-offset-4"
                  >
                    <Github className="w-5 h-5" /> Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium hover:underline underline-offset-4"
                  >
                    <ExternalLink className="w-5 h-5" /> Live Preview
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
