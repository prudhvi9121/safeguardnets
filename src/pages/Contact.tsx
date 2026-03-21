import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import LeadForm from "@/components/LeadForm";

const contactInfo = [
  { icon: FiPhone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: FiMail, label: "Email", value: "info@safeguardnets.in", href: "mailto:info@safeguardnets.in" },
  { icon: FiMapPin, label: "Location", value: "Hyderabad, Telangana, India" },
  { icon: FiClock, label: "Working Hours", value: "Mon – Sat, 9 AM – 7 PM" },
];

const Contact = () => (
  <Layout>
    <PageMeta
      title="Contact SafeGuardNets – Get a Free Quote"
      description="Contact SafeGuardNets for invisible grills, pigeon nets, and safety nets in Hyderabad. Call +91 98765 43210 for a free site visit."
      keywords="contact safety net provider Hyderabad, free quote invisible grills"
    />

    <section className="py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg">We'd love to hear from you. Get in touch for a free quote.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {contactInfo.map((c, i) => (
              <motion.div key={c.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 p-5 bg-card rounded-2xl shadow-card">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="font-medium text-foreground hover:text-primary transition-colors">{c.value}</a>
                  ) : (
                    <p className="font-medium text-foreground">{c.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <LeadForm />
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
