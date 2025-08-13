import Link from "next/link";
import { AppCard } from "@/components/AppCard";



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
              href="/#apps"
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            >
              Explore Our Apps
            </Link>
            <Link href="/#about" className="block w-full rounded border border-white px-12 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-gray-900 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section id="apps" className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Our Suite of Powerful Apps
          </h2>
          <p className="mt-4 text-gray-400">
            Tools designed to solve real-world problems for Shopify merchants.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AppCard
          name="Carrier Rates"
          description="Connect up carriers to your Shopify store to fetch real-time live carrier rates at checkout."
          href="/carrier-rates"
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-2.1 0-3.5-1.4-3.5-3.5s1.4-3.5 3.5-3.5h15c2.1 0 3.5 1.4 3.5 3.5s-1.4 3.5-3.5 3.5h-15Z" /><path d="m8 16-1.5-1.5L8 13" /><path d="M16 8l1.5 1.5L16 11" /></svg>}
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
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            About NITSOF
          </h2>
          <p className="prose prose-lg prose-invert mx-auto mt-4">
            We are a passionate team of developers and e-commerce experts
            dedicated to creating high-quality, reliable, and user-friendly
            Shopify applications.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard title="Uncompromising Quality" description="We build robust, reliable, and performant apps that you can depend on." icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>} />
          <FeatureCard title="Merchant-Focused" description="Your success is our success. We design solutions to solve your real-world problems." icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>} />
          <FeatureCard title="Continuous Innovation" description="We are always exploring new technologies and strategies to keep you ahead of the curve." icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3m0-7.98a9 9 0 0 1 7.95-7.95M5 19h14" /><path d="M7.5 14.5c0 0 2-2.5 5-2.5s5 2.5 5 2.5" /></svg>} />
        </div>
      </section>
    </div>
  );
}