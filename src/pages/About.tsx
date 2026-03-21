import { motion } from "framer-motion";
import { FiCheckCircle, FiUsers, FiAward, FiTarget } from "react-icons/fi";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { label: "Happy Clients", value: "1000+" },
  { label: "Cities Served", value: "5+" },
  { label: "Years Experience", value: "8+" },
  { label: "Projects Done", value: "3000+" },
];

const values = [
  { icon: FiCheckCircle, title: "Quality First", desc: "We use only premium SS316 steel and UV-treated nets." },
  { icon: FiUsers, title: "Customer Focused", desc: "Your safety and satisfaction is our top priority." },
  { icon: FiAward, title: "Certified Experts", desc: "Trained installers with years of hands-on experience." },
  { icon: FiTarget, title: "Precision Work", desc: "Every measurement is exact. Every installation is flawless." },
];

const About = () => (
  <Layout>
    <PageMeta
      title="About SafeGuardNets – Your Trusted Safety Net Provider"
      description="Learn about SafeGuardNets, Hyderabad's leading provider of invisible grills and safety nets with 8+ years of experience and 3000+ installations."
      keywords="about SafeGuardNets, safety net company Hyderabad"
    />

    <section className="py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">About SafeGuardNets</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are Hyderabad's most trusted provider of invisible grills, pigeon nets, safety nets, and sports nets. With over 8 years of experience and 3000+ successful installations, we bring safety and aesthetics together.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 bg-card rounded-2xl shadow-card">
              <div className="text-3xl font-extrabold text-primary mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <SectionHeading title="Our Values" subtitle="What drives us every day" />
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 p-6 bg-card rounded-2xl shadow-card">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
