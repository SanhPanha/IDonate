import { FileText, X } from "lucide-react"
import Image from "next/image"
import { Progress } from "../ui/progress"
import { Button } from "../ui/button"
import { formatBytes } from "@/lib/utils"  
import { FileCardProps, FilePreviewProps } from "@/difinitions/types/fileupload/FileUploadType"
  
export function isFileWithPreview(file: File): file is File & { preview: string } {
    return "preview" in file && typeof file.preview === "string"
  }

export function FilePreview({ file }: FilePreviewProps) {
    if (file.type.startsWith("image/")) {
      return (
        <Image
          src={file.preview}
          alt={file.name}
          width={48}
          height={48}
          loading="lazy"
          className="aspect-square shrink-0 rounded-md object-cover"
        />
      )
    }
  
    return (
      <FileText className="size-10 text-muted-foreground" aria-hidden="true" />
    )
  }

export function FileCard({ file, progress, onRemove }: FileCardProps) {
    return (
      <div className="relative flex items-center gap-2.5">
        <div className="flex items-center flex-1 gap-2.5 border-[1.5px] border-iDonate-navy-accent p-2 rounded-lg">
          {isFileWithPreview(file) ? <FilePreview file={file} /> : null}
          <div className="flex w-full flex-col gap-2">
            <div className="flex flex-col gap-px">
              <p className="line-clamp-1 text-sm font-medium text-foreground/80">
                {file.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatBytes(file.size)}
              </p>
            </div>
            {progress ? <Progress  value={progress} /> : null}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-7"
            onClick={onRemove}
          >
            <X className="size-4" aria-hidden="true" />
            <span className="sr-only">Remove file</span>
          </Button>
        </div>
      </div>
    )
}