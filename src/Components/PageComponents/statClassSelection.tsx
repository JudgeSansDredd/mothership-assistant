import { setStatModifierChosen } from "../../Store/Slices/characterSlice";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { statNames } from "../../Utils/constants";
import { useGetStats } from "../../Utils/functions";
import { StatType } from "../../Utils/types";
import StatStatic from "../statStatic";

interface PropType {
  characterClass: "android" | "scientist";
}

export default function StatClassSelection(props: PropType) {
  const dispatch = useAppDispatch();
  const stats = useGetStats();
  const statModifierChosen = useAppSelector(
    (state) => state.character.statModifierChosen
  );

  const statClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const stat = e.currentTarget.dataset.stat as StatType;
    if (stat === statModifierChosen) {
      dispatch(setStatModifierChosen(null));
    } else {
      dispatch(setStatModifierChosen(stat));
    }
  };

  const buttons = statNames.map((stat) => {
    return (
      <button
        className="capitalize text-lg mb-2 text-black dark:text-white bg-gray-400 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 w-full flex items-center justify-between border-2 border-black dark:border-white focus:ring-4 font-medium rounded-lg px-5 py-2.5 focus:outline-none dark:focus:ring-blue-800 disabled:opacity-50 cursor-pointer"
        data-stat={stat}
        onClick={statClick}
        key={stat}
      >
        <span>{stat}</span>
        <span className="italic text-sm">
          {stat === statModifierChosen ? "selected" : ""}
        </span>
      </button>
    );
  });

  return (
    <div className="h-full w-full flex justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mb-4">Your Stats</h1>
        <div className="grid gap-6 mb-6 md:grid-cols-4">
          <StatStatic value={stats.strength.value} name="strength" />
          <StatStatic value={stats.speed.value} name="speed" />
          <StatStatic value={stats.intellect.value} name="intellect" />
          <StatStatic value={stats.combat.value} name="combat" />
        </div>
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
