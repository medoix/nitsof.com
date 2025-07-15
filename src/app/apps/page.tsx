export default function Apps() {
  return (
    <main
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:from-black/95 sm:to-black/25 sm:bg-gradient-to-r" />
      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Our Shopify Apps
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Explore our collection of powerful Shopify applications designed to
            optimize your store, enhance customer engagement, and boost your
            sales.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
              <a href="#">App 1</a>
            </button>
            <button className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
              <a href="#">App 2</a>
            </button>
            <button className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
              <a href="/about">Learn More About Us</a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
