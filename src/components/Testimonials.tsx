import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Juan Pérez",
      comment: "Excelente atención y los mejores precios de Chillán. Siempre encuentro lo que necesito para mis obras.",
      rating: 5,
    },
    {
      name: "María González",
      comment: "El despacho a domicilio es súper rápido y los productos de muy buena calidad. 100% recomendado.",
      rating: 5,
    },
    {
      name: "Carlos Muñoz",
      comment: "La asesoría técnica me ayudó a elegir exactamente lo que necesitaba. Gran experiencia de compra.",
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            LO QUE DICEN NUESTROS CLIENTES
          </h2>
          <p className="text-lg text-muted-foreground">
            Miles de clientes satisfechos en Chillán
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-8 rounded-xl card-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                "{testimonial.comment}"
              </p>
              <div className="font-bold text-foreground">
                {testimonial.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
