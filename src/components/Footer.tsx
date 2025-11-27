import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const handleInstagram = () => {
    window.open("https://www.instagram.com/ferrimasferreteria", "_blank");
  };

  return (
    <footer className="bg-steel text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-3xl font-black text-primary mb-4">FERRI+</div>
            <p className="text-white/80 mb-4">
              Tu ferretería de confianza en Chillán. Todo en construcción, herramientas y materiales.
            </p>
            <button
              onClick={handleInstagram}
              className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @ferrimasferreteria
            </button>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Contacto</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Camino Las Mariposas, P.1B KM7, Chillán</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>42-2529205 / +569 8602 8441</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Horarios</h3>
            <div className="text-white/80">
              <p className="font-medium">Lunes a Viernes</p>
              <p className="text-sm mt-2">
                Contáctanos para horarios específicos
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} FERRI+ Ferretería. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
