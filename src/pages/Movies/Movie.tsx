import { Card } from "@/components/ui/card";
import { Link } from "react-router";
import StarRating from "./StarRating";

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

          <StarRating rating={vote_average} />
        </Link>
      </div>
    </div>
  );
};

export default Movie;
