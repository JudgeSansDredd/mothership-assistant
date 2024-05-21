import { setStatModifierChosen } from "../../Store/Slices/characterSlice";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { StatType } from "../../Utils/types";

interface PropType {
  characterClass: "android" | "scientist";
}

export default function StatClassSelection(props: PropType) {
  const dispatch = useAppDispatch();
  const character = useAppSelector((state) => state.character);
  const modifier = props.characterClass === "android" ? -10 : 5;

  const statClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const stat = e.currentTarget.dataset.stat as StatType;
    if (stat === character.statModifierChosen) {
      dispatch(setStatModifierChosen(null));
    } else {
      dispatch(setStatModifierChosen(stat));
    }
  };

  const buttons = (
    ["strength", "speed", "intellect", "combat"] as StatType[]
  ).map((stat) => {
    return (
      <div
        className="mb-2 text-black dark:text-white bg-gray-400 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 w-full flex justify-between border-2 border-black dark:border-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none dark:focus:ring-blue-800 disabled:opacity-50 cursor-pointer"
        data-stat={stat}
        onClick={statClick}
        key={stat}
      >
        <div className="capitalize">{stat}:</div>
        {stat === character.statModifierChosen ? (
          <div>{`${character.stats[stat]} ${
            modifier > 0 ? "+" : ""
          }${modifier} = ${(character.stats[stat] ?? 0) + modifier}`}</div>
        ) : (
          <div>{character.stats[stat]}</div>
        )}
      </div>
    );
  });

  return (
    <div className="h-full w-full flex justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mb-4">Choose Stats</h1>
        {props.characterClass === "android" && (
          <>
            <h1 className="text-2xl mb-4">Choose a stat to receive -10</h1>
          </>
        )}
        {props.characterClass === "scientist" && (
          <h1 className="text-2xl mb-4">Choose a stat to receive +5</h1>
        )}
        {buttons}
      </div>
    </div>
  );
}
