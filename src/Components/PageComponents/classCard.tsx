import { setCharacterClass } from "../../Store/Slices/characterSlice";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { bgColors } from "../../Utils/constants";
import { CharacterClassType } from "../../Utils/types";

interface PropType {
  characterClass: CharacterClassType;
}

export default function ClassCard(props: PropType) {
  const dispatch = useAppDispatch();
  const selectedClass = useAppSelector(
    (state) => state.character.characterClass
  );
  const selectionMade = selectedClass !== null;
  const selected = props.characterClass.name === selectedClass;

  const { characterClass } = props;

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    if (selected) {
      dispatch(setCharacterClass(null));
    } else {
      dispatch(setCharacterClass(characterClass.name));
    }
  };

  return (
    <div
      className={`${bgColors.secondary} ${
        selectionMade && !selected ? "opacity-50" : ""
      } w-full h-full p-6 border-2 border-black dark:border-white rounded-lg cursor-pointer overflow-hidden`}
      onClick={handleClick}
    >
      <div className="flex items-center space-x-2">
        <h5 className="text-2xl font-bold tracking-tight capitalize">
          {characterClass.name}
        </h5>
        {selected && <p className="italic text-sm">Selected</p>}
      </div>
      <p className={`${selectionMade && !selected ? "text-xs" : ""} mb-2`}>
        {characterClass.description}
      </p>
      {selected && (
        <ul className="mb-2">
          {characterClass.modifiers.map((mod, i) => {
            return <ul key={i}>{mod.description}</ul>;
          })}
        </ul>
      )}
      {selected && (
        <div className="mb-2">
          Trauma Response: {characterClass.traumaResponse}
        </div>
      )}
      {selected && (
        <div className="mb-2">Skills: {characterClass.skillDescription}</div>
      )}
    </div>
  );
}
