import React from "react";
import { Link } from "react-router-dom";

interface PropType {
  to: string;
}

export default function ButtonLink({
  to,
  children,
}: React.PropsWithChildren<PropType>) {
  return (
    <Link
      to={to}
      className="text-white dark:text-black hover:text-black dark:hover:text-white bg-black dark:bg-white hover:bg-white dark:hover:bg-black border-2 border-black dark:border-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800"
    >
      {children}
    </Link>
  );
}
