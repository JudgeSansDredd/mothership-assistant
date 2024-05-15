import React from "react";
import { characterClasses } from "../../Utils/constants";
import { useTransitionClasses } from "../../Utils/functions";
import ClassCard from "./classCard";

export default function CharacterClass() {
  const PAGE = 1;
  const transitionClasses = useTransitionClasses(PAGE);

  const cards = characterClasses.map((characterClass) => {
    return (
      <ClassCard key={characterClass.name} characterClass={characterClass} />
    );
  });

  return (
    <div
      className={`flex flex-col items-center absolute inset-0 ${transitionClasses} bg-black`}
    >
      {cards}
    </div>
  );
}
