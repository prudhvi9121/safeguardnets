import ServicePageTemplate from "@/components/ServicePageTemplate";

const SafetyNets = () => (
  <ServicePageTemplate
    image="/services/pets.webp"
    title="Safety Nets"
    metaTitle="Child & Pet Safety Nets in Hyderabad, Bangalore & Chennai – Nithya Safe Guard"
    metaDescription="Protect your children and pets with premium safety nets for balconies and staircases in Hyderabad, Bangalore, Chennai, Kochi, and Vishakhapatnam. Strong and durable."
    keywords="safety nets Hyderabad, Bangalore, Chennai, Kochi, Vishakhapatnam, child safety net"
    headline="Safety Nets for Kids & Pets"
    description="Give your family complete peace of mind with our child and pet safety nets. Designed for balconies, terraces, staircases, and open areas."
    features={[
      "High-tensile nylon material",
      "Tested for child safety",
      "Pet-proof design",
      "UV & weather resistant",
      "Customizable sizes",
      "Minimal visual impact",
      "ISI certified materials",
      "Quick installation",
    ]}
    faqs={[
      { q: "Are safety nets strong enough for children?", a: "Absolutely. Our nets are tested to withstand the impact of a child's weight and are installed with secure fastening systems." },
      { q: "Can pets damage the nets?", a: "Our nets are made from high-tensile nylon that resists tearing from pet claws and bites." },
    ]}
  />
);

export default SafetyNets;
