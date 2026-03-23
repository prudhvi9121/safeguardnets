import ServicePageTemplate from "@/components/ServicePageTemplate";

const InvisibleGrills = () => (
  <ServicePageTemplate
    image="/services/Invisible.jpg"
    title="Invisible Grills"
    metaTitle="Invisible Grills Installation in Hyderabad, Bangalore & Chennai – Nithya Safe Guard"
    metaDescription="Get premium invisible grills for balconies and windows in Hyderabad, Bangalore, Chennai, Kochi, and Vishakhapatnam. Stainless steel SS316, 10-year warranty, same-day installation."
    keywords="invisible grills Hyderabad, Bangalore, Chennai, Kochi, Vishakhapatnam, balcony invisible grill"
    headline="Invisible Grills for Balconies & Windows"
    description="Our invisible grills provide unobstructed views with maximum safety. Made from SS316 stainless steel cables, they are virtually invisible yet incredibly strong."
    features={[
      "SS316 marine-grade steel",
      "Can withstand 250+ kg load",
      "Virtually invisible design",
      "Weather & corrosion resistant",
      "Child & pet safe",
      "10-year warranty",
      "Same-day installation",
      "No drilling damage to walls",
    ]}
    faqs={[
      { q: "How strong are invisible grills?", a: "Our grills use SS316 steel cables that can withstand over 250 kg of load, making them extremely safe for children and pets." },
      { q: "Will invisible grills block my view?", a: "No, the cables are only 2-3mm thick and virtually invisible from a distance, preserving your balcony view completely." },
      { q: "How long does installation take?", a: "A standard balcony installation takes 2-4 hours depending on the size." },
      { q: "What warranty do you offer?", a: "We offer a 10-year warranty on materials and a 1-year warranty on installation workmanship." },
    ]}
  />
);

export default InvisibleGrills;
