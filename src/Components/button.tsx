import React from "react";

interface PropType extends React.HTMLProps<HTMLButtonElement> {
  type: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: React.PropsWithChildren<PropType>) {
  const { children, color, className, ...buttonProps } = props;

  return (
    <button
      className={`text-white dark:text-black hover:text-black dark:hover:text-white bg-black dark:bg-white hover:bg-white dark:hover:bg-black border-2 border-black dark:border-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none dark:focus:ring-blue-800 ${props.className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
