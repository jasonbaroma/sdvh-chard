"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  const homepageHeroImage = {
    slot: "homepage-hero",
    src: "/images/homepage-hero-country-road.jpeg",
    alt: "White hire van driving along a tree-lined rural road near Chard in warm afternoon light.",
  };

  return (
    <HomePage
      heroImage={homepageHeroImage.src}
      heroImageAlt={homepageHeroImage.alt}
      heroTitle="Vehicle Hire Chard"
      heroDescription="Vehicle Hire Chard for everyday driving, moving jobs, group travel and commercial transport. Choose from cars, vans, minibuses and trucks with flexible booking support."
      serviceAreasTitle="Vehicle hire around Chard and nearby towns"
      serviceAreasDescription="From Chard we support vehicle hire across the surrounding Somerset, East Devon and West Dorset area, covering local towns, rural communities and longer-distance journeys across the UK."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Practical vehicle hire advice for Chard journeys"
      infoContentSectionIntro="Hiring a vehicle in Chard is often the easiest way to handle jobs that your usual car cannot cover. Whether you need extra seats, extra load space or something more suitable for business use, local access to the A30 and A358 makes Chard a convenient starting point."
      infoContentBlock1Title="Best routes in and out of Chard"
      infoContentBlock1Body="Chard sits close to the A30 and A358, which makes it a practical base for local trips, deliveries and longer runs towards Taunton, Yeovil, Axminster and the South Coast. Hiring the right vehicle can make those routes simpler, especially when space or payload matters."
      infoContentBlock2Title="Useful for moves, collections and trade work"
      infoContentBlock2Body="For home moves, retail collection or trade work, hiring a van or truck in Chard can save multiple journeys in a smaller vehicle. Delivery and collection can also be useful if you want to start from home, a workplace or a storage site nearby."
      infoContentBlock3Title="Hiring for local travel and weekends away"
      infoContentBlock3Body="If you are planning a family outing, airport run or group journey, a larger car or minibus can be a more practical option than using several vehicles. Chard is well placed for trips across Somerset, Devon and Dorset, so flexible hire works well for both short and longer bookings."
      bottomCtaTitle="Book your Chard vehicle hire"
      bottomCtaDescription="Tell us what you need and we will help match the right car, van, minibus or truck for your journey in and around Chard."
      secondaryCtaTitle="Plan your Chard vehicle hire"
      secondaryCtaDescription="Whether you need a car, van, minibus or truck in Chard, we can help you line up the right vehicle with practical support from the start."
      faqs={[
        { question: "What vehicles can I hire in Chard?", answer: "We supply a wide range of self-drive vehicles including cars, vans, minibuses and trucks, so we can help with anything from day trips to house moves and business transport." },
        { question: "Do you offer delivery and collection?", answer: "Yes, delivery and collection can often be arranged depending on the vehicle and booking details. Let us know your location when you enquire." },
        { question: "Can I arrange one-way or longer-term hire?", answer: "Many hires can be arranged for one-way use or longer periods, subject to availability and the type of vehicle required." },
        { question: "Is European travel possible with a hire vehicle?", answer: "Some vehicles can be taken into Europe by prior arrangement. It is best to request this at the time of booking so the right paperwork can be prepared." },
        { question: "What do I need to hire a vehicle?", answer: "You will need to meet the licence and identification requirements for the vehicle you want to hire. We can confirm what is needed before you book." },
      ]}
    />
  );
}
