"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location5-hero",
    src: "/images/millbrook-hero-country-road.jpeg",
    alt: "Rental saloon car approaching a small bridge near Langport with open fields and reeds.",
  };

  return (
    <HomePage
      currentLocationLabel="Langport"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Langport"
      heroDescription="Vehicle hire in Langport for local journeys, rural deliveries, business use and family travel. A practical fleet for short-term and planned bookings."
      serviceAreasTitle="Vehicle hire for Langport and the Levels"
      serviceAreasDescription="We cover Langport and the surrounding Somerset Levels, supporting drivers in nearby villages and on wider regional routes."
      infoContentSectionKicker="Coastal hire guidance"
      infoContentSectionTitle="Practical hire advice for Langport and nearby villages"
      infoContentSectionIntro="Langport sits in a rural part of Somerset where having the right vehicle can make day-to-day jobs far easier. For moves between villages, business visits, market-town errands or longer runs towards Taunton, Yeovil and Street, short-term hire gives useful flexibility without long-term commitment."
      infoContentBlock1Title="Driving the coast road from Seaton"
      infoContentBlock1Body="Seaton is linked by the A3052, which is the main route for travel towards Lyme Regis, Sidmouth and Exeter. If you are hiring for a holiday let, family visit or coastal delivery, planning around that road makes journeys simpler, especially in busier visitor periods."
      infoContentBlock2Title="Parking and access around town"
      infoContentBlock2Body="The seafront and town centre can be busier during weekends and school holidays, so choosing the right vehicle size matters. A compact car may be easiest for parking, while a larger vehicle is better reserved for planned loading, moving or off-peak collection work."
      infoContentBlock3Title="Matching the vehicle to a Seaton trip"
      infoContentBlock3Body="Seaton is well suited to leisure-focused hire, but local trades and property owners also benefit from vans and trucks for maintenance work and changeovers. Whether you are carrying beach gear, tools or bulky supplies, the right vehicle helps keep the trip straightforward."
      bottomCtaTitle="Arrange your Langport vehicle hire"
      bottomCtaDescription="Whether you need transport for a move, a delivery run or everyday travel, our Langport vehicle hire service is built around practical local needs."
      secondaryCtaTitle="Talk through your Langport hire plans"
      secondaryCtaDescription="Tell us what you need from a Langport rental and we will help you choose a vehicle that suits the roads, distance and load involved."
      faqs={[
        { question: "Do you provide vehicle hire in Seaton?", answer: "Yes, we can arrange vehicle hire for Seaton, including cars, vans, minibuses and trucks." },
        { question: "Is hire suitable for Seaton holiday and coastal travel?", answer: "Seaton is a useful location for leisure-focused hire, especially if you need extra space for passengers, luggage or holiday equipment." },
        { question: "Can a hire vehicle be delivered in Seaton?", answer: "Delivery and collection may be possible around Seaton, depending on the booking details and chosen vehicle." },
        { question: "Can I hire a van for practical jobs in Seaton?", answer: "Yes, vans can be booked for household jobs, furniture transport, storage runs and property work in and around Seaton." },
        { question: "Are longer bookings available from Seaton?", answer: "Some bookings can be arranged for longer durations or specialist travel plans, subject to availability and advance notice." },
      ]}
    />
  );
}
