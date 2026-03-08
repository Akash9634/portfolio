import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-indigo-400 mb-8 backdrop-blur-sm">
              <Terminal className="w-4 h-4" />
              <span className="text-sm font-medium">B.Tech Graduate 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Digital</span> <br />
              <span className="text-slate-300">Experiences.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I'm a Full-Stack Developer specializing in Spring Boot & React. 
              I craft elegant, high-performance web applications that solve real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#projects" 
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/25 w-full sm:w-auto"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <a href="https://github.com/Akash9634" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-indigo-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#contact" className="p-4 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-lg relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-2 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-2xl" />
              {/* Abstract representation of code/development */}
              <div className="absolute inset-4 rounded-2xl bg-slate-950 flex flex-col items-center justify-center p-8 text-slate-500 space-y-4 font-mono text-sm border border-slate-800">
                <div className="w-full h-8 bg-slate-900 rounded-md flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 w-full bg-slate-900/50 rounded-md p-4 space-y-3">
                  <div className="w-3/4 h-3 bg-slate-800 rounded" />
                  <div className="w-1/2 h-3 bg-indigo-900/50 rounded" />
                  <div className="w-5/6 h-3 bg-slate-800 rounded" />
                  <div className="w-2/3 h-3 bg-purple-900/50 rounded" />
                  <div className="w-4/5 h-3 bg-slate-800 rounded" />
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-slate-800/90 backdrop-blur-md border border-slate-700 p-4 rounded-2xl shadow-xl"
            >
              <div className="flex justify-center items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-bold text-white">Available for Hire</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
