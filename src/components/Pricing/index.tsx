"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";

const pricingData = [
  {
    id: "basic-plan",
    title: "Basic Plan",
    price: "₹699/month",
    unit_amount: 49900, // in paise
    nickname: "Basic",
    offers: [
      "Email support",
      "Upto 100 product listings",
      "Basic sales analytics",
      "Standard product visibility",
      "Email order alerts",
    ],
    features: [
      "Upto 100 product listings",
      "Basic sales analytics",
      "Standard product visibility",
      "Email order alerts",
    ],
  },
  {
    id: "growth-plan",
    title: "Growth Plan",
    price: "₹1,999/month",
    unit_amount: 149900, // in paise
    nickname: "Growth",
    offers: [
      "Priority customer support",
      "Access to 1,000 products",
      "Advanced analytics & insights",
      "WhatsApp + Email notifications",
      "Marketplace integration (Amazon, Flipkart)",
      "Custom domain setup",
    ],
    features: [
      "Access to 1,000 products",
      "Advanced analytics & insights",
      "WhatsApp + Email notifications",
      "Marketplace integration",
      "Custom domain setup",
    ],
  },
  {
    id: "pro-plan",
    title: "Pro Plan",
    price: "₹5,299/month",
    unit_amount: 499900, // in paise
    nickname: "Pro",
    offers: [
      "Dedicated account manager",
      "Unlimited product listings",
      "Premium analytics dashboard",
      "Custom branding",
      "API access",
      "24/7 live chat + call support",
    ],
    features: [
      "Unlimited product listings",
      "Premium analytics dashboard",
      "Custom branding",
      "API access",
      "24/7 support",
    ],
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
            paragraph="Choose the perfect plan to grow your business with Bargainwale! Unlock premium features, enhanced analytics, and dedicated support for your success."
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
