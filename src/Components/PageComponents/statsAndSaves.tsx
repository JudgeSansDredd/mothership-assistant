import React from "react";
import {
  setName,
  setNotes,
  setPronouns,
  setSaves,
  setStats,
} from "../../Store/Slices/characterSlice";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { rollD10 } from "../../Utils/functions";
import { SaveArrayType, StatArrayType } from "../../Utils/types";
import Button from "../button";
import StatEditable from "../statEditable";
import TextInput from "../textInput";

export default function StatsAndSaves() {
  const character = useAppSelector((state) => state.character);
  const dispatch = useAppDispatch();

  const onStatRandomizeAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newValues: StatArrayType = {
      strength: rollD10() + rollD10() + 25,
      speed: rollD10() + rollD10() + 25,
      intellect: rollD10() + rollD10() + 25,
      combat: rollD10() + rollD10() + 25,
    };
    dispatch(setStats(newValues));
  };

  const onSaveRandomizeAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newValues: SaveArrayType = {
      sanity: rollD10() + rollD10() + 10,
      fear: rollD10() + rollD10() + 10,
      body: rollD10() + rollD10() + 10,
    };
    dispatch(setSaves(newValues));
  };

  const onNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    dispatch(setName(e.target.value));
  };

  const onPronounsChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    dispatch(setPronouns(e.target.value));
  };

  const onNotesChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    dispatch(setNotes(e.target.value));
  };

  return (
    <div className={`flex flex-col items-center w-full h-full`}>
      <h1 className="text-2xl">Create a Character</h1>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="character_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Character name
          </label>
          <TextInput
            id="character_name"
            placeholder="Ellen Ripley"
            value={character.name || ""}
            onChange={onNameChange}
          />
        </div>
        <div>
          <label
            htmlFor="pronouns"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Pronouns
          </label>
          <TextInput
            id="pronouns"
            placeholder="she/her"
            onChange={onPronounsChange}
            value={character.pronouns || ""}
          />
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
          onChange={onNotesChange}
          value={character.notes || ""}
        />
      </div>
      <div className="text-2xl w-full text-center">Stats</div>
      <div className="text-sm w-full text-center mb-2 italic">
        Roll 2d10 + 25
      </div>
      <div className="mb-6 w-max flex flex-col justify-center">
        <div className="grid gap-6 mb-6 md:grid-cols-4">
          <StatEditable type="stat" name="strength" />
          <StatEditable type="stat" name="speed" />
          <StatEditable type="stat" name="intellect" />
          <StatEditable type="stat" name="combat" />
        </div>
        <Button
          type="button"
          color="primary"
          onClick={onStatRandomizeAll}
          className="px-12"
        >
          Roll
        </Button>
      </div>
      <div className="text-2xl w-full text-center">Saves</div>
      <div className="text-sm w-full text-center mb-2 italic">
        Roll 2d10 + 10
      </div>
      <div className="mb-6 w-max flex flex-col justify-center">
        <div className="grid gap-6 mb-6 md:grid-cols-3">
          <StatEditable type="save" name="sanity" />
          <StatEditable type="save" name="fear" />
          <StatEditable type="save" name="body" />
        </div>
        <Button
          type="button"
          color="primary"
          onClick={onSaveRandomizeAll}
          className="px-12"
        >
          Roll
        </Button>
      </div>
    </div>
  );
}
