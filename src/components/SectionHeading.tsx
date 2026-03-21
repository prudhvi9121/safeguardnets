import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${centered ? "text-center" : ""}`}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
    <div className={`h-1.5 w-20 bg-primary-gradient rounded-full mb-6 ${centered ? "mx-auto" : ""}`} />
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
