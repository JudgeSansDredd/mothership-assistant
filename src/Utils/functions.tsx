import { useEffect, useState } from "react";
import CharacterClass from "../Components/PageComponents/characterClass";
import StatClassSelection from "../Components/PageComponents/statClassSelection";
import StatsAndSaves from "../Components/PageComponents/statsAndSaves";
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
      newTransitionClasses += " -translate-x-full opacity-0 -z-10";
    } else if (right) {
      newTransitionClasses += " translate-x-full opacity-0 -z-10";
    }
    setTransitionClasses(newTransitionClasses);
  }, [currentPage, page]);

  return transitionClasses;
};

export const usePages = () => {
  const defaultPages = [
    {
      name: "statsAndSaves",
      component: <StatsAndSaves />,
    },
    {
      name: "characterClass",
      component: <CharacterClass />,
    },
    {
      name: "placeholderPage",
      component: (
        <div className="h-screen w-screen bg-red-700">Placeholder</div>
      ),
    },
  ];

  const [pages, setPages] = useState<
    {
      name: string;
      component: JSX.Element;
    }[]
  >(defaultPages);

  const selectedClass = useAppSelector(
    (state) => state.character.characterClass
  );

  useEffect(() => {
    if (selectedClass === "android" || selectedClass === "scientist") {
      const newPages = [...defaultPages];
      newPages.splice(2, 0, {
        name: `${selectedClass}StatSelection`,
        component: <StatClassSelection characterClass={selectedClass} />,
      });
      setPages(newPages);
    } else {
      setPages(defaultPages);
    }
  }, [selectedClass]);

  return pages;
};

export const useNavChecks = (page: number) => {
  const pages = usePages();
  const numPages = pages.length;
  const currentPage = useAppSelector((state) => state.navigation.currentPage);
  const character = useAppSelector((state) => state.character);

  const [canGoLeft, setCanGoLeft] = useState(false);
  const [canGoRight, setCanGoRight] = useState(false);

  // Check if we can go left
  useEffect(() => {
    setCanGoLeft(page > 0);
  }, [currentPage, character.characterClass, page]);

  // Check if we can go right
  useEffect(() => {
    setCanGoRight(page < numPages - 1);
  }, [currentPage, character.characterClass, page]);

  return { canGoLeft, canGoRight };
};
