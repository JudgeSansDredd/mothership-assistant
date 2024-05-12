import React from "react";

interface PropType {
  id: string;
  placeholder: string;
}

function TextInput(props: PropType, ref: React.Ref<HTMLInputElement>) {
  return (
    <input
      ref={ref}
      type="text"
      id={props.id}
      className="bg-white dark:bg-black border-2 border-black dark:border-white text-black dark:text-white text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
      placeholder={props.placeholder}
      required
    />
  );
}

const forwardedRef = React.forwardRef(TextInput);
export default forwardedRef;
