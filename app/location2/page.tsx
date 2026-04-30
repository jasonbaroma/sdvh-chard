"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location2-hero",
    src: "/images/liskeard-hero-country-road.jpeg",
    alt: "Grey hire SUV on a sweeping rural road near Ilminster under a broad summer sky.",
  };

  return (
    <HomePage
      currentLocationLabel="Ilminster"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Ilminster"
      heroDescription="Vehicle hire in Ilminster with a practical fleet for commuting, moving, trade work and family travel. Easy access to major routes makes hiring here especially convenient."
      serviceAreasTitle="Vehicle hire around Ilminster"
      serviceAreasDescription="Our coverage includes Ilminster and the surrounding Somerset area, with support for nearby villages and onward travel on key regional roads."
      infoContentSectionKicker="Useful hire guidance"
      infoContentSectionTitle="Planning practical vehicle hire around Ilminster"
      infoContentSectionIntro="Ilminster is well placed for drivers using the A303 and A358, making it a sensible town for flexible vehicle hire. Whether you are heading towards Taunton, Yeovil or the South West trunk road network, a hired vehicle can make short-term transport much easier to manage."
      infoContentBlock1Title="Road and rail convenience in Crewkerne"
      infoContentBlock1Body="Crewkerne benefits from direct rail links and strong road access via the A30, so hired vehicles are useful both for local journeys and for reaching Yeovil, Chard and the wider South West. If your usual vehicle is too small or unavailable, hiring gives you a practical backup without long-term commitment."
      infoContentBlock2Title="Local stops before you set off"
      infoContentBlock2Body="For van users, planning around town-centre streets and loading access can save time, especially on busier market days. Fuel, supermarkets and day-to-day essentials are easy to pick up locally before heading towards the A30 or onward into rural routes around South Somerset."
      infoContentBlock3Title="A good fit for work and weekend travel"
      infoContentBlock3Body="Crewkerne is a sensible base for both practical and leisure hire. Small vans suit local collections and storage runs, while larger cars and minibuses are useful for family travel towards the Jurassic Coast, countryside stays or airport transfers."
      bottomCtaTitle="Arrange vehicle hire in Ilminster"
      bottomCtaDescription="From local errands to longer motorway runs, our Ilminster vehicle hire service helps you get moving with suitable cars, vans, minibuses and trucks."
      secondaryCtaTitle="Get the right Ilminster vehicle sorted"
      secondaryCtaDescription="Tell us what you need in Ilminster and we will help you choose a vehicle that suits the route, passenger numbers or load space required."
      faqs={[
        { question: "Do you offer delivery for vehicle hire in Ilminster?", answer: "Yes, delivery can often be arranged for vehicle hire in Ilminster and nearby addresses, depending on the vehicle and booking schedule." },
        { question: "What kind of vehicles are available to hire in Ilminster?", answer: "We offer a broad rental fleet for Ilminster, including cars, vans, minibuses and selected trucks for personal and business use." },
        { question: "Can I book a one-way rental from Ilminster?", answer: "Yes, some Ilminster hires can be set up as one-way bookings. Let us know your collection and return points and we can check what is available." },
        { question: "Can I hire for more than a few days?", answer: "We regularly help with short hires and can also discuss longer bookings where availability allows." },
        { question: "Is Ilminster vehicle hire suitable for business use?", answer: "Yes, if arranged in advance and approved for the vehicle type. Let us know your plans when you enquire." },
      ]}
    />
  );
}
