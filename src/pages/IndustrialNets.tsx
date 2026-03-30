import ServicePageTemplate from "@/components/ServicePageTemplate";

const IndustrialNets = () => (
  <ServicePageTemplate
    image="/services/industry.webp"
    title="Industrial Safety Nets"
    metaTitle="Industrial Safety Nets in Hyderabad, Bangalore & more – Nithya Safe Guard"
    metaDescription="Construction and industrial safety nets in Hyderabad, Bangalore, Chennai, Kochi, and Vishakhapatnam. Compliant with safety standards."
    keywords="industrial safety nets Hyderabad, Bangalore, Chennai, Kochi, Vishakhapatnam, construction safety nets"
    headline="Industrial & Construction Safety Nets"
    description="Protect your workforce and comply with safety regulations with our industrial-grade safety nets. Ideal for construction sites, warehouses, and factories."
    features={[
      "IS:11057 compliant",
      "Fall protection certified",
      "Debris containment nets",
      "Fire-retardant options",
      "Custom sizes for any site",
      "Quick deployment",
      "Bulk order discounts",
      "On-site consultation",
    ]}
    faqs={[
      { q: "Do your nets meet safety compliance?", a: "Yes, all our industrial nets comply with IS:11057 and relevant construction safety standards." },
      { q: "Can you handle large construction sites?", a: "Absolutely. We have experience covering multi-story construction sites and large industrial areas." },
    ]}
  />
);

export default IndustrialNets;
