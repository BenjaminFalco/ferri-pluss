import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Hammer, 
  Drill, 
  Wrench, 
  Paintbrush, 
  Zap, 
  Droplet, 
  TreePine,
  Shield,
  Home,
  Construction
} from "lucide-react";

const Categories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { icon: Construction, name: "Construcción", color: "bg-secondary" },
    { icon: Drill, name: "Herramientas eléctricas", color: "bg-primary" },
    { icon: Hammer, name: "Herramientas manuales", color: "bg-accent" },
    { icon: Paintbrush, name: "Pinturas & Abrasivos", color: "bg-secondary" },
    { icon: Zap, name: "Electricidad", color: "bg-primary" },
    { icon: Droplet, name: "Gasfitería", color: "bg-accent" },
    { icon: TreePine, name: "Maderas", color: "bg-secondary" },
    { icon: TreePine, name: "Jardinería", color: "bg-primary" },
    { icon: Shield, name: "Seguridad Industrial", color: "bg-accent" },
    { icon: Home, name: "Hogar", color: "bg-secondary" },
  ];

  const handleWhatsApp = (category: string) => {
    window.open(
      `https://wa.me/56986028441?text=Hola,%20quiero%20ver%20productos%20de%20${encodeURIComponent(category)}`,
      "_blank"
    );
  };

  return (
    <section id="categorias" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            CATEGORÍAS PRINCIPALES
          </h2>
          <p className="text-lg text-muted-foreground">
            Todo lo que necesitas para tu proyecto en un solo lugar
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => handleWhatsApp(category.name)}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card p-6 rounded-xl card-shadow hover:strong-shadow transition-all duration-300 hover:scale-105"
            >
              <div className={`${category.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground text-center group-hover:text-primary transition-colors">
                {category.name}
              </h3>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
