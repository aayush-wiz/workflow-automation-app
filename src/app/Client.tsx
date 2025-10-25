"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

export const Client = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.getUsers.queryOptions());
  return (
    <div className="text-3xl flex flex-col items-center justify-center h-screen bg-amber-500">
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};
