import React from "react";
import { bgColors } from "../Utils/constants";

interface PropType extends React.HTMLProps<HTMLButtonElement> {
  type: "button" | "submit";
  color?: keyof typeof bgColors;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: React.PropsWithChildren<PropType>) {
  const { children, color, className, ...buttonProps } = props;

  const style = props.color || "primary";
  const colorClass = bgColors[style];

  return (
    <button
      className={`${colorClass} border-2 border-black dark:border-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none dark:focus:ring-blue-800 ${props.className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
