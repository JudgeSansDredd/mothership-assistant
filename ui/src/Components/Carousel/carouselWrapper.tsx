import React from "react";

export default function CarouselWrapper(props: React.PropsWithChildren<{}>) {
  return <div className="overflow-hidden relative">{props.children}</div>;
}
