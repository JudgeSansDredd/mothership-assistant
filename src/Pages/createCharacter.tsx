import React, { useState } from "react";
import CharacterClass from "../Components/PageComponents/characterClass";
import StatsAndSaves from "../Components/PageComponents/statsAndSaves";
import Button from "../Components/button";
import MainLayout from "../Layouts/mainLayout";
import { chevronUp } from "../Utils/icons";

export default function createCharacter() {
  const [characterClassVisible, setCharacterClassVisible] =
    useState<boolean>(false);

  const toggleCharacterClassVisible: React.MouseEventHandler<
    HTMLButtonElement
  > = (e) => {
    e.preventDefault();
    setCharacterClassVisible(!characterClassVisible);
  };

  return (
    <MainLayout title="Create">
      <h1 className="text-2xl">Create a Character</h1>
      <StatsAndSaves />
      <Button type="button" onClick={toggleCharacterClassVisible}>
        <div className="flex space-x-2">
          <div>Done? Pick a class.</div>
          <div
            className={`transition duration-300 ${
              characterClassVisible ? "rotate-180" : ""
            }`}
          >
            {chevronUp}
          </div>
        </div>
      </Button>
      <CharacterClass visible={characterClassVisible} />
    </MainLayout>
  );
}
