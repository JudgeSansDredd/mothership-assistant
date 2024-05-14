import React from "react";
import { setSaves, setStats } from "../../Store/Slices/newCharacterSlice";
import { useAppDispatch } from "../../Store/hooks";
import { rollD10 } from "../../Utils/functions";
import Button from "../button";
import StatEditable from "../statEditable";
import TextInput from "../textInput";

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
    <>
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
      <div className="text-2xl w-full text-center">Stats</div>
      <div className="text-sm w-full text-center mb-2 italic">
        Roll 2d10 + 25
      </div>
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
      <div className="text-2xl w-full text-center">Saves</div>
      <div className="text-sm w-full text-center mb-2 italic">
        Roll 2d10 + 10
      </div>
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
    </>
  );
}
