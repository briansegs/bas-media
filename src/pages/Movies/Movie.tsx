import { Card } from "@/components/ui/card";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { ImStarFull } from "react-icons/im";

import { Link } from "react-router";

const Movie = ({
  movie,
}: {
  movie: {
    title: string;
    id: number;
    poster_path?: string;
    vote_average: number;
  };
}) => {
  const { title, id, poster_path, vote_average } = movie;

  return (
    <div className="col-span-12 mx-auto p-2.5 sm:col-span-6 md:col-span-4 md:mx-0 lg:col-span-3 xl:col-span-2">
      <div className="flex w-full flex-col items-center">
        <Link to={`/movie/${id}`} className="flex w-full flex-col items-center">
          <Card className="overflow-hidden p-0 transition-transform hover:scale-[1.05]">
            <img
              alt={title}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : "https://www.fillmurry.com/200/300"
              }
            />
          </Card>

          <h5 className="mt-2 w-full overflow-hidden text-center text-lg text-ellipsis whitespace-nowrap md:text-base">
            {title}
          </h5>

          <Tooltip>
            <TooltipTrigger>
              <div className="relative mt-2 h-fit overflow-hidden">
                <div
                  className="bg-background absolute top-0 left-0 size-full transition-transform"
                  style={{
                    transform: `translateX(${(vote_average / 10) * 100 || 0}%) `,
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
              <p>{vote_average.toFixed(1)}</p>
            </TooltipContent>
          </Tooltip>
        </Link>
      </div>
    </div>
  );
};

export default Movie;
