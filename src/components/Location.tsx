import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleMaps = () => {
    window.open("https://maps.google.com/?q=Camino+Las+Mariposas+P.1B+KM7+Chillán", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+56422529205";
  };

  return (
    <section id="contacto" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            UBICACIÓN & HORARIOS
          </h2>
          <p className="text-lg text-muted-foreground">
            Visítanos o contáctanos directamente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden strong-shadow"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.5!2d-72.1!3d-36.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDM2JzAwLjAiUyA3MsKwMDYnMDAuMCJX!5e0!3m2!1ses!2scl!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación FERRI+ Ferretería"
            ></iframe>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card p-8 rounded-xl card-shadow flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Dirección</h3>
                  <p className="text-muted-foreground">
                    Camino Las Mariposas, P.1B KM7<br />
                    Chillán, Chile
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Teléfonos</h3>
                  <p className="text-muted-foreground">
                    42-2529205<br />
                    +569 8602 8441
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Horarios</h3>
                  <p className="text-muted-foreground">
                    Lunes a Viernes
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                onClick={handleMaps}
                variant="secondary"
                size="lg"
                className="flex-1"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Abrir en Google Maps
              </Button>
              <Button
                onClick={handleCall}
                className="flex-1 bg-primary text-steel font-bold hover:bg-primary/90"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Llamar ahora
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
