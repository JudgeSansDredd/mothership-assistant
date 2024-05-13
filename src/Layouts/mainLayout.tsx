import React, { useEffect } from "react";

interface PropType {
  title: string;
}

export default function MainLayout(props: React.PropsWithChildren<PropType>) {
  useEffect(() => {
    document.title = `${props.title} | Mothership Assistant`;
  }, []);

  return (
    <div className="p-2 mx-auto container flex flex-col items-center border-2 border-black dark:border-white rounded-lg m-4 h-full w-max box-border">
      {props.children}
    </div>
  );
}
