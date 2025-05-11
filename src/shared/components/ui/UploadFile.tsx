import { cn } from "@/shared/lib/utils";
import { Upload } from "lucide-react";
import { Input } from "./Input";

interface UploadFileProps extends React.ComponentProps<typeof Input> {
  className?: string;
}

export function UploadFile({ className, ...props }: UploadFileProps) {
  return (
    <>
      <label className="flex items-center gap-4" htmlFor="upload-questions">
        <div
          className={cn(
            "cursor-pointer flex bg-card rounded-md bg w-10 items-center justify-center p-2",
            className
          )}
        >
          <Upload />
        </div>
        Привет, Эмилия! Загрузи вопросы :)
      </label>
      <Input id="upload-questions" className="hidden" type="file" {...props} />
    </>
  );
}
