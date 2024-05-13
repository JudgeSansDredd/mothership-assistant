import React from "react";
import { rollD10 } from "../Utils";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setSave, setStat } from "../store/slices/newCharacterSlice";
import Button from "./button";

interface PropType {
  name: string;
  text: string;
  type: "stat" | "save";
}

export default function StatEditable(props: PropType) {
  const statValue: number | undefined =
    props.type === "stat"
      ? useAppSelector((state) => state.newCharacter.stats[props.name])
      : useAppSelector((state) => state.newCharacter.saves[props.name]);
  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(e.target.value);
    const value = isNaN(parsedValue) ? undefined : parsedValue;
    const action =
      props.type === "stat"
        ? setStat({ stat: props.name, value })
        : setSave({ save: props.name, value });
    dispatch(action);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const valueToAdd = props.type === "stat" ? 25 : 10;
    const newValue = rollD10() + rollD10() + valueToAdd;
    const action =
      props.type === "stat"
        ? setStat({ stat: props.name, value: newValue })
        : setSave({ save: props.name, value: newValue });
    dispatch(action);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="rounded-full p-4 border-2 border-black dark:border-white h-12 w-12 flex justify-center items-center overflow-hidden">
        <input
          className="invalid:bg-red-300 invalid:dark:bg-red-800 valid:bg-white valid:dark:bg-black border-0 text-black dark:text-white text-lg block dark:placeholder-gray-400 w-12 h-12 font-bold text-center"
          type="text"
          pattern="^\d{0,2}$"
          value={statValue ? statValue.toString() : ""}
          onChange={onChange}
        />
      </div>
      <div className="font-bold uppercase text-lg">{props.text}</div>
      <Button type="button" onClick={onClick}>
        Roll
      </Button>
    </div>
  );
}
