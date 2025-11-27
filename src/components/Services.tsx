import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, HeadphonesIcon, MessageCircle } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Truck,
      title: "Despacho a domicilio",
      description: "Enviamos tus productos a Chillán y zonas cercanas. Tarifas según distancia.",
      color: "bg-secondary",
    },
    {
      icon: HeadphonesIcon,
      title: "Asesoría técnica",
      description: "Te ayudamos a elegir exactamente lo que necesitas para tu proyecto.",
      color: "bg-primary",
    },
    {
      icon: MessageCircle,
      title: "Ventas por WhatsApp",
      description: "Haz tu pedido rápido enviando fotos, cantidades y medidas.",
      color: "bg-accent",
    },
  ];

  return (
    <section id="servicios" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            SERVICIOS FERRI+
          </h2>
          <p className="text-lg text-muted-foreground">
            Tu satisfacción es nuestra prioridad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-8 rounded-xl card-shadow hover:strong-shadow transition-all duration-300"
            >
              <div className={`${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
