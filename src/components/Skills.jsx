import { motion } from 'framer-motion';
import { LayoutTemplate, Server, Wrench } from 'lucide-react';

const skillsData = [
  {
    category: "Frontend",
    icon: <LayoutTemplate className="w-6 h-6 text-indigo-400" />,
    items: ["React", "JavaScript", "Tailwind CSS", "HTML5/CSS3", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6 text-purple-400" />,
    items: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs"]
  },
  {
    category: "Tools & Others",
    icon: <Wrench className="w-6 h-6 text-pink-400" />,
    items: ["Git/GitHub", "Postman", "Maven", "npm/yarn", "VS Code"]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Toolkit</span></h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A comprehensive list of the technologies I work with to build robust and scalable full-stack applications.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillsData.map((skillGroup, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-slate-950/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-900 rounded-xl group-hover:scale-110 transition-transform">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-300 rounded-lg text-sm font-medium hover:bg-indigo-900/30 hover:text-indigo-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
