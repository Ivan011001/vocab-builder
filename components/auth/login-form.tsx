"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "@/schemas";

import CardWrapper from "./card-wraper";

import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "../ui/form";
import ErrorMessage from "../error-message";
import SuccessMessage from "../success-message";

import { login } from "@/actions/login";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const errorUrl =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use!"
      : "";
  const callbackUrl = searchParams.get("callbackUrl");

  const [isPending, startTransition] = useTransition();

  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data?.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data?.success);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => {
          setError("Something went wrong!");
        });
    });
  };

  return (
    <CardWrapper
      headerTitle="Login"
      headerDescription="Please enter your login details to continue using our service:"
      backButtonLabel="Don't have an account?"
      backButtonHref="/register"
      showSocials
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        placeholder="Code"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          {...field}
                          type="email"
                          placeholder="Email"
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
                      <FormControl>
                        <Input
                          disabled={isPending}
                          {...field}
                          type="password"
                          placeholder="Password"
                        />
                      </FormControl>
                      <FormMessage />
                      <Button
                        className="px-0 font-normal"
                        size="sm"
                        asChild
                        variant="link"
                      >
                        <Link href={"/reset"}>Forgot your password?</Link>
                      </Button>
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>

          <ErrorMessage text={error || errorUrl} />
          <SuccessMessage text={success} />

          <Button
            className=""
            type="submit"
            disabled={isPending}
            variant="default"
          >
            {showTwoFactor ? "Confirm" : "Log in"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
