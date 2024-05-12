import React, { useEffect } from "react";
import Button from "../Components/button";
import StatEditable from "../Components/statEditable";
import TextInput from "../Components/textInput";
import MainLayout from "../Layouts/mainLayout";

export default function Create() {
  const characterNameRef = React.useRef<HTMLInputElement>(null);
  const pronounsRef = React.useRef<HTMLInputElement>(null);
  const notesRef = React.useRef<HTMLInputElement>(null);
  const strengthRef = React.useRef<HTMLInputElement>(null);
  const speedRef = React.useRef<HTMLInputElement>(null);
  const intellectRef = React.useRef<HTMLInputElement>(null);
  const combatRef = React.useRef<HTMLInputElement>(null);
  const sanityRef = React.useRef<HTMLInputElement>(null);
  const fearRef = React.useRef<HTMLInputElement>(null);
  const bodyRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (characterNameRef.current) {
      console.log(characterNameRef.current.value);
    }
  }, [characterNameRef.current]);

  const rollStat = (numToAdd: number) => {
    return (
      Math.floor(Math.random() * 10 + 1) +
      Math.floor(Math.random() * 10 + 1) +
      numToAdd
    );
  };

  const onStatRandomize = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const stat = e.currentTarget.dataset.stat;
    const rollResult = rollStat(25);
    if (stat === "Strength" && strengthRef.current) {
      strengthRef.current.value = rollResult.toString();
    } else if (stat === "Speed" && speedRef.current) {
      speedRef.current.value = rollResult.toString();
    } else if (stat === "Intellect" && intellectRef.current) {
      intellectRef.current.value = rollResult.toString();
    } else if (stat === "Combat" && combatRef.current) {
      combatRef.current.value = rollResult.toString();
    }
  };

  const onSaveRandomize = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const save = e.currentTarget.dataset.save;
    const rollResult = rollStat(10);
    if (save === "Sanity" && sanityRef.current) {
      sanityRef.current.value = rollResult.toString();
    } else if (save === "Fear" && fearRef.current) {
      fearRef.current.value = rollResult.toString();
    } else if (save === "Body" && bodyRef.current) {
      bodyRef.current.value = rollResult.toString();
    }
  };

  const onStatRandomizeAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (strengthRef.current) {
      const rollResult = rollStat(25);
      strengthRef.current.value = rollResult.toString();
    }
    if (speedRef.current) {
      const rollResult = rollStat(25);
      speedRef.current.value = rollResult.toString();
    }
    if (intellectRef.current) {
      const rollResult = rollStat(25);
      intellectRef.current.value = rollResult.toString();
    }
    if (combatRef.current) {
      const rollResult = rollStat(25);
      combatRef.current.value = rollResult.toString();
    }
  };

  const onSaveRandomizeAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (sanityRef.current) {
      const rollResult = rollStat(10);
      sanityRef.current.value = rollResult.toString();
    }
    if (fearRef.current) {
      const rollResult = rollStat(10);
      fearRef.current.value = rollResult.toString();
    }
    if (bodyRef.current) {
      const rollResult = rollStat(10);
      bodyRef.current.value = rollResult.toString();
    }
  };

  return (
    <MainLayout title="Create">
      <div className="border-white border-2 rounded-lg p-4 flex flex-col items-center">
        <h1 className="text-2xl">Create a Character</h1>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="character_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Character name
              </label>
              <TextInput
                ref={characterNameRef}
                id="character_name"
                placeholder="Ellen Ripley"
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
                ref={pronounsRef}
                id="pronouns"
                placeholder="she/her"
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
              ref={notesRef}
              id="notes"
              placeholder="32 years old, loves cats and hates coffee"
            />
          </div>
          <div className="text-2xl w-full text-center mb-2">Stats</div>
          <div className="grid gap-6 mb-6 md:grid-cols-4">
            <StatEditable ref={strengthRef} name="Strength" />
            <StatEditable ref={speedRef} name="Speed" />
            <StatEditable ref={intellectRef} name="Intellect" />
            <StatEditable ref={combatRef} name="Combat" />
            <Button
              type="button"
              data-stat="Strength"
              onClick={onStatRandomize}
            >
              Roll
            </Button>
            <Button type="button" data-stat="Speed" onClick={onStatRandomize}>
              Roll
            </Button>
            <Button
              type="button"
              data-stat="Intellect"
              onClick={onStatRandomize}
            >
              Roll
            </Button>
            <Button type="button" data-stat="Combat" onClick={onStatRandomize}>
              Roll
            </Button>
          </div>
          <div className="mb-6 w-full">
            <Button
              type="button"
              onClick={onStatRandomizeAll}
              className="w-full"
            >
              Roll All
            </Button>
          </div>
          <div className="text-2xl w-full text-center mb-2">Saves</div>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <StatEditable ref={sanityRef} name="Sanity" />
            <StatEditable ref={fearRef} name="Fear" />
            <StatEditable ref={bodyRef} name="Body" />
            <Button type="button" data-save="Sanity" onClick={onSaveRandomize}>
              Roll
            </Button>
            <Button type="button" data-save="Fear" onClick={onSaveRandomize}>
              Roll
            </Button>
            <Button type="button" data-save="Body" onClick={onSaveRandomize}>
              Roll
            </Button>
          </div>
          <div className="mb-6 w-full">
            <Button
              type="button"
              onClick={onSaveRandomizeAll}
              className="w-full"
            >
              Roll All
            </Button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
