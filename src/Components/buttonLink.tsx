import React from "react";
import { Link } from "react-router-dom";

interface PropType {
  to: string;
  color?: "primary" | "secondary" | "tertiary";
}

export default function ButtonLink({
  to,
  children,
  color,
}: React.PropsWithChildren<PropType>) {
  const style = color || "primary";
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
    <Link
      to={to}
      className={`${colorClass} border-2 border-black dark:border-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800`}
    >
      {children}
    </Link>
  );
}
