"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location4-hero",
    src: "/images/looe-hero-country-road.jpeg",
    alt: "White hire van parked in a rural lay-by near Bridport with green Dorset hills behind.",
  };

  return (
    <HomePage
      currentLocationLabel="Bridport"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Bridport"
      heroDescription="Vehicle hire in Bridport for coastal journeys, home projects, business use and longer drives inland. Flexible fleet options for personal and commercial travel."
      serviceAreasTitle="Serving Bridport and West Dorset"
      serviceAreasDescription="We support vehicle hire in Bridport and the wider West Dorset area, including nearby villages and routes towards the coast and inland centres."
      infoContentSectionKicker="Planning your route"
      infoContentSectionTitle="Local vehicle hire pointers for Bridport drivers"
      infoContentSectionIntro="Bridport has a different hire pattern from inland towns, with drivers often balancing local access, coast roads and seasonal traffic. A hired vehicle can help with holiday group transport, moving larger items, trade work around West Dorset or practical travel towards Dorchester, Lyme Regis and beyond."
      infoContentBlock1Title="Key road links from Honiton"
      infoContentBlock1Body="Honiton sits directly on the A30 and close to the A35, giving drivers strong access towards Exeter, Axminster and the coast. That makes it a practical location for hires that involve mixed routes, whether you are handling a local move, attending a job site or planning onward travel through Devon."
      infoContentBlock2Title="Useful for collections and town-based errands"
      infoContentBlock2Body="The town is known for regular trading activity and antique shopping, so van hire can be especially useful for collections that will not fit in a standard car. Local fuel stops and supermarkets make it easy to sort essentials before heading out onto main roads."
      infoContentBlock3Title="Hiring for family and visitor travel"
      infoContentBlock3Body="Honiton also works well for personal travel. A larger car or minibus can be a sensible option for family weekends, airport journeys or trips towards East Devon beauty spots without overloading your own vehicle."
      bottomCtaTitle="Book vehicle hire in Bridport"
      bottomCtaDescription="For coastal travel, local business use or moving jobs, our Bridport vehicle hire service gives you access to a wide, practical fleet."
      secondaryCtaTitle="Find a suitable Bridport rental"
      secondaryCtaDescription="If you are working out the best hire for Bridport, we can talk through vehicle size, route plans and the kind of journey you need to cover."
      faqs={[
        { question: "Can vehicles be delivered in Bridport?", answer: "Yes, delivery may be available for vehicle hire in Bridport and nearby areas, depending on the booking arrangement and vehicle selected." },
        { question: "What can I hire in Bridport?", answer: "Bridport customers can hire from a range that includes cars, vans, minibuses and selected trucks, subject to availability." },
        { question: "Is one-way vehicle hire possible from Bridport?", answer: "Yes, some bookings from Bridport can be arranged on a one-way basis. Contact us with your route and we will confirm the options." },
        { question: "Do you offer short-term and extended hire in Bridport?", answer: "Yes, subject to availability. We can discuss suitable vehicles for ongoing commercial use or extended personal bookings." },
        { question: "Can Bridport businesses use your rental service?", answer: "Yes, Bridport vehicle hire can be suitable for trade work, company travel, deliveries and other business needs depending on the vehicle required." },
      ]}
    />
  );
}
