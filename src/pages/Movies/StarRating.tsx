import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { ImStarFull } from "react-icons/im";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="relative mt-2 h-fit overflow-hidden">
          <div
            className="bg-background absolute top-0 left-0 size-full transition-transform"
            style={{
              transform: `translateX(${(rating / 10) * 100 || 0}%) `,
            }}
          />

          <div className="flex justify-center text-yellow-300">
            {[1, 2, 3, 4, 5].map((item) => (
              <ImStarFull key={item} />
            ))}
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent
        side="right"
        sideOffset={2}
        className="mt-1 rounded-md bg-sky-500 px-3 py-1 text-slate-50 dark:bg-neutral-700"
      >
        <p>{rating.toFixed(1)}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default StarRating;
