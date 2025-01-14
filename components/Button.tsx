import clsx from "clsx";

interface Properties {
  label?: string | React.ReactNode;
  onClick?: () => void;
  color?: "black" | "white";
}

const blackStyling =
  "bg-black border-black text-white hover:bg-white hover:text-black";

const whiteStyling =
  "bg-white border-white text-black hover:border-black hover:bg-black hover:text-white";

function Button({ label, onClick, color = "black" }: Properties) {
  return (
    <button
      className={clsx(
        "transition border-2 h-10 py-1 px-5 text-lg rounded-3xl",
        color === "black" ? blackStyling : whiteStyling
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export { Button };
