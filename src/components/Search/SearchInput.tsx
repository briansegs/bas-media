import * as React from "react";

import { cn } from "@/lib/utils";

function SearchInput({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      data-slot="input"
      className={cn(
        "placeholder:text-muted dark:placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm",

        className,
      )}
      {...props}
    />
  );
}

export { SearchInput };
