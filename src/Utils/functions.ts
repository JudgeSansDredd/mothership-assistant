import { useEffect, useState } from "react";
import { useAppSelector } from "../Store/hooks";

export const rollD10 = () => Math.floor(Math.random() * 10 + 1);

export const useTransitionClasses = (page: number) => {
  const currentPage = useAppSelector((state) => state.navigation.currentPage);
  const defaultTransitionClasses = "transition-all duration-300 ease-in-out";

  const [transitionClasses, setTransitionClasses] = useState(
    defaultTransitionClasses
  );
  useEffect(() => {
    const left = currentPage > page;
    const right = currentPage < page;
    let newTransitionClasses = defaultTransitionClasses;
    if (left) {
      newTransitionClasses += " -translate-x-full opacity-0";
    } else if (right) {
      newTransitionClasses += " translate-x-full opacity-0";
    }
    setTransitionClasses(newTransitionClasses);
  }, [currentPage, page]);

  return transitionClasses;
};
