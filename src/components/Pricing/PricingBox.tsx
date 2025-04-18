import React, { useState } from 'react';
import axios from 'axios';
import { Price } from '@/types/price';

// Simple Alert Component
const Alert = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
    {children}
  </div>
);

// Icons as SVG components
const CheckIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const LoaderIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="animate-spin"
  >
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
  </svg>
);

const PricingBox = ({ product }: { product: Price }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubscription = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { data } = await axios.post(
        "/api/payment",
        {
          priceId: product.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      window.location.assign(data);
    } catch (err) {
      setError('Failed to process payment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-lg 
          dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14
          transition-all duration-300 transform
          ${isHovered ? 'scale-105 shadow-xl' : ''}
          ${product.nickname === "Premium" ? 'border-2 border-[#1C7DD9]' : ''}
        `}
      >
        {product.nickname === "Premium" && (
          <div className="absolute right-[-50px] top-[60px] flex transform -rotate-90">
            <div className="bg-[#1C7DD9] px-5 py-2 rounded-bl-md rounded-tl-md flex items-center gap-2">
              <span className="text-base font-medium text-white">Recommended</span>
              <CheckIcon />
            </div>
          </div>
        )}

        <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
          {product.nickname}
        </span>

        <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
          <span className="text-xl font-medium">$</span>
          <span className="-ml-1 -tracking-[2px]">
            {(product.unit_amount / 100).toLocaleString("en-US", {
              currency: "INR",
            })}
          </span>
          <span className="text-base font-normal text-body-color dark:text-dark-6">
            {" "}Per Month
          </span>
        </h2>

        <div className="mb-8">
          <h3 className="mb-5 text-lg font-medium text-dark dark:text-white">
            Features
          </h3>
          <div className="space-y-4">
            {product?.offers.map((offer, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-body-color transition-transform duration-300 hover:translate-x-2"
              >
                <span className="text-[#1C7DD9]"><CheckIcon /></span>
                <span>{offer}</span>
              </div>
            ))}
          </div>
        </div>

        {error && (
          <Alert>{error}</Alert>
        )}

        <div className="w-full">
          <button
            onClick={handleSubscription}
            disabled={isLoading}
            className={`
              inline-flex items-center justify-center gap-2 w-full
              rounded-md bg-[#1C7DD9] px-7 py-3 
              text-center text-base font-medium text-white
              transition-all duration-300
              ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#1C7DD9]/90 hover:shadow-lg'}
            `}
          >
            {isLoading ? (
              <>
                <LoaderIcon />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Purchase Now</span>
                <span className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
                  <ArrowRightIcon />
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;