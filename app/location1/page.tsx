"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location1-hero",
    src: "/images/torpoint-hero-country-road.jpg",
    alt: "Silver rental estate car travelling on a rural road near Crewkerne",
  };

  return (
    <HomePage
      currentLocationLabel="Crewkerne"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Ilminster"
      heroDescription="Vehicle Hire Ilminster for everyday driving, local moves, business transport, and group travel. Choose from cars, vans, minibuses, and trucks with practical booking options."
      serviceAreasTitle="Serving Ilminster and nearby roads"
      serviceAreasDescription="We support hires in Ilminster and nearby parts of South Somerset, with coverage that also suits journeys heading toward Taunton, Chard, Yeovil, and surrounding villages."
      infoContentSectionKicker="Useful hire guidance"
      infoContentSectionTitle="Getting the most from vehicle hire in Ilminster"
      infoContentSectionIntro="Vehicle hire in Ilminster is often about convenience. Whether you need a short-term replacement car, a van for a practical job, or a larger vehicle for group or work use, the town is well placed for straightforward onward travel across South Somerset and beyond."
      infoContentBlock1Title="Useful for town and route-based travel"
      infoContentBlock1Body="Ilminster works well for drivers who need quick access to nearby towns and the A303 corridor. That makes hired cars and vans useful for business travel, appointments, deliveries, and collecting larger items without relying on a permanent larger vehicle."
      infoContentBlock2Title="A sensible option for home and family plans"
      infoContentBlock2Body="For households in and around Ilminster, van hire can be a practical way to handle furniture pickups, storage runs, and smaller house moves. If the job involves people as well as luggage, a minibus can be a better fit than taking multiple cars."
      infoContentBlock3Title="Choosing the right vehicle for the task"
      infoContentBlock3Body="If you are hiring for work, it helps to think about load space, access, and how many stops you expect to make. We can help you choose between compact vans, larger panel vans, Lutons, or heavier-duty options where needed."
      bottomCtaTitle="Plan your hire in Ilminster"
      bottomCtaDescription="From local errands to longer drives across the Blackdown Hills area, we can help arrange a suitable car, van, minibus, or truck."
      secondaryCtaTitle="Ready to sort the details?"
      secondaryCtaDescription="If you already know your dates and route, get in touch and we will help you line up a suitable vehicle without unnecessary back and forth."
      faqs={[
        { question: "What vehicle hire options do you offer in Ilminster?", answer: "Yes. We arrange vehicle hire for Ilminster covering cars, vans, minibuses, and trucks, depending on what you need the vehicle for." },
        { question: "Can the vehicle be delivered in Ilminster?", answer: "Delivery is available on many bookings, which can be useful if you want the vehicle brought to your home, workplace, or another agreed local address." },
        { question: "Do you provide one-way hire from Ilminster?", answer: "Yes, one-way hire may be possible on selected rentals. Share your route with us and we will confirm whether that option is available." },
        { question: "Can I take a hire vehicle from Ilminster into Europe?", answer: "Some vehicles can be approved for European travel, but this needs to be arranged before the hire starts so the correct details can be confirmed." },
        { question: "Is unlimited mileage available for Ilminster bookings?", answer: "Many hires can be arranged with unlimited mileage. Let us know your likely distance so we can guide you to the right booking." },
      ]}
    />
  );
}
