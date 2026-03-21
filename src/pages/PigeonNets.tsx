import ServicePageTemplate from "@/components/ServicePageTemplate";

const PigeonNets = () => (
  <ServicePageTemplate
    image="/services/pegion.jpg"
    title="Pigeon Nets"
    metaTitle="Pigeon Nets Installation in Hyderabad – SafeGuardNets"
    metaDescription="Professional pigeon net installation for balconies and windows in Hyderabad. UV-resistant, durable, and transparent. Free site visit."
    keywords="pigeon nets Hyderabad, pigeon net for balcony, bird nets near me"
    headline="Pigeon Net Solutions for Your Home"
    description="Keep pigeons and birds away from your living spaces with our high-quality, UV-resistant pigeon nets. Transparent, durable, and professionally installed."
    features={[
      "UV-stabilized HDPE material",
      "Transparent & nearly invisible",
      "5+ years lifespan",
      "Weather resistant",
      "Easy maintenance",
      "Custom sizes available",
      "No damage to building",
      "Professional installation",
    ]}
    faqs={[
      { q: "How long do pigeon nets last?", a: "Our UV-resistant HDPE pigeon nets last 5-7 years with normal use and weather exposure." },
      { q: "Will the net block air or light?", a: "No, our nets have small mesh sizes that block birds but allow free airflow and light." },
      { q: "Can pigeon nets be removed later?", a: "Yes, they can be removed without any damage to the building structure." },
    ]}
  />
);

export default PigeonNets;
