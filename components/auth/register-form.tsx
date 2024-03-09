"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "@/schemas";

import CardWrapper from "./card-wraper";

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

import { register } from "@/actions/register";
import Link from "next/link";

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });

    form.reset();
  };

  return (
    <CardWrapper
      headerTitle="Register"
      headerDescription="To start using our services, please fill out the registration form below. All fields are mandatory:"
      backButtonLabel="Already have an account?"
      backButtonHref="/login"
      showSocials
    >
      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-[14px] md:space-y-[18px]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input disabled={isPending} {...field} placeholder="Name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                </FormItem>
              )}
            />
          </div>

          <ErrorMessage text={error} />
          <SuccessMessage text={success} />

          <div className="flex flex-col items-center gap-y-4">
            <Button className="w-full" type="submit" disabled={isPending}>
              Register
            </Button>

            <Link
              href="/login"
              className="text-neutral-900 text-opacity-50 text-base font-bold underline leading-normal"
            >
              Login
            </Link>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
