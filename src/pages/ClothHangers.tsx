import ServicePageTemplate from "@/components/ServicePageTemplate";

const ClothHangers = () => (
  <ServicePageTemplate
    image="/services/clothes.jpg"
    title="Cloth Hangers"
    metaTitle="Ceiling Mounted Cloth Drying Hangers in Hyderabad & Bangalore – Nithya Safe Guard"
    metaDescription="Premium ceiling-mounted cloth drying hangers and systems for balconies. Space-saving, durable, and easy to use. Free installation in Hyderabad, Bangalore, and Chennai."
    keywords="cloth hangers Hyderabad, ceiling cloth drying hangers, balcony cloth dryer, space saving cloth hangers"
    headline="Space-Saving Ceiling Cloth Hangers"
    description="Our ceiling-mounted cloth drying systems are perfect for modern apartments with limited balcony space. Easy to operate with a pulley system, these hangers keep your balcony organized and your clothes dry."
    features={[
      "High-grade stainless steel pipes",
      "Individual pulley system",
      "Space-saving design",
      "Easy to operate",
      "Rust-proof materials",
      "Heavy-duty nylon ropes",
      "Sturdy mounting brackets",
      "1-year warranty",
    ]}
    faqs={[
      { q: "How much weight can the hangers hold?", a: "Each pipe can typically hold 5-8 kg of wet clothes, making the entire system suitable for a full load of laundry." },
      { q: "Is the installation included?", a: "Yes, we provide free professional installation for all our cloth drying systems." },
      { q: "Will it rust?", a: "No, we use high-quality stainless steel or powder-coated aluminum pipes that are completely rust-proof." },
      { q: "How long does the rope last?", a: "We use heavy-duty nylon ropes designed to last 2-3 years with regular use. We also provide rope replacement services if needed." },
    ]}
  />
);

export default ClothHangers;
