import React from "react";

interface PropType extends React.HTMLProps<HTMLButtonElement> {
  type: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: React.PropsWithChildren<PropType>) {
  const { children, color, className, ...buttonProps } = props;

  return (
    <button
      className={`dark:text-white text-black dark:hover:text-black hover:text-white dark:bg-black bg-white dark:hover:bg-white hover:bg-black border-2 border-black dark:border-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none dark:focus:ring-blue-800 ${props.className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
