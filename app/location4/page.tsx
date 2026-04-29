"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location4-hero",
    src: "/images/looe-hero-country-road.jpg",
    alt: "Dark blue rental crossover on a winding country road near Axminster",
  };

  return (
    <HomePage
      currentLocationLabel="Axminster"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Axminster"
      heroDescription="Vehicle Hire Axminster for local drivers, growing businesses, family transport, and heavier load carrying. Cars, vans, minibuses, and trucks available with flexible options."
      serviceAreasTitle="Axminster area vehicle hire coverage"
      serviceAreasDescription="We support vehicle hire in Axminster and nearby parts of East Devon, with practical coverage for surrounding villages and onward routes into Dorset and Somerset."
      infoContentSectionKicker="Useful hire guidance"
      infoContentSectionTitle="How vehicle hire works well in Axminster"
      infoContentSectionIntro="Vehicle hire in Axminster often comes down to practicality. People hire for local errands, work use, family travel, and short-term carrying jobs, especially when a different vehicle type would make the day run more smoothly."
      infoContentBlock1Title="Well suited to mixed local and regional driving"
      infoContentBlock1Body="Axminster is well placed for practical travel between market-town roads, business routes, and nearby rural addresses. That makes short-term vehicle hire useful when you need dependable transport without changing your regular setup."
      infoContentBlock2Title="A better way to handle carrying jobs"
      infoContentBlock2Body="For furniture moves, supplier collections, or workshop deliveries, the right van size matters. Choosing enough capacity at the start can save extra mileage and reduce the hassle of trying to fit too much into a smaller vehicle."
      infoContentBlock3Title="Useful when passengers are part of the plan"
      infoContentBlock3Body="Axminster hires also work well for passenger travel. Whether you need a comfortable car for a longer run or a minibus for a group outing, hiring gives you extra flexibility when plans involve more people or luggage than usual."
      bottomCtaTitle="Set up your Axminster hire"
      bottomCtaDescription="From town travel to larger carrying jobs, we can help arrange a suitable vehicle for Axminster and the surrounding area."
      secondaryCtaTitle="Compare your options"
      secondaryCtaDescription="If you want to compare vehicle types for an Axminster booking, get in touch and we will help you match the hire to the journey."
      faqs={[
        { question: "Do you offer full vehicle hire in Axminster?", answer: "Yes. We cover Axminster with car, van, minibus, and truck hire for both private and commercial use." },
        { question: "Can a hire vehicle be delivered in Axminster?", answer: "In many cases, yes. Delivery can make the booking easier if you want the vehicle brought to your address rather than collecting elsewhere." },
        { question: "Is one-way vehicle hire available from Axminster?", answer: "One-way hire is available on some bookings, especially where the route is planned in advance. Ask us and we can confirm availability." },
        { question: "Can I take an Axminster hire vehicle abroad?", answer: "Some hires can be approved for European travel, but it must be arranged before departure so all details are agreed properly." },
        { question: "Are Axminster hires available with unlimited mileage?", answer: "Often, yes. Mileage terms depend on the vehicle and booking type, so we recommend mentioning your expected driving distance early on." },
      ]}
    />
  );
}
