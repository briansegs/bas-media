import clsx from "clsx";
import React, { useState } from "react";

const bool = true;

const App: React.FC = () => {
  const [toggleMsg, setToggleMsg] = useState(false);

  return (
    <div
      className={clsx(
        "flex", // Layout
        "mt-8", // Spacing
        bool && "w-full flex-col items-center gap-8",
      )}
    >
      <button
        className="cursor-pointer rounded-lg border-2 border-transparent px-4 py-2 text-2xl font-bold text-sky-400 hover:border-sky-300 hover:text-teal-500"
        onClick={() => setToggleMsg((prev) => !prev)}
      >
        Bas - Media
      </button>

      {toggleMsg && (
        <div className="bg-gradient-to-r from-teal-500 to-sky-500 bg-clip-text text-2xl text-transparent">
          Welcome to my site!
        </div>
      )}
    </div>
  );
};

export default App;
