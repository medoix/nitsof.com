
export default function CarrierRatesFAQ() {
  return (
    <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-24 pt-40 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="mt-12 space-y-8">
        <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
          <h3 className="text-lg font-bold text-white">What carriers do you support?</h3>
          <p className="mt-2 text-sm text-gray-300">We support a wide range of carriers, including ...</p>
        </div>

        <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
          <h3 className="text-lg font-bold text-white">How are shipping rates calculated?</h3>
          <p className="mt-2 text-sm text-gray-300">Shipping rates are fetched in real-time from the carrier APIs based on the items in the cart and the customer's shipping address.</p>
        </div>

        <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
          <h3 className="text-lg font-bold text-white">Can I customize the shipping rates?</h3>
          <p className="mt-2 text-sm text-gray-300">Yes, our app allows you to add markups or discounts to the rates returned by the carriers.</p>
        </div>
      </div>
    </div>
  );
}
