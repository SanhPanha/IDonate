"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { Loader2, Mail, Lock, EyeOff, Eye, CalendarIcon } from 'lucide-react';
import { signIn, useSession } from "next-auth/react";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import GoogleIcon from "@/public/images/google.png";
import FacebookIcon from "@/public/images/facebook.png";

const step1Schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const step2Schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  gender: z.enum(["Male", "Female"], { required_error: "Gender is required" }),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
    invalid_type_error: "That's not a date!",
  }).max(new Date(), "Date of birth cannot be in the future"),
  phoneNumber: z.string().regex(/^\d{10,}$/, "Phone number must be at least 10 digits"),
  currentAddress: z.string().min(1, "Current address is required"),
});

type Step1Inputs = z.infer<typeof step1Schema>;
type Step2Inputs = z.infer<typeof step2Schema>;

type FormInputs = Step1Inputs & Step2Inputs;

export default function SignUpForm() {
  const { data: session, status } = useSession();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    trigger,
    watch,
  } = useForm<FormInputs>({
    resolver: zodResolver(step === 1 ? step1Schema : step2Schema),
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    if (step === 1) {
      const isValid = await trigger(["email", "password"]);
      if (isValid) {
        setStep(2);
      }
    } else {
      try {
        // Here you would typically send the registration data to your backend
        console.log("Registration data:", data);
        toast.success("Registration successful!");
        // Redirect or do something else on successful registration
      } catch (error) {
        console.error("Registration error:", error);
        toast.error("An unexpected error occurred. Please try again later.");
      }
    }
  };

  const handleSocialLogin = (provider: string) => {
    signIn(provider, { callbackUrl: "/" });
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="flex gap-4">
        <div className="w-2 bg-green-500 h-[50px]" />
        <div className="flex-1">
          <div className="text-sm text-green-600">
            Building Smiles, One Step at a Time
          </div>
          <h1 className="text-2xl font-bold text-navy-900 mb-8">
            Donor Registration
          </h1>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Kindness for a Cause
              </h2>
              <p className="text-sm text-gray-600">
                Rise Together, Share Together
              </p>
            </div>

            <Card className="w-full mx-auto p-4 sm:p-10 border border-none bg-transparent">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                {step === 1 ? (
                  <>
                    <div>
                      <label
                        htmlFor="email"
                        className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1"
                      >
                        <Mail className="w-4 h-4 text-iDonate-navy-primary" />
                        <span>
                          Email <span className="text-red-500">*</span>
                        </span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="idonate.istad.co@gmail.com"
                        {...register("email")}
                        className="ring-iDonate-navy-secondary focus:ring-red-500 border border-iDonate-navy-secondary"
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs mt-1"
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="password"
                        className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1"
                      >
                        <Lock className="w-4 h-4 text-iDonate-navy-primary" />
                        <span>
                          Password <span className="text-red-500">*</span>
                        </span>
                      </label>
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Idonate123@#$!"
                        {...register("password")}
                        className="ring-iDonate-navy-secondary focus:ring-red-500 border border-iDonate-navy-secondary"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-9 text-gray-400 hover:text-gray-600 focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                      {errors.password && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs mt-1"
                        >
                          {errors.password.message}
                        </motion.p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-16 md:gap-36 sm:items-center sm:justify-between text-sm mt-4">
                      <p className="mt-4 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                          href="/auth/login"
                          className="text-iDonate-green-primary hover:text-iDonate-navy-primary/80 font-medium transition-colors duration-200 hover:underline"
                        >
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="Chan Tola"
                          {...register("firstName")}
                          className={cn(
                            errors.firstName && "border-red-500"
                          )}
                        />
                        {errors.firstName && (
                          <div className="text-red-500 text-xs mt-1">
                            {errors.firstName.message}
                          </div>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Male"
                          {...register("lastName")}
                          className={cn(
                            errors.lastName && "border-red-500"
                          )}
                        />
                        {errors.lastName && (
                          <div className="text-red-500 text-xs mt-1">
                            {errors.lastName.message}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 ">
                      <div>
                        <label
                          htmlFor="gender"
                          className="font-medium text-sm text-gray-700"
                        >
                          Gender
                        </label>
                        <select
                          id="gender"
                          {...register("gender")}
                          className={cn(
                            "p-2 border rounded-md focus:outline-none w-full",
                            errors.gender && "border-red-500"
                          )}
                        >
                          <option value="" disabled>
                            Select Gender
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        {errors.gender && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.gender.message}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label
                          htmlFor="dateOfBirth"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Date of Birth
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !watch("dateOfBirth") && "text-muted-foreground"
                              )}
                            >
                              {watch("dateOfBirth") ? (
                                format(watch("dateOfBirth"), "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto p-0"
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              selected={watch("dateOfBirth")}
                              onSelect={(date) => setValue("dateOfBirth", date as Date)}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        {errors.dateOfBirth && (
                          <div className="text-red-500 text-xs mt-1">
                            {errors.dateOfBirth.message}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phoneNumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phoneNumber"
                          type="tel"
                          placeholder="070 ********"
                          {...register("phoneNumber")}
                          className={cn(
                            errors.phoneNumber && "border-red-500"
                          )}
                        />
                        {errors.phoneNumber && (
                          <div className="text-red-500 text-xs mt-1">
                            {errors.phoneNumber.message}
                          </div>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="currentAddress"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Current Address
                        </label>
                        <Input
                          id="currentAddress"
                          type="text"
                          placeholder="Phnom penh, Cambodia"
                          {...register("currentAddress")}
                          className={cn(
                            errors.currentAddress && "border-red-500"
                          )}
                        />
                        {errors.currentAddress && (
                          <div className="text-red-500 text-xs mt-1">
                            {errors.currentAddress.message}
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 sm:mt-8"
                >
                  <Button
                    type="submit"
                    className="w-full h-10 sm:h-11 bg-iDonate-green-primary hover:bg-iDonate-navy-primary/90 text-white font-medium text-lg rounded-md transition-all duration-200 shadow-md hover:shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : step === 1 ? (
                      "Continue"
                    ) : (
                      "Register"
                    )}
                  </Button>
                </motion.div>
              </form>

              {step === 1 && (
                <>
                  <div className="flex items-center my-4 mb-0">
                    <span className="flex-grow border-t border-gray-400"></span>
                    <span className="mx-4 text-sm text-gray-500 font-medium">
                      or continue with
                    </span>
                    <span className="flex-grow border-t border-gray-400"></span>
                  </div>

                  <div className="flex items-center justify-center mt-4 space-x-[-20px]">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="w-20 h-20 rounded-full bg-transparent border-none hover:bg-transparent transition-colors duration-200"
                        onClick={() => handleSocialLogin("google")}
                      >
                        <Image
                          src={GoogleIcon}
                          alt="Google"
                          width={60}
                          height={60}
                        />
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="w-20 h-20 rounded-full bg-transparent border-none hover:bg-transparent transition-colors duration-200"
                        onClick={() => handleSocialLogin("facebook")}
                      >
                        <Image
                          src={FacebookIcon}
                          alt="Facebook"
                          width={60}
                          height={60}
                        />
                      </Button>
                    </motion.div>
                  </div>
                </>
              )}
            </Card>

            <Toaster position="top-center" reverseOrder={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

// export default RegisterForm;
