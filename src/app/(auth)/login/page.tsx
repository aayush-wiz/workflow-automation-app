import { LoginForm } from "@/features/auth/components/login-form";
import { requireUnAuth } from "@/lib/auth-utils";

/**
 * Render the login page after ensuring the user is not authenticated.
 *
 * @returns A React element containing the login form.
 */

const LoginPage = async () => {
  await requireUnAuth();
  return <LoginForm />;
};

export default LoginPage;
