import React from "react";
import { useTransitionClasses } from "../../Utils/functions";

interface PropType {
  pageNumber: number;
}

export default function PageControlWrapper({
  pageNumber,
  children,
}: React.PropsWithChildren<PropType>) {
  const transitionClasses = useTransitionClasses(pageNumber);

  return (
    <div
      className={`absolute inset-0 bg-white dark:bg-black ${transitionClasses}`}
    >
      {children}
    </div>
  );
}
