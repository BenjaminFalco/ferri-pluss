import { useState, useEffect } from "react";
import { Menu, Phone, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/56986028441?text=Hola,%20quiero%20hacer%20un%20pedido", "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-steel/95 backdrop-blur-md strong-shadow" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-3xl font-black text-primary">FERRI+</div>
            <div className="hidden md:block text-sm text-white/80">
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <button onClick={() => scrollToSection("inicio")} className="text-white/90 hover:text-primary transition-colors font-medium">
              Inicio
            </button>
            <button onClick={() => scrollToSection("categorias")} className="text-white/90 hover:text-primary transition-colors font-medium">
              Categorías
            </button>
            <button onClick={() => scrollToSection("ofertas")} className="text-white/90 hover:text-primary transition-colors font-medium">
              Ofertas
            </button>
            <button onClick={() => scrollToSection("servicios")} className="text-white/90 hover:text-primary transition-colors font-medium">
              Servicios
            </button>
            <button onClick={() => scrollToSection("contacto")} className="text-white/90 hover:text-primary transition-colors font-medium">
              Contacto
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button
              onClick={handleWhatsApp}
              className="bg-primary text-steel font-bold hover:bg-primary/90 strong-shadow"
              size="lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              <span className="hidden md:inline">Pedir por WhatsApp</span>
              <span className="md:hidden">WhatsApp</span>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
