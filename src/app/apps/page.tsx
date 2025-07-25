import { AppCard } from "@/components/AppCard";

const AnalyticsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
);

const LoyaltyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
);

export default function Apps() {
  return (
    <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-24 pt-40 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
          Discover Our Applications
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-300 sm:text-xl/relaxed">
          Explore our collection of powerful Shopify applications designed to
          optimize your store, enhance customer engagement, and boost your
          sales.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AppCard
          name="Super Analytics"
          description="Gain deep insights into your sales, customers, and products with advanced, easy-to-understand reports."
          href="#"
          icon={<AnalyticsIcon />}
          isComingSoon
        />
        <AppCard
          name="Loyalty Rewards"
          description="Boost customer retention and lifetime value with a customizable points and rewards program."
          href="#"
          icon={<LoyaltyIcon />}
          isComingSoon
        />
        {/* Add more AppCard components here as you plan new apps */}
      </div>
    </div>
  );
}
