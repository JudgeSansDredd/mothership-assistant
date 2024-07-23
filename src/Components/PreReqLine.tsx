import { skills, skillXSpacing, skillYSpacing } from "../Utils/constants";
import { PreReqPathType } from "../Utils/types";
import PreReqArrow from "./PreReqArrow";

interface PropType {
  preReqLine: PreReqPathType;
  xPosition: number;
  yPosition: number;
}

export default function PreReqLine(props: PropType) {
  const isClockwise = (start: string, end: string) => {
    if (start === "top" && end === "left") return true;
    if (start === "right" && end === "top") return true;
    if (start === "bottom" && end === "right") return true;
    if (start === "left" && end === "bottom") return true;
    return false;
  };
  const pathString = props.preReqLine
    .map((preReqLineSegment) => {
      const { type } = preReqLineSegment;
      if (type === "endArrow") {
        const { position } = preReqLineSegment;
        if (position === "left") {
          return `M ${props.xPosition - 12} ${props.yPosition}`;
        }
        if (position === "top") {
          return `M ${props.xPosition} ${props.yPosition - 16}`;
        }
        if (position === "bottom") {
          return `M ${props.xPosition} ${props.yPosition + 16}`;
        }
      }
      if (type === "skip")
        return `m ${preReqLineSegment.dx} ${preReqLineSegment.dy}`;
      if (type === "line")
        return `l ${preReqLineSegment.dx} ${preReqLineSegment.dy}`;
      if (type === "curve") {
        const { start, end, radius } = preReqLineSegment;
        const curveLength = radius ?? 10;
        let dx = 0;
        let dy = 0;
        if (start === "right" || start === "left") {
          dx = start === "right" ? -curveLength : curveLength;
          dy = end === "bottom" ? curveLength : -curveLength;
        }
        if (start === "top" || start === "bottom") {
          dy = start === "top" ? curveLength : -curveLength;
          dx = end === "right" ? curveLength : -curveLength;
        }
        return `a ${curveLength} ${curveLength} 0 0 ${isClockwise(start, end) ? 1 : 0} ${dx} ${dy}`;
      }
      if (type === "lineToPreReq") {
        const { skillName } = preReqLineSegment;
        const preReqSkill = skills.find((skill) => skill.name === skillName);
        if (!preReqSkill || preReqSkill.level === "master") return "";
        const endX =
          (preReqSkill.x ?? -10) * skillXSpacing +
          50 +
          (preReqSkill.preReqLineStartPoint ?? 0);
        const endY = (preReqSkill.y ?? -10) * skillYSpacing + 60;
        return `L ${endX} ${endY}`;
      }
      return "";
    })
    .join(" ");

  const arrows = props.preReqLine
    .filter((segment) => segment.type === "endArrow")
    .map((segment, i) => {
      return (
        <PreReqArrow
          key={i}
          arrowSegment={segment}
          xPosition={props.xPosition}
          yPosition={props.yPosition}
        />
      );
    });

  return (
    <>
      <path
        d={pathString}
        className="stroke-black dark:stroke-white stroke-2 fill-none"
      />
      {arrows}
    </>
  );
}
