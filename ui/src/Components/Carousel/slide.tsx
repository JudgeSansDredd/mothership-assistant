import React from "react";

export default function Slide(props: React.PropsWithChildren<{}>) {
  return (
    // <div className="w-full h-full" style={{ flex: "1 0 100%" }}>
    <div className="w-full h-full flex-none">{props.children}</div>
  );
}
