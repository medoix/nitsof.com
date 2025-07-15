import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-10 w-full p-4 sm:p-6">
      <div className="mx-auto max-w-screen-xl">
        <Link href="/">
          <Image
            src="/images/nitsof-logo.svg"
            alt="NITSOF Logo"
            width={140}
            height={35}
            priority
          />
        </Link>
      </div>
    </header>
  );
};