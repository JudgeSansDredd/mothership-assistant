import React from "react";

interface PropType {
  name: string;
}

function StatEditable(props: PropType, ref: React.Ref<HTMLInputElement>) {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="rounded-full p-4 border-2 border-black dark:border-white h-12 w-12 flex justify-center items-center overflow-hidden">
        <input
          ref={ref}
          className="invalid:bg-red-300 invalid:dark:bg-red-800 valid:bg-white valid:dark:bg-black border-0 text-black dark:text-white text-lg block dark:placeholder-gray-400 w-12 h-12 font-bold text-center"
          type="text"
          pattern="^\d*$"
        />
      </div>
      <div className="font-bold uppercase text-lg">{props.name}</div>
    </div>
  );
}

const forwardedRef = React.forwardRef(StatEditable);
export default forwardedRef;
