import { Facebook, Instagram, Linkedin, Clock } from "lucide-react";
import { footerData } from "../data/footer";
import { siteInfo } from "../data/site-info";

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="LR ADVOGADOS" className="h-10 w-auto" />
            </div>
            <p className="text-zinc-400 mb-4">
              {footerData.description}
            </p>
            <div className="flex gap-4">
              <a 
                href={siteInfo.socialMedia.facebook} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 p-2 rounded-lg hover:bg-yellow-600/10 hover:text-yellow-500 transition-all cursor-pointer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={siteInfo.socialMedia.instagram} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 p-2 rounded-lg hover:bg-yellow-600/10 hover:text-yellow-500 transition-all cursor-pointer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={siteInfo.socialMedia.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 p-2 rounded-lg hover:bg-yellow-600/10 hover:text-yellow-500 transition-all cursor-pointer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links & Contact */}
          <div>
            <h3 className="text-lg mb-4 text-yellow-500">{footerData.quickLinks.title}</h3>
            <ul className="space-y-2 mb-6">
              {footerData.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-zinc-400 hover:text-yellow-500 transition-colors cursor-pointer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg mb-4 text-yellow-500">{footerData.contactSection.title}</h3>
            <ul className="space-y-2 text-zinc-400">
              <li className="text-sm leading-relaxed">
                {siteInfo.contact.address}
              </li>
              <li className="pt-2">
                <a href={siteInfo.contact.emailLink} className="hover:text-yellow-500 transition-colors cursor-pointer">
                  {siteInfo.contact.email}
                </a>
              </li>
              <li>
                <a href={siteInfo.contact.phoneLink} className="hover:text-yellow-500 transition-colors cursor-pointer">
                  {siteInfo.contact.phone}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Schedule */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-yellow-500" />
              <h3 className="text-lg text-yellow-500">{footerData.scheduleTitle}</h3>
            </div>
            <ul className="space-y-2 text-sm">
              {siteInfo.schedule.map((item, index) => (
                <li key={index} className="flex justify-between text-zinc-400">
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
            <p>{footerData.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
