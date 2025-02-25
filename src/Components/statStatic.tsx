interface PropType {
  name: string;
  value: number | null;
}

export default function StatStatic(props: PropType) {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="rounded-full p-4 border-2 border-black dark:border-white h-12 w-12 flex justify-center items-center overflow-hidden">
        <div className="border-0 bg-white dark:bg-black text-black dark:text-white text-lg dark:placeholder-gray-400 w-full h-full font-bold text-center flex justify-center items-center">
          <div>{props.value ?? ""}</div>
        </div>
      </div>
      <div className="font-bold uppercase text-lg">{props.name}</div>
    </div>
  );
}
