import ServicePageTemplate from "@/components/ServicePageTemplate";

const CricketNets = () => (
  <ServicePageTemplate
    image="/services/sports.jpg"
    title="Cricket & Sports Nets"
    metaTitle="Cricket Nets & Sports Nets in Hyderabad – SafeGuardNets"
    metaDescription="High-quality cricket practice nets, sports nets, and boundary nets in Hyderabad. Durable, professional-grade installation."
    keywords="cricket nets Hyderabad, sports nets, practice nets, boundary nets"
    headline="Cricket & Sports Nets"
    description="Professional-grade practice and boundary nets for cricket, badminton, football, and other sports. Built to withstand heavy impact and harsh weather."
    features={[
      "Heavy-duty HDPE material",
      "Impact-resistant design",
      "UV stabilized",
      "Custom dimensions",
      "Indoor & outdoor use",
      "Professional installation",
      "Used by academies",
      "Affordable pricing",
    ]}
    faqs={[
      { q: "What type of nets do you use for cricket?", a: "We use heavy-duty HDPE nets with reinforced edges, commonly used in professional cricket academies." },
      { q: "Can you install nets for indoor practice?", a: "Yes, we install nets for both indoor and outdoor sports facilities." },
    ]}
  />
);

export default CricketNets;
