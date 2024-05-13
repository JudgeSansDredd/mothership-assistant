import React from "react";
import Button from "../../Components/button";
import ButtonLink from "../../Components/buttonLink";
import StatEditable from "../../Components/statEditable";
import TextInput from "../../Components/textInput";
import MainLayout from "../../Layouts/mainLayout";
import { rollD10 } from "../../Utils/functions";
import { useAppDispatch } from "../../store/hooks";
import { setSaves, setStats } from "../../store/slices/newCharacterSlice";

export default function StatsAndSaves() {
  const dispatch = useAppDispatch();

  const onStatRandomizeAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newValues = {
      strength: rollD10() + rollD10() + 25,
      speed: rollD10() + rollD10() + 25,
      intellect: rollD10() + rollD10() + 25,
      combat: rollD10() + rollD10() + 25,
    };
    dispatch(setStats(newValues));
  };

  const onSaveRandomizeAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newValues = {
      sanity: rollD10() + rollD10() + 10,
      fear: rollD10() + rollD10() + 10,
      body: rollD10() + rollD10() + 10,
    };
    dispatch(setSaves(newValues));
  };

  return (
    <MainLayout title="Create">
      <h1 className="text-2xl">Create a Character</h1>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="character_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Character name
          </label>
          <TextInput id="character_name" placeholder="Ellen Ripley" />
        </div>
        <div>
          <label
            htmlFor="pronouns"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Pronouns
          </label>
          <TextInput id="pronouns" placeholder="she/her" />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="notes"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Personal Notes
        </label>
        <TextInput
          id="notes"
          placeholder="32 years old, loves cats and hates coffee"
        />
      </div>
      <div className="text-2xl w-full text-center mb-2">Stats</div>
      <div className="grid gap-6 mb-6 md:grid-cols-4">
        <StatEditable type="stat" name="strength" />
        <StatEditable type="stat" name="speed" />
        <StatEditable type="stat" name="intellect" />
        <StatEditable type="stat" name="combat" />
      </div>
      <div className="mb-6 w-full">
        <Button type="button" onClick={onStatRandomizeAll} className="w-full">
          Roll All
        </Button>
      </div>
      <div className="text-2xl w-full text-center mb-2">Saves</div>
      <div className="grid gap-6 mb-6 md:grid-cols-3">
        <StatEditable type="save" name="sanity" />
        <StatEditable type="save" name="fear" />
        <StatEditable type="save" name="body" />
      </div>
      <div className="mb-6 w-full">
        <Button type="button" onClick={onSaveRandomizeAll} className="w-full">
          Roll All
        </Button>
      </div>
      <ButtonLink to="/create/characterclass">Next</ButtonLink>
    </MainLayout>
  );
}
