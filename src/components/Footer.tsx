import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-800 bg-black/50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="/privacy" className="text-gray-400 hover:text-white">
              Privacy
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} NITSOF. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}