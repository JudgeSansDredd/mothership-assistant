import { useAppSelector } from "../../Store/hooks";
import { characterClasses } from "../../Utils/constants";
import ClassCard from "./classCard";

export default function CharacterClass() {
  const selectedClass = useAppSelector(
    (state) => state.character.characterClass,
  );
  const selectionMade = selectedClass !== null;

  const cards = characterClasses.map((characterClass) => {
    const selected = characterClass.name === selectedClass;
    let classes: string = "";
    if (selected) {
      classes += "w-full h-full md:row-span-6 md:col-span-4 order-first";
    } else if (selectionMade) {
      classes += "w-full h-full md:row-span-2 md:col-span-2";
    } else {
      classes += "w-full h-full md:row-span-3 md:col-span-3";
    }
    return (
      <div key={characterClass.name} className={classes}>
        <ClassCard characterClass={characterClass} />
      </div>
    );
  });

  return (
    <div className={`flex justify-center w-full h-full`}>
      <div className="flex flex-col items-center pb-6 max-w-2xl h-full">
        <h1 className="text-2xl mb-4">Choose a Class</h1>
        <div className="grid gap-2 md:gap-4 md:grid-cols-6 md:grid-rows-6 flex-grow min-h-0">
          {cards}
        </div>
      </div>
    </div>
  );
}
