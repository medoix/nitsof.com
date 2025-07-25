import Link from "next/link";

const QualityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);

const MerchantFocusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);

const InnovationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3m0-7.98a9 9 0 0 1 7.95-7.95M5 19h14" /><path d="M7.5 14.5c0 0 2-2.5 5-2.5s5 2.5 5 2.5" /></svg>
);

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 text-center transition-all hover:border-blue-500/50 hover:bg-gray-900">
    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-blue-400">{icon}</div>
    <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
    <p className="mt-1 text-sm text-gray-400">{description}</p>
  </div>
);

export default function About() {
  return (
    <div className="relative z-10">
      <section className="mx-auto max-w-4xl px-6 py-24 pt-40 text-center sm:py-32 lg:px-8">
        <div className="prose prose-lg prose-invert mx-auto">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
            About NITSOF
          </h1>
          <p className="mx-auto mt-4 max-w-x2 text-gray-300 sm:text-xl/relaxed">
            We are a passionate team of developers and e-commerce experts
            dedicated to creating high-quality, reliable, and user-friendly
            Shopify applications.
            <br />
            <br />
            Our mission is to empower Shopify merchants by providing them with the
            tools they need to succeed in a competitive online marketplace. We
            believe in the power of smart technology to simplify complex tasks,
            unlock new opportunities, and drive growth.
            <br />
            <br />
            From analytics to customer engagement, each of our apps is designed
            with a deep understanding of the challenges merchants face. We are
            committed to continuous improvement, exceptional customer support, and
            building long-lasting relationships with the stores we serve.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Our Core Principles
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard title="Uncompromising Quality" description="We build robust, reliable, and performant apps that you can depend on." icon={<QualityIcon />} />
          <FeatureCard title="Merchant-Focused" description="Your success is our success. We design solutions to solve your real-world problems." icon={<MerchantFocusIcon />} />
          <FeatureCard title="Continuous Innovation" description="We are always exploring new technologies and strategies to keep you ahead of the curve." icon={<InnovationIcon />} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 pt-12 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to grow your store?</h2>
        <p className="mt-4 text-gray-400">
          Check out our suite of apps and find the perfect tool to elevate your business.
        </p>
        <div className="mt-8">
          <Link href="/apps" className="w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
            Explore Our Apps
          </Link>
        </div>
      </section>
    </div>
  );
}