"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location1-hero",
    src: "/images/torpoint-hero-country-road.jpeg",
    alt: "Estate hire car travelling on a rural road near Crewkerne with open farmland in the background.",
  };

  return (
    <HomePage
      currentLocationLabel="Crewkerne"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Crewkerne"
      heroDescription="Vehicle hire in Crewkerne for local jobs, business travel and longer journeys. Choose from cars, vans, minibuses and trucks with practical booking support."
      serviceAreasTitle="Serving Crewkerne and nearby roads"
      serviceAreasDescription="We cover Crewkerne and nearby villages, with vehicle hire support for surrounding Somerset and border routes into Dorset."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Useful vehicle hire guidance for Crewkerne journeys"
      infoContentSectionIntro="Crewkerne sits in a practical spot for self-drive hire, with the A30 running through town and quick links to the A303 for journeys across Somerset, Dorset and Devon. Whether you are moving home, covering a work run, arranging extra family transport or collecting bulky items, vehicle hire in Crewkerne gives you flexibility without needing a long detour to collect the right vehicle."
      infoContentBlock1Title="Using the A303 from Ilminster"
      infoContentBlock1Body="Ilminster is well placed for drivers using the A303, making it a practical spot for longer trips east or west as well as local runs into Chard, Yeovil and Taunton. If you are collecting stock, heading to a site or moving bulky items, quick access to the main route is a real advantage."
      infoContentBlock2Title="Town access and useful stop points"
      infoContentBlock2Body="The town centre is easier to navigate in a car or small van, while larger vans are often better suited to jobs planned around the edge of town and main-road access. For fuel and supplies, the Southfields area near the A303 is a handy stopping point before setting off."
      infoContentBlock3Title="Choosing the right vehicle for Ilminster jobs"
      infoContentBlock3Body="Ilminster works well for a mix of personal and business hire. A family car can help with weekend travel towards the coast or countryside, while larger vans and trucks suit local contractors, deliveries and property work across South Somerset."
      bottomCtaTitle="Book your Crewkerne vehicle hire"
      bottomCtaDescription="Need vehicle hire in Crewkerne for work, moving day or a longer trip? We can help arrange the right car, van, minibus or truck with straightforward local service."
      secondaryCtaTitle="Plan a Crewkerne booking with confidence"
      secondaryCtaDescription="If you are comparing options for Crewkerne, speak to our team and we will help match the hire to your route, load size or passenger needs."
      faqs={[
        { question: "Can I arrange vehicle hire in Crewkerne with delivery?", answer: "Yes, we can arrange vehicle hire for Crewkerne with delivery and collection options in the town and nearby areas, subject to booking details and vehicle type." },
        { question: "What vehicles can I hire in Crewkerne?", answer: "Crewkerne bookings can include cars, vans, minibuses and selected trucks, depending on availability and the type of journey you are planning." },
        { question: "Is one-way hire available from Crewkerne?", answer: "Yes, one-way hire may be available from Crewkerne for some vehicles. It depends on the route, timing and fleet availability when you book." },
        { question: "Do you offer short and longer vehicle hire in Crewkerne?", answer: "Yes, subject to availability. We can discuss longer hires, fleet support and practical options for regular business use." },
        { question: "Can I use a Crewkerne hire vehicle for business travel?", answer: "You will need to meet the normal driving licence and identification requirements for the category of vehicle requested." },
      ]}
    />
  );
}
