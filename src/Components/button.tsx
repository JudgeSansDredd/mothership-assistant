import React from "react";

interface PropType extends React.HTMLProps<HTMLButtonElement> {
  type: "button" | "submit";
  color?: "primary" | "secondary" | "tertiary";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: React.PropsWithChildren<PropType>) {
  const { children, color, className, ...buttonProps } = props;

  const style = props.color || "primary";
  let colorClass: string = "";
  if (style === "primary") {
    colorClass =
      "bg-black text-white hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white";
  } else if (style === "secondary") {
    colorClass =
      "text-black dark:text-white bg-gray-400 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700";
  } else if (style === "tertiary") {
    colorClass =
      "text-black bg-white hover:bg-gray-100 dark:text-white dark:bg-black dark:hover:bg-gray-900";
  }

  return (
    <button
      className={`${colorClass} border-2 border-black dark:border-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none dark:focus:ring-blue-800 ${props.className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
