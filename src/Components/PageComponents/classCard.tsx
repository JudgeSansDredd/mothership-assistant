import React from "react";
import { CharacterClass } from "../../Utils/types";

interface PropType {
  characterClass: CharacterClass;
}

export default function ClassCard(props: PropType) {
  const { characterClass } = props;
  return (
    <div className="block max-w-sm p-6 bg-white dark:bg-black border-2 border-black dark:border-white rounded-lg">
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
