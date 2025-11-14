import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { motion } from "motion/react";
import { faqData } from "../data/faq";

export function FAQ() {
  return (
    <section className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Perguntas <span className="text-yellow-500">Frequentes</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6" />
          <p className="text-lg text-zinc-400">
            {faqData.section.subtitle}
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.questions.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <AccordionItem 
                value={`item-${index}`}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg px-6 hover:border-yellow-600/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-zinc-100 hover:text-yellow-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}