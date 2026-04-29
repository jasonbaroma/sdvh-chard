"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location6-hero",
    src: "/images/callington-country-road.jpeg",
    alt: "Medium hire van driving around a hedgerow-lined bend near Ilminster",
  };

  return (
    <HomePage
      currentLocationLabel="Ilminster"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Ilminster"
      heroDescription="Vehicle Hire Ilminster for local journeys, trade work, moves and longer trips. Choose from cars, vans, minibuses and trucks with practical support from booking to return."
      serviceAreasTitle="Around Ilminster and nearby communities"
      serviceAreasDescription="We support customers across Ilminster and surrounding Somerset villages, with vehicle hire that works for local collections, regional routes and longer journeys across the UK."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Useful vehicle hire advice for Ilminster"
      infoContentSectionIntro="Hiring in Ilminster is often about convenience as much as vehicle choice. Some customers need a dependable car for regional travel, others need van space for property jobs or deliveries, and some need a larger vehicle for group transport or heavier carrying work."
      infoContentBlock1Title="A practical base for onward travel"
      infoContentBlock1Body="Ilminster works well as a base for travel in several directions, so the right hire vehicle can save time from the start. A car suits everyday journeys, while a van or truck can make loads, tools or stock easier to move without relying on multiple trips."
      infoContentBlock2Title="Matching the vehicle to the job"
      infoContentBlock2Body="For customers around Ilminster, hire often comes down to choosing the right size and timing. Small vans help with lighter loads, larger vans suit moves and deliveries, and minibuses are useful when a group wants to travel together rather than in separate cars."
      infoContentBlock3Title="Keeping the day straightforward"
      infoContentBlock3Body="If you want to keep your plans simple, ask about delivery and collection options. That can be especially helpful when your schedule is built around work, a move, or a weekend trip where collection from another point makes more sense."
      bottomCtaTitle="Book vehicle hire for Ilminster"
      bottomCtaDescription="Speak to our team about the right vehicle for your journey from Ilminster, whether you need a compact car, a larger van, a minibus or a truck for heavier work."
      secondaryCtaTitle="Talk through your travel plans"
      secondaryCtaDescription="Tell us what you are moving, where you are travelling, or how many people need to ride, and we will point you towards a suitable hire option."
      faqs={[
        { question: "Do you cover Ilminster for vehicle hire?", answer: "Yes. We can arrange vehicle hire for customers in Ilminster, with options across cars, vans, minibuses and trucks depending on availability and journey needs." },
        { question: "Can I hire in Ilminster for a one-way trip or travel abroad?", answer: "That depends on the vehicle type and your plans. Let us know where you are travelling and we will confirm whether one-way hire or European travel can be arranged." },
        { question: "Is Ilminster hire suitable for business and personal use?", answer: "We supply vehicles for personal and commercial use, so we can help with family travel, home moves, delivery work, site transport and other practical requirements." },
        { question: "Can you deliver and collect hired vehicles in Ilminster?", answer: "In many cases, yes. Delivery and collection can be a useful option if you want to avoid extra travel before or after your rental. Ask when booking and we will confirm what is possible." },
        { question: "What do I need to hire a vehicle in Ilminster?", answer: "Bring your driving licence plus any supporting details needed for checks. If you are unsure what is required for your vehicle type, contact us before travel." },
      ]}
    />
  );
}
