import { Scale, Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";
import { teamData } from "../data/team";
import { siteInfo } from "../data/site-info";

export function Team() {
  return (
    <section id="equipe" className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Nossa <span className="text-yellow-500">Equipe</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6" />
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            {teamData.section.subtitle}
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-transparent rounded-2xl blur-2xl" />
                  <div className="relative bg-yellow-600/10 w-48 h-48 rounded-2xl flex items-center justify-center">
                    <Scale className="w-24 h-24 text-yellow-500" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl mb-2 text-yellow-500">{teamData.lawyer.name}</h3>
                  <p className="text-lg text-zinc-400 mb-4">{teamData.lawyer.role}</p>
                  <p className="text-sm text-zinc-500 mb-6">{teamData.lawyer.oab}</p>
                  
                  <div className="space-y-4 mb-6">
                    {teamData.lawyer.bio.map((paragraph, index) => (
                      <p key={index} className="text-zinc-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a 
                      href={siteInfo.contact.emailLink}
                      className="bg-zinc-800 p-3 rounded-lg hover:bg-yellow-600/10 hover:text-yellow-500 transition-all cursor-pointer"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a 
                      href={siteInfo.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-800 p-3 rounded-lg hover:bg-yellow-600/10 hover:text-yellow-500 transition-all cursor-pointer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-2xl blur-xl" />
            <div className="relative bg-zinc-800/50 backdrop-blur-sm border border-yellow-600/20 rounded-2xl p-8">
              <h3 className="text-2xl mb-4 text-yellow-500">{teamData.specializationsTitle}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {teamData.lawyer.specializations.map((spec, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span className="text-zinc-300">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
