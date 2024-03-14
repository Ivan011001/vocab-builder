"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { newVerification } from "@/actions/auth/new-verification";

import CardWrapper from "./card-wraper";
import ErrorMessage from "../error-message";
import SuccessMessage from "../success-message";

import { Oval } from "react-loader-spinner";

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) return;

    newVerification(token)
      .then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      })
      .catch(() => {
        setError("Something went wrong"!);
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerTitle="Email Verification"
      backButtonLabel="Login"
      backButtonHref="/login"
    >
      {!error && !success && (
        <div className="flex justify-center items-center">
          <Oval width={50} height={50} />
        </div>
      )}

      <SuccessMessage text={success} />
      <ErrorMessage text={error} />
    </CardWrapper>
  );
};

export default NewVerificationForm;
