import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "5561983263512"; // Número do WhatsApp
  const message = "Olá! Gostaria de agendar uma consulta.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Botão Principal */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl cursor-pointer flex items-center gap-3 pr-5 pl-4 py-3 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        {isOpen ? (
          <>
            <X className="w-6 h-6" />
            <span className="font-medium text-sm whitespace-nowrap">Fechar</span>
          </>
        ) : (
          <>
            <FaWhatsapp className="w-7 h-7" />
            <span className="font-medium text-sm whitespace-nowrap">Falar com Advogado</span>
          </>
        )}
      </motion.button>

      {/* Card de Mensagem */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl w-80 overflow-hidden"
          >
            <div className="bg-green-500 p-4">
              <h3 className="text-white font-semibold text-lg">Fale Conosco</h3>
              <p className="text-green-50 text-sm">
                Responderemos em breve!
              </p>
            </div>
            
            <div className="p-4">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-zinc-800 rounded-full p-2">
                  <FaWhatsapp className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex-1 bg-zinc-800 rounded-lg p-3">
                  <p className="text-zinc-300 text-sm">
                    Olá! 👋 Como podemos ajudá-lo?
                  </p>
                  <p className="text-zinc-400 text-xs mt-2">
                    Clique abaixo para conversar no WhatsApp
                  </p>
                </div>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaWhatsapp className="w-5 h-5" />
                Iniciar Conversa
              </button>
              
              <p className="text-zinc-500 text-xs text-center mt-3">
                (61) 98326-3512
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
