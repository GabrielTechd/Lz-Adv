import { Award, Shield, Users } from "lucide-react";
import { motion } from "motion/react";
import { aboutData } from "../data/about";

export function About() {
  const icons = [Shield, Award, Users];

  return (
    <section id="sobre" className="py-24 px-6 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-lg text-zinc-400 mb-4">{aboutData.section.subtitle}</p>
          <h2 className="text-4xl md:text-5xl mb-4">
            {aboutData.section.title.split(' - ')[0]} - <span className="text-yellow-500">{aboutData.section.title.split(' - ')[1]}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto" />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-zinc-300 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-transparent rounded-2xl blur-xl" />
            <div className="relative bg-zinc-800/50 backdrop-blur-sm border border-yellow-600/20 rounded-2xl p-8">
              <div className="space-y-8">
                {aboutData.values.map((value, index) => {
                  const Icon = icons[index];
                  return (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="bg-yellow-600/10 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-yellow-500" />
                      </div>
                      <div>
                        <h3 className="text-xl mb-2 text-yellow-500">{value.title}</h3>
                        <p className="text-zinc-400">{value.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}