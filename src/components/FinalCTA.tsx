import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart } from "lucide-react";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleWhatsApp = () => {
    window.open("https://wa.me/56986028441?text=Hola,%20quiero%20hacer%20un%20pedido", "_blank");
  };

  const scrollToCatalog = () => {
    const element = document.getElementById("catalogo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="py-24 bg-steel relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            ¿Listo para cotizar o comprar?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Contáctanos ahora y te ayudamos con todo lo que necesites
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-primary text-steel font-bold text-lg px-8 py-7 hover:bg-primary/90 strong-shadow"
            >
              <Phone className="mr-3 h-6 w-6" />
              Hacer pedido por WhatsApp
            </Button>
            
            <Button
              onClick={scrollToCatalog}
              size="lg"
              variant="secondary"
              className="bg-white text-steel font-bold text-lg px-8 py-7 hover:bg-white/90 strong-shadow"
            >
              <ShoppingCart className="mr-3 h-6 w-6" />
              Ver catálogo completo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
