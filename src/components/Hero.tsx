import { Scale, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { heroData } from "../data/hero";
import { siteInfo } from "../data/site-info";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
      
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-20 right-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" 
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 mb-4"
        >
          {heroData.welcomeText}
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl mb-4 tracking-tight"
        >
          {heroData.title.split(' - ')[0]} - <span className="text-yellow-500">{heroData.title.split(' - ')[1]}</span>
        </motion.h1>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-8" 
        />
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-12"
        >
          {heroData.subtitle}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button 
            onClick={scrollToContact}
            className="bg-yellow-600 hover:bg-yellow-700 text-zinc-950 px-8 py-6 text-lg"
          >
            {heroData.buttons.primary}
          </Button>
          <Button 
            variant="outline" 
            onClick={() => document.getElementById("areas")?.scrollIntoView({ behavior: "smooth" })}
            className="border-yellow-600 text-yellow-500 hover:bg-yellow-600/10 px-8 py-6 text-lg"
          >
            {heroData.buttons.secondary}
          </Button>
        </motion.div>
        
        {/* Quick contact info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center text-zinc-400"
        >
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-yellow-500" />
            <span>{siteInfo.contact.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-yellow-500" />
            <span>{siteInfo.contact.email}</span>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  );
}