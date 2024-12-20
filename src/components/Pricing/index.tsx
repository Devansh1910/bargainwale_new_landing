"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";

const pricingData = [
  {
    id: "free-plan", // Updated to string
    title: "Free Plan",
    price: "$0",
    unit_amount: 0,
    nickname: "Free",
    offers: [],
    features: ["Core features", "Basic support"],
  },
  {
    id: "pro-plan", // Updated to string
    title: "Pro Plan",
    price: "$49/month",
    unit_amount: 4900, // in cents, for example
    nickname: "Pro",
    offers: ["Discount for yearly billing"],
    features: ["Unlimited tasks", "Enhanced security", "Premium features"],
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Pricing Table"
            title="Pricing"
            paragraph="Enjoy the core features free forever! Upgrade now to unlock unlimited tasks, enhanced security, and access to exclusive premium features designed to elevate your experience."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
