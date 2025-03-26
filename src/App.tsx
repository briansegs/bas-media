import clsx from "clsx";

const bool = true;

const App = () => {
  return (
    <div
      className={clsx(
        "flex w-full justify-center", // Layout
        "mt-8", // Spacing
        "text-2xl text-amber-700 underline", // Typography & colors
        bool && "w-full justify-center",
      )}
    >
      Bas - Media
    </div>
  );
};

export default App;
