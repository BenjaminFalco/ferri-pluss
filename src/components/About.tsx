import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, Truck, DollarSign } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Wrench,
      title: "Asesoría experta",
      description: "Nuestro equipo te ayuda a elegir exactamente lo que necesitas para tu proyecto",
    },
    {
      icon: Truck,
      title: "Delivery rápido a domicilio",
      description: "Enviamos tus productos a Chillán y zonas cercanas con rapidez y seguridad",
    },
    {
      icon: DollarSign,
      title: "Precios competitivos",
      description: "Los mejores precios de Chillán en construcción, herramientas y materiales",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            QUIÉNES SOMOS – FERRI+
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Somos FERRI+, una ferretería grande ubicada en Km 7 Las Mariposas, Chillán. 
            Nos especializamos en construcción, herramientas, electricidad, gasfitería, 
            maderas, pinturas y todo lo que tu proyecto necesita. Somos conocidos por 
            nuestros precios accesibles, stock real, y despacho a domicilio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-8 rounded-lg card-shadow hover:strong-shadow transition-all duration-300"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
