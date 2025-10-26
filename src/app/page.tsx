import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import LogoutButton from "./logout";

const Page = async () => {
  await requireAuth();
  const data = await caller.getUsers();
  return (
    <div>
      <h1>Protected Page</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>

      <LogoutButton />
    </div>
  );
};

export default Page;
