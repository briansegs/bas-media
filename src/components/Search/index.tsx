import { searchMovie } from "@/currentGenreOrCategory";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { SearchInput } from "./SearchInput";

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(searchMovie(query));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "border-input flex items-center rounded-md border",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
      )}
    >
      <SearchInput
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <Button
        type="submit"
        className="cursor-pointer rounded-l-none border-l-0"
        size="icon"
      >
        <SearchIcon className="size-5" />
      </Button>
    </form>
  );
};

export default Search;
