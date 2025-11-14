import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { blogData } from "../data/blog";

export function Blog() {
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
            Artigos e <span className="text-yellow-500">Notícias</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6" />
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            {blogData.section.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogData.articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="bg-zinc-900/50 border-zinc-800 hover:border-yellow-600/50 transition-all duration-300 group h-full cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-yellow-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-yellow-600/10 text-yellow-500 text-xs rounded-full mb-3">
                    {article.category}
                  </div>
                  <CardTitle className="text-xl text-zinc-100 group-hover:text-yellow-500 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-400 mb-4 leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="text-yellow-500 hover:text-yellow-400 hover:bg-yellow-600/10 p-0 h-auto"
                  >
                    Ler mais <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button 
            variant="outline"
            className="border-yellow-600 text-yellow-500 hover:bg-yellow-600/10 px-8 py-6"
          >
            {blogData.buttonText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}