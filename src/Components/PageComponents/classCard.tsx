import React from "react";
import { CharacterClass } from "../../Utils/types";

interface PropType {
  characterClass: CharacterClass;
}

export default function ClassCard(props: PropType) {
  const { characterClass } = props;
  let colorClass: string = "";

  return (
    <div className="bg-gray-400 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 max-w-sm p-6 border-2 border-black dark:border-white rounded-lg cursor-pointer">
      <h5 className="text-2xl font-bold tracking-tight">
        {characterClass.name}
      </h5>
      <p className="font-mono">{characterClass.description}</p>
      <ul className="">
        <li>Foo</li>
        <li>bar</li>
      </ul>
    </div>
  );
}
