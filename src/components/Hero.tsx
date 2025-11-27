import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-ferreteria.jpg";

const Hero = () => {
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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-black text-white mb-6 text-shadow-strong"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            FERRI +
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/95 mb-10 font-medium text-shadow-strong"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Todo en construcción con los mejores precios de Chillán,<br />
            entrega a domicilio y asesoría experta
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
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
              className="bg-secondary text-secondary-foreground font-bold text-lg px-8 py-7 hover:bg-secondary/90 strong-shadow"
            >
              <ShoppingCart className="mr-3 h-6 w-6" />
              Ver catálogo
            </Button>
          </motion.div>

          <motion.div 
            className="mt-10 text-white/90 text-sm flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Km 7 Las Mariposas – Chillán
            </span>
            <span className="hidden sm:inline">|</span>
            <span>Envíos rápidos</span>
            <span className="hidden sm:inline">|</span>
            <span>Lunes a Viernes</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1.5 h-2 bg-primary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
