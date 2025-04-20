import { searchMovie } from "@/currentGenreOrCategory";
import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(searchMovie(query));
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <Input
        className="placeholder:text-muted dark:placeholder:text-muted-foreground"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <Button type="submit" className="cursor-pointer" size="icon">
        <SearchIcon />
      </Button>
    </form>
  );
};

export default Search;
