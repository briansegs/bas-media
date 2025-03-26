import clsx from "clsx";

const bool = true;

const App = () => {
  return (
    <div
      className={clsx(
        "mt-8 flex text-2xl text-amber-700 underline",
        bool && "w-full justify-center",
      )}
    >
      Bas - Media
    </div>
  );
};

export default App;
