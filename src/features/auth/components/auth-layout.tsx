import Link from "next/link";
import Image from "next/image";

/**
 * Layout component for the authentication pages.
 *
 * @param children - The page content to render inside the authentication layout.
 * @returns A React element containing the authentication layout.
 */

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted flex flex-col items-center justify-center min-h-svh gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <Image src="/logos/radar.svg" alt="Radar" width={30} height={30} />
          Autocreate
        </Link>
        {children}
      </div>
    </div>
  );
};
