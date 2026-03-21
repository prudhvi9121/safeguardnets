import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface Props {
  title: string;
  description: string;
  icon: IconType;
  image: string;
  to: string;
  index: number;
}

const ServiceCard = ({ title, description, icon: Icon, image, to, index }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="h-full"
  >
    <Link
      to={to}
      className="group block bg-card rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 h-full flex flex-col overflow-hidden border border-border/50"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg group-hover:bg-primary/90 group-hover:border-primary transition-colors duration-300">
          <Icon className="w-6 h-6 text-white drop-shadow-md" />
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{description}</p>
      </div>
    </Link>
  </motion.div>
);

export default ServiceCard;
