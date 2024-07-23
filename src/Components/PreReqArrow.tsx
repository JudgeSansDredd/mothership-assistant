import { EndArrowType } from "../Utils/types";

interface PropType {
  arrowSegment: EndArrowType;
  xPosition: number;
  yPosition: number;
}

export default function PreReqArrow(props: PropType) {
  const { position } = props.arrowSegment;
  let point1 = "";
  let point2 = "";
  let point3 = "";
  if (position === "left") {
    point1 = `${props.xPosition - 9},${props.yPosition}`;
    point2 = `${props.xPosition - 16},${props.yPosition - 5}`;
    point3 = `${props.xPosition - 16},${props.yPosition + 5}`;
  } else if (position === "top") {
    point1 = `${props.xPosition},${props.yPosition - 9}`;
    point2 = `${props.xPosition - 5},${props.yPosition - 16}`;
    point3 = `${props.xPosition + 5},${props.yPosition - 16}`;
  } else if (position === "bottom") {
    point1 = `${props.xPosition},${props.yPosition + 9}`;
    point2 = `${props.xPosition - 5},${props.yPosition + 16}`;
    point3 = `${props.xPosition + 5},${props.yPosition + 16}`;
  }

  const points = `${point1} ${point2} ${point3}`;
  return <polygon points={points} className="fill-black dark:fill-white" />;
}
