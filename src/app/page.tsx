import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/trpc/server";
import { trpc } from "@/trpc/server";
import { Client } from "./Client";
import { Suspense } from "react";
const Page = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(trpc.getUsers.queryOptions());
  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());
  return (
    <div className="text-3xl flex flex-col items-center justify-center h-screen bg-amber-500">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading...</div>}>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
};

export default Page;
