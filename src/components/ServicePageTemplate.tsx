import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiPhone, FiCheckCircle } from "react-icons/fi";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import LeadForm from "@/components/LeadForm";

interface ServicePageProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  headline: string;
  description: string;
  features: string[];
  faqs: { q: string; a: string }[];
  image?: string;
}

const ServicePageTemplate = ({ title, metaTitle, metaDescription, keywords, headline, description, features, faqs, image }: ServicePageProps) => (
  <Layout>
    <PageMeta title={metaTitle} description={metaDescription} keywords={keywords} />

    <section className="py-20 md:py-28 overflow-hidden">
      <div className="container">
        <div className={`grid gap-12 items-center mb-20 ${image ? 'md:grid-cols-2' : ''}`}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`max-w-3xl ${image ? '' : 'mx-auto text-center'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-5 uppercase tracking-wider">
              {title}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6">{headline}</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{description}</p>
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
                <img src={image} alt={title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          )}
        </div>

        {/* Features */}
        <div className="max-w-2xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Key Features</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div key={f} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-card">
                <FiCheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="group bg-card rounded-xl shadow-card p-5 cursor-pointer">
                <summary className="font-medium text-foreground list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <LeadForm />
      </div>
    </section>
  </Layout>
);

export default ServicePageTemplate;
