"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location3-hero",
    src: "/images/callington-hero-country-road.jpeg",
    alt: "Medium hire van on a winding rural road near Honiton in warm autumn light.",
  };

  return (
    <HomePage
      currentLocationLabel="Honiton"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Honiton"
      heroDescription="Vehicle hire in Honiton for East Devon journeys, A30 travel and everyday transport needs. Cars, vans, minibuses and trucks available across a broad fleet."
      serviceAreasTitle="Covering Honiton and surrounding East Devon"
      serviceAreasDescription="We serve Honiton and nearby parts of East Devon, helping drivers heading into town, out to villages or onward along the A30 corridor."
      infoContentSectionKicker="Local route advice"
      infoContentSectionTitle="What to consider when hiring a vehicle in Honiton"
      infoContentSectionIntro="Honiton is a strong base for vehicle hire when you need straightforward access to East Devon, Exeter and routes towards the coast. With the A30 close by and regular local demand for home moves, trade work, event travel and longer personal trips, hiring a car, van, minibus or truck in Honiton can be a practical way to keep plans moving without relying on a fixed vehicle of your own."
      infoContentBlock1Title="Using the A35 from Axminster"
      infoContentBlock1Body="Axminster sits on the A35, making it a useful starting point for journeys towards Lyme Regis, Honiton and Bridport. That route is especially helpful if you are hiring for coastal accommodation changeovers, retail collection or deliveries that need more space than a standard car can offer."
      infoContentBlock2Title="Keeping collection simple in a busy market town"
      infoContentBlock2Body="The town has rail links and a compact centre, so many customers find delivery and collection useful when timing matters. Before setting off, it is easy to pick up fuel and supplies locally, then head out towards the coast or inland routes without adding extra detours."
      infoContentBlock3Title="A practical base for coast and countryside travel"
      infoContentBlock3Body="Axminster suits a wide mix of hires. Cars are useful for visiting the East Devon and Dorset coast, while vans and trucks work well for home projects, workshop collections and commercial jobs across surrounding rural communities."
      bottomCtaTitle="Start your Honiton vehicle hire"
      bottomCtaDescription="If you need a vehicle in Honiton for work, family travel or a move, we can help arrange a suitable hire with straightforward local support."
      secondaryCtaTitle="Speak to us about your Honiton trip"
      secondaryCtaDescription="Planning travel from Honiton? We can help you pick a practical hire vehicle for local driving, longer distances or group transport."
      faqs={[
        { question: "Is vehicle hire available in Axminster?", answer: "Yes, we can arrange vehicle hire for Axminster with cars, vans, minibuses and trucks available for a range of personal and commercial uses." },
        { question: "Can I hire for leisure travel from Axminster?", answer: "Axminster is a practical base for coastal trips, countryside travel and everyday driving, so hire can work well for both short breaks and planned local journeys." },
        { question: "Do you offer delivery around Axminster?", answer: "Many bookings can include delivery and collection, depending on the vehicle requested and the address details." },
        { question: "Can I book a van for moving or collecting items in Axminster?", answer: "Yes, vans are often hired for furniture collection, home moves, equipment transport and trade work across Axminster and nearby villages." },
        { question: "Are longer or one-way hires possible from Axminster?", answer: "Some hires can be set up for longer durations or one-way use, subject to availability and advance arrangement." },
      ]}
    />
  );
}
