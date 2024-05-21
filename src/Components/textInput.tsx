import React from "react";

interface PropType {
  id: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput(props: PropType) {
  return (
    <input
      type="text"
      id={props.id}
      className="border-2 border-black dark:border-white text-black dark:text-black text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
      placeholder={props.placeholder}
      onChange={props.onChange}
      required
    />
  );
}
