import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const WeeklyOffers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const offers = [
    {
      name: "Taladro Percutor BOSCH",
      normalPrice: "$89.990",
      offerPrice: "$69.990",
      discount: "22%",
    },
    {
      name: "Pintura Látex 20L",
      normalPrice: "$45.990",
      offerPrice: "$35.990",
      discount: "22%",
    },
    {
      name: "Set Herramientas 108 pzs",
      normalPrice: "$129.990",
      offerPrice: "$99.990",
      discount: "23%",
    },
    {
      name: "Esmeril Angular BOSCH",
      normalPrice: "$79.990",
      offerPrice: "$59.990",
      discount: "25%",
    },
  ];

  const handleWhatsApp = (productName: string) => {
    window.open(
      `https://wa.me/56986028441?text=Hola,%20quiero%20pedir:%20${encodeURIComponent(productName)}`,
      "_blank"
    );
  };

  return (
    <section id="ofertas" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-full font-bold mb-4">
            ⭐ OFERTAS DE LA SEMANA
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Aprovecha nuestras ofertas
          </h2>
          <p className="text-lg text-muted-foreground">
            Precios especiales en productos seleccionados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden card-shadow hover:strong-shadow transition-all duration-300 group"
            >
              <div className="aspect-square bg-muted/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-bold text-sm">
                  -{product.discount}
                </div>
                <div className="text-6xl">🔧</div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-3 min-h-[3rem]">
                  {product.name}
                </h3>
                
                <div className="mb-4">
                  <div className="text-muted-foreground line-through text-sm mb-1">
                    {product.normalPrice}
                  </div>
                  <div className="text-3xl font-black text-primary">
                    {product.offerPrice}
                  </div>
                </div>

                <Button
                  onClick={() => handleWhatsApp(product.name)}
                  className="w-full bg-primary text-steel font-bold hover:bg-primary/90"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Pedir por WhatsApp
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyOffers;
