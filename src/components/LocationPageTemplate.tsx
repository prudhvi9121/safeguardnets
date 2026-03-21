import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiPhone, FiCheckCircle } from "react-icons/fi";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import LeadForm from "@/components/LeadForm";

interface LocationPageProps {
  service: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  content: string;
  areas: string[];
  image?: string;
}

const LocationPageTemplate = ({ service, city, metaTitle, metaDescription, keywords, content, areas, image }: LocationPageProps) => (
  <Layout>
    <PageMeta title={metaTitle} description={metaDescription} keywords={keywords} />

    <section className="py-20 md:py-28 overflow-hidden">
      <div className="container">
        <div className={`grid gap-12 items-center mb-16 ${image ? 'md:grid-cols-2' : ''}`}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`max-w-3xl ${image ? '' : 'mx-auto text-center'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6">
              {service} in {city}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">{content}</p>
            <div className={`flex flex-wrap gap-4 mt-8 ${image ? '' : 'justify-center'}`}>
              <a href="tel:+919876543210" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300">
                <FiPhone className="w-4 h-4" /> Call Now
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300">
                Get Quote
              </Link>
            </div>
          </motion.div>

          {image && (
            <motion.div initial={{ opacity: 0, scale: 0.95, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="relative h-full w-full">
              <div className="relative rounded-[2rem] overflow-hidden aspect-square md:aspect-[4/3] shadow-2xl">
                <img src={image} alt={`${service} in ${city}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          )}
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Areas We Serve in {city}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {areas.map((a) => (
              <div key={a} className="flex items-center gap-2 p-3 bg-card rounded-xl shadow-card text-sm">
                <FiCheckCircle className="w-4 h-4 text-primary shrink-0" /> {a}
              </div>
            ))}
          </div>
        </div>

        <LeadForm />
      </div>
    </section>
  </Layout>
);

export default LocationPageTemplate;
