import Link from "next/link";

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 transition-transform group-hover:translate-x-1"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

interface AppCardProps {
  name: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  isComingSoon?: boolean;
}

export const AppCard = ({ name, description, href, icon, isComingSoon = false }: AppCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-blue-500/50 hover:bg-gray-900">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gray-800 text-blue-400">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="mt-1 text-sm text-gray-400">{description}</p>
        </div>
      </div>
      <Link href={href} className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300">
        Learn More <ArrowRightIcon />
      </Link>
      {isComingSoon && <div className="absolute top-2 right-2 rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs font-medium text-yellow-400">Coming Soon</div>}
    </div>
  );
};