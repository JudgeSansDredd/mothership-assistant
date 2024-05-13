import React from "react";
import MainLayout from "../../Layouts/mainLayout";

export default function CharacterClass() {
  return (
    <MainLayout title="Create">
      <h1 className="text-2xl">Choose a Class</h1>
      <div className="grid gap-6 mb-6 md:grid-cols-4">
        <div className="border-2 border-white rounded-lg p-2 flex flex-col">
          <div className="text-lg">Marine</div>
        </div>
      </div>
    </MainLayout>
  );
}
