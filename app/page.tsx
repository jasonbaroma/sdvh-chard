"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  const homepageHeroImage = {
    slot: "homepage-hero",
    src: "/images/homepage-hero-country-road.jpg",
    alt: "Modern rental SUV on a tree-lined rural road in the Chard countryside",
  };

  return (
    <HomePage
      heroImage={homepageHeroImage.src}
      heroImageAlt={homepageHeroImage.alt}
      heroTitle="Vehicle Hire Chard"
      heroDescription="Vehicle Hire Chard for cars, vans, minibuses, and trucks. Flexible rental for personal travel, business use, moves, deliveries, and longer-distance journeys."
      serviceAreasTitle="Areas we cover around Chard"
      serviceAreasDescription="We provide vehicle hire in Chard and across the surrounding area, with nearby towns linked below for customers looking for convenient local coverage and wider UK travel options."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Practical vehicle hire advice for Chard"
      infoContentSectionIntro="Hiring a vehicle in Chard can solve a range of everyday transport needs, from replacing a car for a few days to arranging a van, minibus, or truck for a more demanding job. With strong road links into Somerset, Devon, and Dorset, the area suits both local and longer-distance journeys."
      infoContentBlock1Title="Hiring around Chard and nearby routes"
      infoContentBlock1Body="Chard is well placed for practical road travel across South Somerset, East Devon, and West Dorset, so hired vehicles are often used for local moving jobs, work visits, and longer regional trips. Delivery can make pickup easier if you would rather start from home or your workplace."
      infoContentBlock2Title="Matching the vehicle to the journey"
      infoContentBlock2Body="A van or truck can be the sensible choice for furniture moves, trade materials, event equipment, or stock transfers, while a car or minibus suits family travel and group transport. Booking the right size from the outset helps avoid wasted time and repeat journeys."
      infoContentBlock3Title="Planning ahead for smoother hire"
      infoContentBlock3Body="If your plans involve a different return point, multi-stop travel, or longer mileage, it helps to mention that early. We can talk through one-way hire, wider UK coverage, and suitable vehicle types so the booking fits the route you actually need to drive."
      bottomCtaTitle="Book the right vehicle for the job"
      bottomCtaDescription="Tell us what you need to carry, where you are travelling, and how long you need the vehicle for. We will help you find a practical hire option."
      secondaryCtaTitle="Still deciding what to hire?"
      secondaryCtaDescription="If you are comparing vehicle sizes or planning a longer route, get in touch and we will help you narrow down the most suitable option for your journey."
      faqs={[
        { question: "What kinds of vehicles can I hire?", answer: "Yes. We provide car hire, van hire, minibus hire, and truck hire, so you can book for anything from a short local trip to a larger transport job." },
        { question: "Do you offer delivery and collection?", answer: "In many areas, yes. Delivery and collection can save time and make the whole hire more convenient, especially for home moves, work sites, or busy schedules." },
        { question: "Can I book a one-way rental?", answer: "One-way hire is available on selected bookings. Let us know your pickup and drop-off locations and we can confirm what works for your route." },
        { question: "Can I take the vehicle to Europe?", answer: "European travel can be arranged on some vehicles by prior agreement. Contact us before booking so we can confirm availability and the relevant travel requirements." },
        { question: "Is unlimited mileage available?", answer: "Often, yes. Availability depends on the vehicle and hire terms, so tell us your expected mileage and journey type and we will advise." },
      ]}
    />
  );
}
