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
    <div className={`fizzbang absolute inset-0 ${transitionClasses}`}>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mb-4">Choose a Class</h1>
        <div className="grid gap-6 md:grid-cols-2">{cards}</div>
      </div>
    </div>
  );
}
