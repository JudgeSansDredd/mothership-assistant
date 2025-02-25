import React from "react";
import { Link } from "react-router-dom";
import { bgColors } from "../Utils/constants";

interface PropType {
  to: string;
  color?: keyof typeof bgColors;
}

export default function ButtonLink({
  to,
  children,
  color,
}: React.PropsWithChildren<PropType>) {
  const style = color || "primary";
  const colorClass = bgColors[style];

  return (
    <Link
      to={to}
      className={`${colorClass} border-2 border-black dark:border-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800`}
    >
      {children}
    </Link>
  );
}
