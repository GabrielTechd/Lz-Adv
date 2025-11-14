import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";
import { testimonialsData } from "../data/testimonials";

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            O Que Dizem Nossos <span className="text-yellow-500">Clientes</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6" />
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            {testimonialsData.section.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="bg-zinc-900/50 border-zinc-800 hover:border-yellow-600/50 transition-all duration-300 h-full"
              >
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-yellow-500/20 mb-4" />
                  <p className="text-zinc-300 mb-6 leading-relaxed">{testimonial.content}</p>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  
                  <div className="border-t border-zinc-800 pt-4">
                    <p className="text-zinc-100 mb-1">{testimonial.name}</p>
                    <p className="text-sm text-zinc-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}