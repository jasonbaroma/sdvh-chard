"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location6-hero",
    src: "/images/callington-country-road.jpeg",
    alt: "Customer receiving keys beside a hire van and car on a quiet rural road near Colyton.",
  };

  return (
    <HomePage
      currentLocationLabel="Colyton"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire in Colyton"
      heroDescription="Vehicle hire in Colyton for East Devon travel, countryside driving and practical everyday transport. Flexible options for personal and business use."
      serviceAreasTitle="Serving Colyton and nearby East Devon"
      serviceAreasDescription="We cover Colyton and surrounding East Devon routes, making it easier to book for local travel, business use, coastal breaks and one-way journeys where available."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Practical vehicle hire advice for Colyton journeys"
      infoContentSectionIntro="Vehicle hire in Colyton suits a mix of rural driving, coastal access and everyday practical jobs. Whether you need a car for flexible travel, a van for moving goods, a minibus for a group outing or a truck for heavier work, having the right vehicle makes local planning much easier."
      infoContentBlock1Title="Getting in and out of Colyton"
      infoContentBlock1Body="Colyton is well placed for journeys along the A3052 and quick runs toward Seaton, Axminster and Exeter. If you are collecting stock, moving equipment or heading out with family, choosing the right vehicle size helps on narrower local roads before joining the main route."
      infoContentBlock2Title="Useful stops before a longer trip"
      infoContentBlock2Body="For everyday essentials before setting off, most drivers use nearby fuel and supermarket stops in Seaton or Axminster. That is useful if you are planning a longer hire, especially for weekend trips, house moves or business mileage across East Devon and into Dorset or Somerset."
      infoContentBlock3Title="From local errands to coast-bound travel"
      infoContentBlock3Body="Colyton works well as a base for practical and leisure travel alike. Hires are often useful for trips to the Jurassic Coast, group transport to Seaton Tramway events, or carrying larger loads when a normal car is not enough. Delivery and collection can also save time locally."
      bottomCtaTitle="Book a vehicle in Colyton"
      bottomCtaDescription="Need a dependable hire vehicle in Colyton? We can help with cars, vans, minibuses and trucks for local travel, moving jobs and planned journeys."
      secondaryCtaTitle="Arrange your Colyton booking"
      secondaryCtaDescription="If you already know your dates and vehicle type, we can help you arrange a straightforward hire in Colyton with clear local support."
      faqs={[
        { question: "Is vehicle hire available in Lyme Regis?", answer: "Yes, we provide vehicle hire for Lyme Regis with cars, vans, minibuses and trucks available for different types of journeys." },
        { question: "What kind of vehicle works best for Lyme Regis travel?", answer: "Lyme Regis can be busy and hilly, so choosing the right vehicle for passenger numbers, luggage and parking plans is important." },
        { question: "Can you deliver a hire vehicle to Lyme Regis?", answer: "Delivery and collection may be available depending on the booking details and exact location." },
        { question: "Can I hire a van for a job in Lyme Regis?", answer: "Yes, many customers hire vans for moves, furniture collection, maintenance work and property support around Lyme Regis." },
        { question: "Are extended hires possible from Lyme Regis?", answer: "Yes, longer bookings can often be discussed in advance, subject to the vehicle type and availability at the time." },
      ]}
    />
  );
}
