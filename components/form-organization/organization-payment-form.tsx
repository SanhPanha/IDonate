"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useState } from "react";
import { SquarePen } from "lucide-react";
import { FileUploader } from "../fileupload/file-uploader";
import { UploadedFilesCard } from "../fileupload/uploaded-files-card";
import { UploadedFile } from "@/difinitions/types/fileupload";
import { organizationPaymentSchema } from "../schema/schema";


export function OrganizationPaymentForm() {
  const [isEditing, setIsEditing] = useState(false);

  // File upload state
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [progresses, setProgresses] = useState<Record<string, number>>({});
  const isUploading = Object.values(progresses).some(
    (progress) => progress < 100
  );

  const form = useForm<z.infer<typeof organizationPaymentSchema>>({
    resolver: zodResolver(organizationPaymentSchema),
    defaultValues: { image: null },
  });

  const onUpload = async (files: File[]) => {
    const newProgresses: Record<string, number> = {};
    const newUploadedFiles: UploadedFile[] = [];

    files.forEach((file) => {
      const key = file.name; // Use file name as a unique identifier
      newProgresses[key] = 0;
    });

    setProgresses((prev) => ({ ...prev, ...newProgresses }));
    setUploadedFiles((prev) => [...prev, ...newUploadedFiles]);

    // Simulate upload progress
    files.forEach((file) => {
      const key = file.name;
      let progress = 0;
      const interval = setInterval(() => {
        progress += 20;
        setProgresses((prev) => ({
          ...prev,
          [key]: Math.min(progress, 100),
        }));
        if (progress >= 100) clearInterval(interval);
      }, 500);
    });
  };

  function onSubmit(values: z.infer<typeof organizationPaymentSchema>) {
    console.log(values);
    setIsEditing(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {!isEditing && (
          <Card className="flex flex-col rounded-lg border-2 border-iDonate-navy-accent gap-6 p-9">
            <CardHeader className="flex flex-row items-center justify-between p-0 m-0">
              <CardTitle className="text-2xl font-medium text-iDonate-navy-secondary">
              Payment Method
              </CardTitle>

              <Button
                onClick={() => setIsEditing(true)}
                className="bg-iDonate-white-space border-2 hover:bg-iDonate-light-gray border-iDonate-navy-accent text-iDonate-navy-primary"
              >
                <SquarePen />
                Edit
              </Button>
            </CardHeader>
          </Card>
        )}

        {isEditing && (
          <Card className="flex flex-col bg-iDonate-light-gray rounded-lg border-2 border-iDonate-navy-accent gap-6 p-9">
            <CardHeader className="flex flex-row items-center justify-between p-0 m-0">
              <CardTitle className="text-2xl font-medium text-iDonate-navy-secondary">
                Payment Method
              </CardTitle>

              <Button
                type="submit"
                // disabled={loading}
                disabled={isUploading }
                className= "w-fit bg-iDonate-white-space border-2 hover:bg-iDonate-light-gray border-iDonate-navy-accent text-iDonate-navy-primary"
              >
                Submit
              </Button>
            </CardHeader>

            <CardContent className="flex flex-col gap-9 p-0 m-0">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-iDonate-navy-secondary">
                      Upload Documents
                    </FormLabel>
                    <FormControl>
                      <FileUploader
                        onValueChange={field.onChange}
                        maxFileCount={4}
                        maxSize={4 * 1024 * 1024}
                        progresses={progresses}
                        onUpload={onUpload}
                        disabled={isUploading}
                      />
                    </FormControl>
                    <FormMessage />
                    <FormDescription className="text-iDonate-gray text-sm">
                      Upload up to 4 files (Max 4MB each).
                    </FormDescription>
                  </FormItem>
                )}
              />
              {uploadedFiles.length > 0 && (
                <UploadedFilesCard uploadedFiles={uploadedFiles} />
              )}
            </CardContent>
          </Card>
        )}
      </form>
    </Form>
  );
}
