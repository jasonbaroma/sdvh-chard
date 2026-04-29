"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location5-hero",
    src: "/images/millbrook-hero-country-road.jpg",
    alt: "Long-wheelbase hire van on a straight country road near Wellington",
  };

  return (
    <HomePage
      currentLocationLabel="Wellington"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Honiton"
      heroDescription="Vehicle Hire Honiton for business journeys, moving days, family travel, and day-to-day transport. Choose from cars, vans, minibuses, and trucks to match the task."
      serviceAreasTitle="Serving Wellington and nearby roads"
      serviceAreasDescription="Our Wellington coverage extends across the town and surrounding Somerset routes, making it straightforward to arrange car, van, minibus or truck hire for local jobs and onward travel."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Vehicle hire that fits day-to-day travel around Wellington"
      infoContentSectionIntro="Vehicle hire in Honiton suits a wide mix of needs, from practical household tasks to commercial transport and longer road trips. With good onward road access, it is often a straightforward place to start a journey that needs more space, seats, or carrying ability than usual."
      infoContentBlock1Title="A handy base for longer regional travel"
      infoContentBlock1Body="Honiton is a strong location for vehicle hire because many journeys branch outward toward Exeter, East Devon, and neighbouring counties. A hire vehicle can be useful when you need temporary flexibility rather than a permanent larger vehicle."
      infoContentBlock2Title="Helpful for moves, collections, and weekend jobs"
      infoContentBlock2Body="For home projects and moving days, van hire gives you the space to collect furniture, clear storage, or transport bulky purchases in fewer trips. That can make planning much easier, especially over a busy weekend."
      infoContentBlock3Title="Useful extra capacity for local businesses"
      infoContentBlock3Body="Honiton businesses can also benefit from access to vans and trucks during seasonal peaks, maintenance periods, or temporary workload increases. Hiring lets you scale up only when the work requires it."
      bottomCtaTitle="Arrange a vehicle in Honiton"
      bottomCtaDescription="If you need extra carrying space or a reliable vehicle for local and regional journeys, we can help with Honiton hire options."
      secondaryCtaTitle="Need something specific?"
      secondaryCtaDescription="If you already know the type of vehicle you need, we can help you book something practical for local driving, business mileage or a longer trip beyond town."
      faqs={[
        { question: "What can I hire in Honiton?", answer: "Yes. We provide access to cars, vans, minibuses, and trucks for customers in Honiton needing flexible short-term or longer hires." },
        { question: "Do you deliver to Honiton addresses?", answer: "Delivery is often available and can be especially useful for home moves, business bookings, or when you want to avoid an extra collection trip." },
        { question: "Can I book a one-way hire from Honiton?", answer: "Yes, selected one-way rentals can be arranged. Let us know your pickup point and destination so we can check the route." },
        { question: "Are Honiton hires available for trips into Europe?", answer: "Potentially, yes. European travel needs prior approval, so please raise it before confirming your booking." },
        { question: "Is unlimited mileage possible in Honiton?", answer: "Many vehicles can be hired with unlimited mileage, depending on the booking terms. We can confirm once we know your plans." },
      ]}
    />
  );
}
