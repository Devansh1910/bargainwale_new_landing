import React from "react";
import ResetPassword from "@/components/Auth/ResetPassword";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | Bargainwale",
};

type Props = {
  params: {
    token: string;
  };
};

const ResetPasswordPage = async ({ params }: Props) => {
  const { token } = params; // No need to await here for destructuring

  return (
    <>
      <Breadcrumb pageName="Reset Password" />
      <ResetPassword token={token} />
    </>
  );
};

export default ResetPasswordPage;
