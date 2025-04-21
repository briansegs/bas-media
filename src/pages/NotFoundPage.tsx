import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex size-full items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <h1
          className={cn(
            "text-6xl font-bold text-blue-400",
            "dark:text-red-400",
          )}
        >
          404
        </h1>
        <h2 className="text-5xl">Page Not Found</h2>
        <Link to="/" className="mt-4">
          <Button variant="outline" className="cursor-pointer">
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
