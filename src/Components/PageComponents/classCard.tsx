import { setSelectedClass } from "../../Store/Slices/navigationSlice";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { bgColors } from "../../Utils/constants";
import { CharacterClass } from "../../Utils/types";

interface PropType {
  characterClass: CharacterClass;
}

export default function ClassCard(props: PropType) {
  const dispatch = useAppDispatch();
  const selectedClass = useAppSelector(
    (state) => state.navigation.selectedClass
  );
  const selectionMade = selectedClass !== null;
  const selected = props.characterClass.name === selectedClass;

  const { characterClass } = props;

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    if (selected) {
      dispatch(setSelectedClass(null));
    } else {
      dispatch(setSelectedClass(characterClass.name));
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
        {selected && <p className="italic text-sm text-yellow-500">Selected</p>}
      </div>
      <p className={selectionMade && !selected ? "text-xs" : ""}>
        {characterClass.description}
      </p>
      {selected && (
        <ul className="mt-2 font-bold text-md">
          {characterClass.pretty_modifiers.map((mod, i) => {
            return <ul key={i}>{mod}</ul>;
          })}
        </ul>
      )}
    </div>
  );
}
