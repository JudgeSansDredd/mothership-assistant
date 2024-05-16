import { useEffect, useState } from "react";
import { useAppSelector } from "../Store/hooks";

export const rollD10 = () => Math.floor(Math.random() * 10 + 1);

export const useTransitionClasses = (page: number) => {
  const currentPage = useAppSelector((state) => state.navigation.currentPage);

  const [transitionClasses, setTransitionClasses] = useState(
    "transition duration-300"
  );
  useEffect(() => {
    const left = currentPage > page;
    const right = currentPage < page;
    let newTransitionClasses = "transition-all duration-300";
    if (left) {
      newTransitionClasses += " -translate-x-full";
    } else if (right) {
      newTransitionClasses += " translate-x-full";
    }
    setTransitionClasses(newTransitionClasses);
  }, [currentPage, page]);

  return transitionClasses;
};
