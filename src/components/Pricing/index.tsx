"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";

const pricingData = [
  {
    id: "starter-plan",
    title: "Starter Plan",
    price: "$9/month",
    unit_amount: 900, // in cents
    nickname: "Starter",
    offers: ["Basic customer support"],
    features: [
      "Access to 100 products",
      "Basic analytics",
      "Standard listing visibility",
      "Email notifications",
    ],
  },
  {
    id: "business-plan",
    title: "Business Plan",
    price: "$29/month",
    unit_amount: 2900, // in cents
    nickname: "Business",
    offers: ["Priority customer support", "10% discount on yearly billing"],
    features: [
      "Access to 1,000 products",
      "Advanced analytics and insights",
      "Enhanced listing visibility",
      "Integration with popular marketplaces",
      "SMS and email notifications",
    ],
  },
  {
    id: "enterprise-plan",
    title: "Enterprise Plan",
    price: "$99/month",
    unit_amount: 9900, // in cents
    nickname: "Enterprise",
    offers: ["Dedicated account manager", "Custom pricing for bulk listings"],
    features: [
      "Unlimited product listings",
      "Premium analytics and reporting",
      "Top-tier listing visibility",
      "Dedicated API access",
      "Custom branding options",
      "24/7 priority support",
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
