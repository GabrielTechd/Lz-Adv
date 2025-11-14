import { Briefcase, Home, Users, FileText, TrendingUp, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";
import { practiceAreasData } from "../data/practice-areas";

export function PracticeAreas() {
  const icons = [Briefcase, Users, Home, Heart, FileText, TrendingUp];

  return (
    <section id="areas" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-lg text-zinc-400 mb-4">{practiceAreasData.section.subtitle}</p>
          <h2 className="text-4xl md:text-5xl mb-4">
            Nossas <span className="text-yellow-500">Especialidades</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6" />
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            {practiceAreasData.section.description}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreasData.areas.map((area, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="bg-zinc-900/50 border-zinc-800 hover:border-yellow-600/50 transition-all duration-300 group h-full"
                >
                  <CardHeader>
                    <div className="bg-yellow-600/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-600/20 transition-colors">
                      <Icon className="w-7 h-7 text-yellow-500" />
                    </div>
                    <CardTitle className="text-xl text-zinc-100">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zinc-400 leading-relaxed">
                      {area.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}