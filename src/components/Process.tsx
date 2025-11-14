import { MessageCircle, FileSearch, Scale, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { processData } from "../data/process";

export function Process() {
  const icons = [MessageCircle, FileSearch, Scale, CheckCircle];

  return (
    <section className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Como <span className="text-yellow-500">Trabalhamos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6" />
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            {processData.section.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processData.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-yellow-600/20 rounded-2xl blur-xl" />
                    <div className="relative bg-zinc-900 border border-yellow-600/30 rounded-2xl p-6">
                      <Icon className="w-12 h-12 text-yellow-500 mx-auto" />
                    </div>
                    <div className="absolute -top-3 -right-3 bg-yellow-600 text-zinc-950 w-10 h-10 rounded-full flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-yellow-500">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connector line */}
                {index < processData.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-yellow-600/50 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}