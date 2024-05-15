import React from "react";
import CharacterClass from "../Components/PageComponents/characterClass";
import CharacterCreateNav from "../Components/PageComponents/characterCreateNav";
import StatsAndSaves from "../Components/PageComponents/statsAndSaves";
import MainLayout from "../Layouts/mainLayout";

export default function createCharacter() {
  return (
    <MainLayout title="Create">
      <div className="h-[calc(100vh-120px)] w-full overflow-y-scroll scroll-smooth flex justify-center relative">
        <StatsAndSaves />
        <CharacterClass />
      </div>
      <CharacterCreateNav />
    </MainLayout>
  );
}
