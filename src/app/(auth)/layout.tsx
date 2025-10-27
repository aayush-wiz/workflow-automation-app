import { AuthLayout } from "@/features/auth/components/auth-layout";

/**
 * Layout component for the authentication pages.
 *
 * @param children - The page content to render inside the authentication layout.
 * @returns A React element containing the authentication layout.
 */

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default Layout;
