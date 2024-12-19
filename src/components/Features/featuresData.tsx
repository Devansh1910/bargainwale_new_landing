"use client";
import { Feature } from "@/types/feature";

// Import SVGs
import OrderManagementIcon from "@/app/assets/icons/order-management.svg";
import InventoryTrackingIcon from "@/app/assets/icons/inventory-tracking.svg";
import PricingDiscountIcon from "@/app/assets/icons/dynamic-price.svg";
import BuyerSellerCommunicationIcon from "@/app/assets/icons/buyer-seller-communication.svg";
import AnalyticsReportingIcon from "@/app/assets/icons/analytics.svg";
import PaymentInvoicingIcon from "@/app/assets/icons/secure-payment.svg";
import IntegrationToolsIcon from "@/app/assets/icons/integration.svg";
import MobileAccessibilityIcon from "@/app/assets/icons/mobile-friendly.svg";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <OrderManagementIcon width={30} height={30} />, // Adjusted size
    title: "Streamlined Order Management",
    paragraph:
      "Easily manage and track all your orders from a centralized dashboard. With real-time updates and bulk processing, handling transactions becomes faster and more efficient.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: <InventoryTrackingIcon width={30} height={30} />, // Adjusted size
    title: "Automated Inventory Tracking",
    paragraph:
      "Stay updated on your stock levels with automated inventory management. Receive alerts for low stock and synchronize inventory across multiple sales channels.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: <PricingDiscountIcon width={30} height={30} />, // Adjusted size
    title: "Dynamic Pricing and Discounts",
    paragraph:
      "Set up tailored pricing for different customer groups like wholesalers and retailers. Automate discounts and promotions to boost sales without manual effort.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 4,
    icon: <BuyerSellerCommunicationIcon width={30} height={30} />, // Adjusted size
    title: "Seamless Buyer-Seller Communication",
    paragraph:
      "Facilitate smooth negotiations and discussions with an integrated chat system. Keep a record of all interactions for better transparency and follow-ups.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 5,
    icon: <AnalyticsReportingIcon width={30} height={30} />, // Adjusted size
    title: "In-Depth Analytics and Reporting",
    paragraph:
      "Make data-driven decisions with detailed reports on sales, inventory, and profitability. Visual dashboards provide a quick snapshot of your business performance.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 6,
    icon: <PaymentInvoicingIcon width={30} height={30} />, // Adjusted size
    title: "Secure Payment and Invoicing",
    paragraph:
      "Handle payments with integrated gateways and generate professional invoices instantly. Enjoy secure and hassle-free transactions every time.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 7,
    icon: <IntegrationToolsIcon width={30} height={30} />, // Adjusted size
    title: "Integration with Essential Tools",
    paragraph:
      "Connect Bargainwale with your existing systems, including accounting software and logistics providers, to streamline operations end-to-end.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 8,
    icon: <MobileAccessibilityIcon width={30} height={30} />, // Adjusted size
    title: "Mobile-Friendly Accessibility",
    paragraph:
      "Manage your business on-the-go with a fully responsive design and dedicated mobile app. Keep track of orders, inventory, and payments from anywhere.",
    btn: "Learn More",
    btnLink: "/#",
  },
];

export default featuresData;
