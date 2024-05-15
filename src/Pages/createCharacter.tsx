import React from "react";
import CharacterClass from "../Components/PageComponents/characterClass";
import CharacterCreateNav from "../Components/PageComponents/characterCreateNav";
import StatsAndSaves from "../Components/PageComponents/statsAndSaves";
import MainLayout from "../Layouts/mainLayout";

export default function createCharacter() {
  return (
    <MainLayout title="Create">
      <div className="overflow-hidden flex">
        <StatsAndSaves />
        <CharacterClass />
      </div>
      <CharacterCreateNav />
    </MainLayout>
  );
}
