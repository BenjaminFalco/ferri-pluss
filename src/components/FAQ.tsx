import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "¿Hacen envíos a domicilio?",
      answer: "Sí, hacemos envíos a Chillán y zonas cercanas. Las tarifas varían según la distancia. Contáctanos por WhatsApp para una cotización exacta.",
    },
    {
      question: "¿Puedo pedir productos por WhatsApp?",
      answer: "¡Por supuesto! Puedes hacer tu pedido completo por WhatsApp. Solo envíanos fotos, cantidades y medidas de lo que necesitas y te cotizamos al instante.",
    },
    {
      question: "¿Tienen precios mayoristas?",
      answer: "Sí, ofrecemos precios especiales para compras por volumen. Contáctanos directamente para conocer nuestras tarifas mayoristas.",
    },
    {
      question: "¿Hasta qué hora atienden?",
      answer: "Atendemos de Lunes a Viernes. Para conocer nuestros horarios exactos, llámanos al 42-2529205 o escríbenos por WhatsApp.",
    },
    {
      question: "¿Aceptan tarjetas?",
      answer: "Sí, aceptamos todas las tarjetas de crédito y débito, además de transferencias bancarias y efectivo.",
    },
    {
      question: "¿Cómo funciona la promoción BOSCH?",
      answer: "Trae cualquier herramienta antigua (de cualquier marca) y te damos 8% de descuento en una herramienta BOSCH nueva. Es así de simple.",
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
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-lg text-muted-foreground">
            Todo lo que necesitas saber sobre FERRI+
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 border-none card-shadow"
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
