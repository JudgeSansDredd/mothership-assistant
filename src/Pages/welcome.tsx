import React from "react";
import ButtonLink from "../Components/buttonLink";
import MainLayout from "../Layouts/mainLayout";

export default function Welcome() {
  return (
    <MainLayout title="Welcome">
      <div className=" p-4 flex flex-col items-center">
        <h1 className="text-2xl mb-6">Mothership Assistant</h1>
        <ButtonLink to="/create/statsandsaves">Create a Character</ButtonLink>
      </div>
    </MainLayout>
  );
}
