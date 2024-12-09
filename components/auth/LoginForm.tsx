'use client'

import { signIn, useSession } from "next-auth/react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import BackgroundImage from "@/public/images/donation-login.jpg"
import GoogleIcon from "@/public/images/google.png"
import FacebookIcon from "@/public/images/facebook.png"


const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
})

export default function LoginForm() {
  const { data: session, status } = useSession()

  const handleSubmit = async (values: { email: string; password: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    })
    if (result?.error) {
      alert("Login failed. Please try again.")
    }
    setSubmitting(false)
  }

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return (
    <div className="flex min-h-screen items-center justify-center md:grid md:grid-cols-2">
      {/* Left section with image */}
      <div className="relative hidden md:block border-4  m-4 rounded-lg overflow-hidden">
        <Image
          src={BackgroundImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-4 left-4">
          <Image
            src="/placeholder.svg"
            alt="ISTAD Logo"
            width={50}
            height={50}
          />
        </div>
      </div>

      {/* Right section with form */}
      <div className="flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src={BackgroundImage}
              alt="iDonate Logo"
              width={120}
              height={120}
              className="mb-4"
            />
          </div>

          {/* Header text */}
          <div className="text-center space-y-2 mb-8">
            <p className="text-gray-600">Join Donation Today</p>
            <h1 className="text-2xl font-bold text-gray-900">Happening now</h1>
          </div>

          <Card className="p-6 shadow-lg">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting, getFieldProps }) => (
                <Form className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      {...getFieldProps('email')}
                      className={`w-full ${errors.email && touched.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && touched.email && (
                      <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                    )}
                  </div>
                  <div>
                    <Input
                      type="password"
                      placeholder="Password"
                      {...getFieldProps('password')}
                      className={`w-full ${errors.password && touched.password ? 'border-red-500' : ''}`}
                    />
                    {errors.password && touched.password && (
                      <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                    )}
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#2C3A67] hover:bg-[#1f2847] text-white"
                    disabled={isSubmitting}
                  >
                    Log in
                  </Button>
                </Form>
              )}
            </Formik>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">or</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => signIn("google", { callbackUrl: "/" })}
              >
                <Image
                  src={GoogleIcon}
                  alt="Google"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                Continue with Google
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => signIn("facebook", { callbackUrl: "/" })}
              >
                <Image
                  src={FacebookIcon}
                  alt="Facebook"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                Continue with Facebook
              </Button>
            </div>

            {session && (
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  Signed in as {session.user?.email}
                </p>
              </div>
            )}
          </Card>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/auth/sign-up" className="text-blue-600 hover:underline font-medium">
                Signup Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

