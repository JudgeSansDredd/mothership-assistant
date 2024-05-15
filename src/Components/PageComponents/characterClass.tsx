import React from "react";
import { useTransitionClasses } from "../../Utils/functions";

export default function CharacterClass() {
  const PAGE = 1;
  const transitionClasses = useTransitionClasses(PAGE);

  return (
    <div
      className={`flex flex-col items-center absolute inset-0 ${transitionClasses} bg-black`}
    >
      <div>
        <h2>Character Class</h2>
        <p>Choose a class for your character.</p>
      </div>
    </div>
  );
}
