import RegisterForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up with iDonate to be iDonate member. Thank you",
  keywords: ["iDonate", "Fundraising", "Fundraiser", "Charity", "Cambodia Charity", "Charity in Cambodia", "Donation"]
}

export default function About() {
    return (
      <section className="grid place-content-center h-[100vh]">
        <RegisterForm/>
      </section>
    );
  }