import React from "react";
import { setSave } from "../Store/Slices/savesSlice";
import { setStat } from "../Store/Slices/statsSlice";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { SaveType, StatType } from "../Utils/types";

interface StatNameAndType {
  type: "stat";
  name: StatType;
}
interface SaveNameAndType {
  type: "save";
  name: SaveType;
}
type PropType = StatNameAndType | SaveNameAndType;

export default function StatEditable(props: PropType) {
  const statValue: number | undefined =
    props.type === "stat"
      ? useAppSelector((state) => state.stats[props.name])
      : useAppSelector((state) => state.saves[props.name]);

  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(e.target.value);
    const value = isNaN(parsedValue) ? undefined : parsedValue;
    if (value && (value < 0 || value > 99)) return;
    const action =
      props.type === "stat"
        ? setStat({ stat: props.name, value })
        : setSave({ save: props.name, value });
    dispatch(action);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="rounded-full p-4 border-2 border-black dark:border-white h-12 w-12 flex justify-center items-center overflow-hidden">
        <input
          className="border-0 bg-white dark:bg-black text-black dark:text-white text-lg block dark:placeholder-gray-400 w-12 h-12 font-bold text-center"
          type="text"
          value={statValue ? statValue.toString() : ""}
          onChange={onChange}
        />
      </div>
      <div className="font-bold uppercase text-lg">{props.name}</div>
    </div>
  );
}
