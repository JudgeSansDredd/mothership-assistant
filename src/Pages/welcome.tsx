import React from "react";
import ButtonLink from "../Components/buttonLink";
import MainLayout from "../Layouts/mainLayout";

export default function Welcome() {
  return (
    <MainLayout title="Welcome">
      <div className="border-white border-2 rounded-lg mt-8 p-4 flex flex-col items-center">
        <h1 className="text-2xl">Mothership Assistant</h1>
        <ButtonLink to="/create">Create a Character</ButtonLink>
      </div>
    </MainLayout>
  );
}
