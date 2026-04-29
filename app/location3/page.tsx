"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location3-hero",
    src: "/images/callington-hero-country-road.jpg",
    alt: "White hire van driving along an open farmland road near Somerton",
  };

  return (
    <HomePage
      currentLocationLabel="Somerton"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Lyme Regis"
      heroDescription="Vehicle Hire Lyme Regis for coastal travel, family days out, practical moving jobs, and business transport. Cars, vans, minibuses, and trucks available to suit the journey."
      serviceAreasTitle="Covering Lyme Regis and nearby coastal routes"
      serviceAreasDescription="We cover Lyme Regis and nearby coastal and inland areas, helping customers with practical vehicle hire for local use and onward travel across Dorset and East Devon."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Vehicle hire that suits Lyme Regis journeys"
      infoContentSectionIntro="Vehicle hire in Lyme Regis is not only for visitors. It can also be a practical option for residents, local businesses, and property work when you need more room, more seats, or a different type of vehicle for a short period."
      infoContentBlock1Title="A practical fit for coastal travel"
      infoContentBlock1Body="Lyme Regis often calls for flexible transport because journeys can involve steep local roads, coastal access, or travel onward into Devon and Dorset. Hiring the right vehicle can make family visits, holiday logistics, or short-term local transport much simpler."
      infoContentBlock2Title="More space when the seaside adds luggage"
      infoContentBlock2Body="If you are carrying holiday gear, event equipment, or bulky home items, extra load space quickly becomes important. A van can save repeated trips, while a roomy car or minibus helps when passengers and luggage need to travel together."
      infoContentBlock3Title="Useful support for local work and property jobs"
      infoContentBlock3Body="For trades and property-related work in the Lyme Regis area, access and timing matter. Delivery and collection can help reduce wasted time, especially when you are coordinating work across different addresses or fitting transport around a busy schedule."
      bottomCtaTitle="Book the right vehicle in Lyme Regis"
      bottomCtaDescription="Whether you are organising a coastal trip, a home move, or a practical business journey, we can help with vehicle hire in Lyme Regis."
      secondaryCtaTitle="Talk through your plans"
      secondaryCtaDescription="If your route, passengers, or load are still taking shape, speak to us and we will help narrow down the best option for Lyme Regis travel."
      faqs={[
        { question: "What vehicles can I hire in Lyme Regis?", answer: "Yes. We arrange car hire, van hire, minibus hire, and truck hire for Lyme Regis depending on the type of journey or job involved." },
        { question: "Do you deliver hire vehicles to Lyme Regis?", answer: "Delivery can often be arranged, which can be especially useful in a coastal area where collecting from a distant depot is less convenient." },
        { question: "Can I start in Lyme Regis and return elsewhere?", answer: "Yes, selected bookings can be set up as one-way hires. Let us know the route and we will confirm what is possible." },
        { question: "Can a Lyme Regis hire be used for European travel?", answer: "European travel may be available by prior arrangement. It is important to ask in advance so the booking can be set up correctly." },
        { question: "Is unlimited mileage offered for Lyme Regis hires?", answer: "Many bookings can include unlimited mileage, subject to vehicle and hire terms. We can advise once we know your plans." },
      ]}
    />
  );
}
