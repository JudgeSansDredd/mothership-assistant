import React from "react";

export default function SlidesContainer(props: React.PropsWithChildren<{}>) {
  return (
    <div className="w-full flex list-none m-0 p-0 overflow-hidden">
      {props.children}
    </div>
  );
}
