import React from "react";

interface PropType {
  visible: boolean;
}

export default function CharacterClass(props: PropType) {
  return (
    <div className="overflow-hidden">
      <div
        className={`${
          !props.visible ? "-translate-y-full" : ""
        } transition duration-300 -z-10`}
      >
        <h2>Character Class</h2>
        <p>Choose a class for your character.</p>
      </div>
    </div>
  );
}
