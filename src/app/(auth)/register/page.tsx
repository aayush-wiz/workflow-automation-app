import { RegisterForm } from "@/features/auth/components/register-form";
import { requireUnAuth } from "@/lib/auth-utils";

/**
 * Render the registration page after ensuring the user is not authenticated.
 *
 * @returns A React element containing the registration form.
 */
export default async function RegisterPage() {
  await requireUnAuth();
  return <RegisterForm />;
}