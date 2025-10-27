"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";

const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

/**
 * Render the login form.
 *
 * @returns A React element containing the login form.
 */

export const LoginForm = () => {
  const router = useRouter();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    await authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          router.push("/");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
      }
    );
  };

  const isPending = form.formState.isSubmitting;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome back!</CardTitle>
        <CardDescription>Login to your account to continue.</CardDescription>
      </CardHeader>
      <div className="px-6 pb-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col gap-4">
              <Button
                variant="outline"
                className="w-full flex items-center gap-2"
                type="button"
                disabled={isPending}
              >
                <Image
                  src="/logos/github.svg"
                  alt="Github"
                  width={20}
                  height={20}
                />
                Continue with Github
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center gap-2"
                type="button"
                disabled={isPending}
              >
                <Image
                  src="/logos/google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />
                Continue with Google
              </Button>
            </div>
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="m@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isPending}>
                Login
              </Button>
            </div>
            <div className="text-sm text-center">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="underline underline-offset-4">
                Create an account
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </Card>
  );
};
