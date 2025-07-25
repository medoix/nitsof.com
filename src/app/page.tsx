import Link from "next/link";
import { AppCard } from "@/components/AppCard";

const AnalyticsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
);

const LoyaltyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
);

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 text-center transition-all hover:border-blue-500/50 hover:bg-gray-900">
    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-blue-400">{icon}</div>
    <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
    <p className="mt-1 text-sm text-gray-400">{description}</p>
  </div>
);

export default function Home() {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="mx-auto flex h-screen min-h-[700px] max-w-screen-xl items-center px-4 py-32 lg:px-8">
        <div className="max-w-3xl text-left">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
            Elevate Your Shopify Store.
            <span className="sm:block"> Unleash Your Potential. </span>
          </h1>

          <p className="mt-4 max-w-xl text-lg text-gray-300 sm:text-xl/relaxed">
            Discover our suite of powerful Shopify apps, meticulously crafted to
            help you optimize, engage, and sell more effectively.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/apps"
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            >
              Explore Our Apps
            </Link>
            <Link href="/about" className="block w-full rounded border border-white px-12 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-gray-900 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Our Suite of Powerful Apps
          </h2>
          <p className="mt-4 text-gray-400">
            Tools designed to solve real-world problems for Shopify merchants.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
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
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Why Build with NITSOF?
          </h2>
          <p className="mt-4 text-gray-400">
            We're more than just a developer; we're your partner in e-commerce success.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard
            title="Reliable Performance"
            description="Our apps are built for scale, ensuring they run smoothly without slowing down your store."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>}
          />
          <FeatureCard
            title="Expert Support"
            description="Get fast, friendly, and helpful support from our team of Shopify experts."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>}
          />
          <FeatureCard
            title="User-Friendly Design"
            description="Intuitive interfaces that feel like a natural part of your Shopify admin."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>}
          />
        </div>
      </section>
    </div>
  );
}