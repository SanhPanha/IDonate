"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { useState } from "react"
import { SquarePen } from "lucide-react"
import { organizationAddressSchema } from "../schema/schema"

export function OrganizationAddressForm() {
  // 1. State to toggle between view and edit mode
  const [isEditing, setIsEditing] = useState(false)

  // 2. Define your form.
  const form = useForm<z.infer<typeof organizationAddressSchema>>({
    resolver: zodResolver(organizationAddressSchema),
    defaultValues: {
      address: "",
    },
  })

  // 3. Define a submit handler.
  function onSubmit(values: z.infer<typeof organizationAddressSchema>) {
    console.log(values)
    // Switch back to view mode after submitting
    setIsEditing(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* View Mode */}
        {!isEditing && (
          <Card className="flex flex-col rounded-lg border-2 border-iDonate-navy-accent gap-6 p-9">
            <CardHeader className="flex flex-row items-center justify-between p-0 m-0">
              <CardTitle className="text-2xl font-medium text-iDonate-navy-secondary">
              Location
              </CardTitle>

              <Button
                onClick={() => setIsEditing(true)}
                className="bg-iDonate-white-space border-2 hover:bg-iDonate-light-gray border-iDonate-navy-accent text-iDonate-navy-primary"
              >
                <SquarePen />
                Edit
              </Button>
            </CardHeader>

            <CardContent className="flex w-fle gap-9 p-0 m-0">
              <div className="flex flex-col space-y-3">
                <CardDescription className="text-lg text-iDonate-gray">Current Address</CardDescription>
                <CardDescription className="text-xl text-iDonate-navy-primary">Norodom Blvd, 41, Phnom Penh</CardDescription>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Edit Mode */}
        {isEditing && (
          <Card className="flex flex-col bg-iDonate-light-gray rounded-lg border-2 border-iDonate-navy-accent gap-6 p-9">
            <CardHeader className="flex flex-row items-center justify-between p-0 m-0">
              <CardTitle className="text-2xl font-medium text-iDonate-navy-secondary">
                Organization Information
              </CardTitle>

              <Button
                type="submit"
                className="bg-iDonate-white-space border-2 hover:bg-iDonate-light-gray border-iDonate-navy-accent text-iDonate-navy-primary"
              >
                Submit
              </Button>
            </CardHeader>

            <CardContent className="flex w-fle gap-9 p-0 m-0">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm text-iDonate-navy-secondary">Current Address</FormLabel>
                    <FormControl className="w-full">
                      <Input placeholder="Elizabeth Joe" {...field} />
                    </FormControl>
                    <FormMessage />
                    <FormDescription className="text-iDonate-gray text-sm">
                      This is your organization's address.
                    </FormDescription>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        )}
      </form>
    </Form>
  )
}
