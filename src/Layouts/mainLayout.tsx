import React, { useEffect } from "react";

interface PropType {
  title: string;
}

export default function MainLayout(props: React.PropsWithChildren<PropType>) {
  useEffect(() => {
    document.title = `${props.title} | Mothership Assistant`;
  }, []);

  return (
    <div>
      <div>This is the layout</div>
      {props.children}
    </div>
  );
}
