"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location2-hero",
    src: "/images/liskeard-hero-country-road.jpg",
    alt: "Compact rental SUV on a hillside road near Bridport with rolling countryside",
  };

  return (
    <HomePage
      currentLocationLabel="Bridport"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Crewkerne"
      heroDescription="Vehicle Hire Crewkerne for commuters, trades, families, and local firms. Book cars, vans, minibuses, and trucks for flexible short or longer-term use."
      serviceAreasTitle="Crewkerne and surrounding area coverage"
      serviceAreasDescription="Our Crewkerne coverage supports hires in the town and nearby communities, with routes that work well for Somerset, Dorset, and Devon journeys."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Smart vehicle hire choices for Crewkerne"
      infoContentSectionIntro="Vehicle hire in Crewkerne is often about getting the right amount of space at the right time. From day-to-day driving to stock movement, moving house, or travelling with more passengers, having access to a wider fleet gives you more choice without long-term commitment."
      infoContentBlock1Title="Flexible transport for changing plans"
      infoContentBlock1Body="Crewkerne is a practical base for mixed travel needs, with local journeys often combining town access, surrounding villages, and wider regional driving. Hiring can be a sensible way to cover a short-term gap or take on a job that your usual vehicle does not suit."
      infoContentBlock2Title="Helpful for business and trade work"
      infoContentBlock2Body="For trade and business users, van or truck hire can help with tools, materials, and deliveries without committing to a larger fleet vehicle full time. That flexibility is useful during busy periods, temporary contracts, or vehicle downtime."
      infoContentBlock3Title="More room for group and family journeys"
      infoContentBlock3Body="Crewkerne also suits leisure and family travel, especially when extra seats or luggage room matter. A larger car or minibus can make weekends away, airport runs, and event travel much easier to manage."
      bottomCtaTitle="Arrange vehicle hire in Crewkerne"
      bottomCtaDescription="If you need a vehicle for work, travel, or a bigger one-off job in Crewkerne, we can help you choose a practical hire option."
      secondaryCtaTitle="Need help choosing?"
      secondaryCtaDescription="Tell us what you need to move, how far you are going, and whether delivery would help. We will point you toward the most suitable vehicle."
      faqs={[
        { question: "Can I hire more than just cars in Crewkerne?", answer: "We offer a broad range of vehicle hire for Crewkerne, including cars, vans, minibuses, and trucks for personal and business use." },
        { question: "Is delivery available in Crewkerne?", answer: "Yes, delivery can often be arranged locally, which is helpful if you are starting from home, a workshop, or a business address." },
        { question: "Can I return the vehicle somewhere else?", answer: "One-way rental is available on certain hires. Let us know where the journey starts and ends, and we can check the options." },
        { question: "Are European trips possible from Crewkerne hires?", answer: "Potentially, yes. European use must be approved in advance so we can confirm the right vehicle and travel terms for your plans." },
        { question: "Do you offer unlimited mileage in Crewkerne?", answer: "In many cases, yes. This depends on the booking, so it is best to mention your expected mileage when you enquire." },
      ]}
    />
  );
}
