
import Link from "next/link";

export default function CarrierRatesPage() {
  return (
    <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-24 pt-40 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
          Carrier Rates
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-300 sm:text-xl/relaxed">
          Connect your Shopify store with various carriers to provide real-time, accurate shipping rates at checkout.
        </p>

        <div className="mt-8">
          <Link
            href="/carrier-rates/faq"
            className="inline-block rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
          >
            <span
              className="block rounded-full bg-gray-900 px-8 py-3 text-sm font-medium hover:bg-transparent"
            >
              Frequently Asked Questions
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
