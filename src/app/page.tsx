import prisma from "@/lib/db";

const Page = async () => {
  const users = await prisma.user.findMany();
  return (
    <div className="text-3xl flex flex-col items-center justify-center h-screen bg-amber-500">
      {JSON.stringify(users[0].id)}
    </div>
  );
};

export default Page;
