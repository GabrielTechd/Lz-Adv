import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";
import { contactData } from "../data/contact";
import { siteInfo } from "../data/site-info";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(contactData.form.successMessage);
  };

  const icons = { phone: Phone, email: Mail, address: MapPin, schedule: Clock };

  return (
    <section id="contato" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-lg text-zinc-400 mb-4">{contactData.section.subtitle}</p>
          <h2 className="text-4xl md:text-5xl mb-4">
            Como podemos <span className="text-yellow-500">ajudar?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6" />
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            {contactData.section.description}
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-zinc-300">
                      {contactData.form.labels.name}
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={contactData.form.placeholders.name}
                      required
                      className="bg-zinc-800/50 border-zinc-700 focus:border-yellow-600 text-zinc-100"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-zinc-300">
                      {contactData.form.labels.email}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={contactData.form.placeholders.email}
                      required
                      className="bg-zinc-800/50 border-zinc-700 focus:border-yellow-600 text-zinc-100"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2 text-zinc-300">
                      {contactData.form.labels.phone}
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={contactData.form.placeholders.phone}
                      required
                      className="bg-zinc-800/50 border-zinc-700 focus:border-yellow-600 text-zinc-100"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm mb-2 text-zinc-300">
                      {contactData.form.labels.message}
                    </label>
                    <Textarea
                      id="message"
                      placeholder={contactData.form.placeholders.message}
                      required
                      rows={5}
                      className="bg-zinc-800/50 border-zinc-700 focus:border-yellow-600 text-zinc-100 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-zinc-950 py-6"
                  >
                    {contactData.form.button}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            {contactData.contactInfo.map((info, index) => {
              const Icon = icons[info.type as keyof typeof icons];
              let content = info.content || "";
              let link = "#";
              
              if (info.type === "phone") {
                content = siteInfo.contact.phone;
                link = siteInfo.contact.phoneLink;
              } else if (info.type === "email") {
                content = siteInfo.contact.email;
                link = siteInfo.contact.emailLink;
              } else if (info.type === "address") {
                content = siteInfo.contact.address;
              }
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Card 
                    className="bg-zinc-900/50 border-zinc-800 hover:border-yellow-600/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-yellow-600/10 p-3 rounded-lg">
                          <Icon className="w-6 h-6 text-yellow-500" />
                        </div>
                        <div>
                          <h3 className="text-lg mb-1 text-zinc-100">{info.title}</h3>
                          {link === "#" ? (
                            <p className="text-zinc-400">{content}</p>
                          ) : (
                            <a 
                              href={link}
                              className="cursor-pointer text-zinc-400 hover:text-yellow-500 transition-colors"
                            >
                              {content}
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative mt-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-2xl blur-xl" />
              <div className="relative bg-zinc-800/50 backdrop-blur-sm border border-yellow-600/20 rounded-2xl p-8">
                <h3 className="text-2xl mb-4 text-yellow-500">{contactData.consultationBox.title}</h3>
                <p className="text-zinc-300 mb-6">
                  {contactData.consultationBox.description}
                </p>
                <p className="text-zinc-400 text-sm">
                  {contactData.consultationBox.note}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
