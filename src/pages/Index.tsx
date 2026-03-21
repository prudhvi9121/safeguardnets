import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiPhone, FiShield, FiAward, FiClock, FiStar, FiCheckCircle } from "react-icons/fi";
import { MdBalcony, MdSportsBaseball } from "react-icons/md";
import { GiSoccerBall, GiFactory } from "react-icons/gi";
import { FaDove } from "react-icons/fa";
import { TbHanger } from "react-icons/tb";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import LeadForm from "@/components/LeadForm";

const services = [
  { title: "Invisible Grills", description: "Premium stainless steel grills for balconies & windows. Unobstructed views with maximum safety.", icon: MdBalcony, image: "/services/Invisible.jpg", to: "/invisible-grills" },
  { title: "Pigeon Nets", description: "Keep pigeons away from your balcony and windows. Durable, transparent, and long-lasting.", icon: FaDove, image: "/services/pegion.jpg", to: "/pigeon-nets" },
  { title: "Safety Nets", description: "Child & pet safety nets for balconies, staircases, and terraces. Peace of mind guaranteed.", icon: FiShield, image: "/services/pets.jpg", to: "/safety-nets" },
  { title: "Cloth Hangers", description: "Space-saving ceiling-mounted cloth drying systems for modern apartments.", icon: TbHanger, image: "/services/clothes.jpg", to: "/invisible-grills" },
  { title: "Cricket / Sports Nets", description: "High-quality practice nets for cricket, badminton, and other sports facilities.", icon: GiSoccerBall, image: "/services/sports.jpg", to: "/cricket-nets" },
  { title: "Industrial Safety Nets", description: "Construction and industrial safety nets meeting all compliance standards.", icon: GiFactory, image: "/services/industry.jpg", to: "/industrial-nets" },
];

const trustPoints = [
  { icon: FiShield, title: "10-Year Warranty", desc: "All installations backed by manufacturer warranty" },
  { icon: FiAward, title: "1000+ Installations", desc: "Trusted by families across Hyderabad" },
  { icon: FiClock, title: "Same-Day Service", desc: "Quick installation with zero hassle" },
  { icon: FiCheckCircle, title: "Premium Materials", desc: "SS316 grade steel & UV-resistant nets" },
];

const testimonials = [
  { name: "Priya Sharma", text: "Excellent invisible grill installation. The team was professional and finished within 3 hours. Highly recommend!", rating: 5 },
  { name: "Rajesh Kumar", text: "Got pigeon nets installed for our entire apartment. Great quality and fair pricing. Very satisfied.", rating: 5 },
  { name: "Anitha Reddy", text: "Safety nets for our kids' balcony gave us complete peace of mind. Thank you SafeGuardNets!", rating: 5 },
];

const Index = () => (
  <Layout>
    <PageMeta
      title="SafeGuardNets – Premium Invisible Grills & Safety Nets in Hyderabad"
      description="Leading provider of invisible grills, pigeon nets, safety nets, cricket nets & industrial nets in Hyderabad. Get a free quote today!"
      keywords="invisible grills Hyderabad, pigeon nets, safety nets, cricket nets, balcony safety"
    />

    {/* Hero */}
    <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero1.png" 
          alt="Premium Balcony Invisible Grills" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/90" />
      </div>

      <div className="container relative z-10 w-full pb-16 md:pb-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-gradient backdrop-blur-md text-primary-foreground text-xs font-bold tracking-wider uppercase shadow-lg border border-white/20">
              Trusted by 1000+ Homes
            </span>
            <span className="inline-block px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-wider uppercase">
              10-Year Warranty
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6 drop-shadow-2xl">
            Premium Invisible Grill <br className="hidden md:block"/> <span className="text-white/90">&</span> Safety Net Solutions
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl font-medium drop-shadow-xl leading-relaxed">
            Unobstructed views with maximum safety. Protect your loved ones with our high-strength, transparent installations across Hyderabad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="tel:+919876543210"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-primary-gradient text-primary-foreground font-bold text-lg hover:brightness-110 hover:-translate-y-1 transition-all shadow-2xl hover:shadow-primary/40 duration-300"
            >
              <FiPhone className="w-5 h-5" /> Call Now
            </a>
            <Link
              to="/contact"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/30 text-white font-bold text-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              Get Free Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Services */}
    <section id="services" className="py-20 bg-surface-elevated">
      <div className="container">
        <SectionHeading title="Our Services" subtitle="Complete safety solutions for residential and commercial spaces" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20">
      <div className="container">
        <SectionHeading title="Why Choose Us" subtitle="We combine quality materials with expert craftsmanship" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <t.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-surface-elevated">
      <div className="container">
        <SectionHeading title="What Our Clients Say" subtitle="Real reviews from happy customers" />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <FiStar key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA + Lead Form */}
    <section className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Secure Your Home?
            </h2>
            <p className="text-muted-foreground mb-6">
              Get a free consultation and quote. Our experts will visit your site and provide the best solution for your needs.
            </p>
            <ul className="space-y-3">
              {["Free site inspection", "No hidden charges", "Installation within 24 hours"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <FiCheckCircle className="w-5 h-5 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm />
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
