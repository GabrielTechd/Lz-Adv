import { Users, Briefcase, Trophy, Clock } from "lucide-react";
import { motion } from "motion/react";
import { statsData } from "../data/stats";

export function Stats() {
  const icons = [Users, Briefcase, Trophy, Clock];

  return (
    <section className="py-20 px-6 bg-zinc-900/30 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => {
            const Icon = icons[index];
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-yellow-600/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-600/20 transition-all duration-300">
                  <Icon className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="text-4xl mb-2 text-yellow-500">{stat.value}</div>
                <div className="text-zinc-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}