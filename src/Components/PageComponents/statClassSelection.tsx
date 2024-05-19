interface PropType {
  characterClass: "android" | "scientist";
}

export default function StatClassSelection(props: PropType) {
  return (
    <div className="h-full w-full">
      Hey, {props.characterClass}, pick a stat
    </div>
  );
}
