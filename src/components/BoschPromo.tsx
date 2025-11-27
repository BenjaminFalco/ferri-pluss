import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";
import boschImage from "@/assets/bosch-tools.jpg";

const BoschPromo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleWhatsApp = () => {
    window.open("https://wa.me/56986028441?text=Hola,%20quiero%20información%20sobre%20la%20promoción%20BOSCH", "_blank");
  };

  return (
    <section ref={ref} className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl strong-shadow"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${boschImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16">
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full mb-6">
                  <Zap className="w-5 h-5 text-steel" />
                  <span className="text-steel font-bold text-sm">PROMO ESPECIAL</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Renueva tus herramientas junto a BOSCH y FERRI+
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-steel font-bold">1</span>
                    </div>
                    <p className="text-white/95 text-lg">
                      Trae cualquier herramienta antigua o en mal estado (cualquier marca)
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-steel font-bold">2</span>
                    </div>
                    <p className="text-white/95 text-lg">
                      Te llevas una herramienta BOSCH nueva con <span className="text-primary font-bold">8% de descuento</span>
                    </p>
                  </div>
                </div>

                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="bg-primary text-steel font-bold text-lg hover:bg-primary/90 strong-shadow"
                >
                  Ver Herramientas BOSCH
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-8xl font-black text-primary mb-4">8%</div>
                <div className="text-2xl font-bold text-white">DESCUENTO</div>
                <div className="text-white/80 mt-2">en herramientas BOSCH</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BoschPromo;
