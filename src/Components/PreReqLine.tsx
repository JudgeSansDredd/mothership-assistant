import { skills } from "../Utils/constants";
import { calculateSkillPosition } from "../Utils/functions";
import { PreReqPathType } from "../Utils/types";
import PreReqArrow from "./PreReqArrow";

interface PropType {
  preReqLine: PreReqPathType;
  startPosition: {
    x: number;
    y: number;
  };
  highlighted: boolean;
}

export default function PreReqLine(props: PropType) {
  const isClockwise = (start: string, end: string) => {
    if (start === "top" && end === "left") return true;
    if (start === "right" && end === "top") return true;
    if (start === "bottom" && end === "right") return true;
    if (start === "left" && end === "bottom") return true;
    return false;
  };

  const pathString = [
    `M ${props.startPosition.x} ${props.startPosition.y}`,
    ...props.preReqLine.map((preReqLineSegment) => {
      const { type } = preReqLineSegment;
      if (type === "endArrow") {
        const { position } = preReqLineSegment;
        const { xPosition, yPosition } = calculateSkillPosition(
          skills.find((skill) => skill.name === preReqLineSegment.skill)
        );
        if (position === "left") {
          return `L ${xPosition - 12} ${yPosition}`;
        }
        if (position === "top") {
          return `L ${xPosition} ${yPosition - 16}`;
        }
        if (position === "bottom") {
          return `L ${xPosition} ${yPosition + 16}`;
        }
      }
      if (type === "skip")
        return `m ${preReqLineSegment.dx} ${preReqLineSegment.dy}`;
      if (type === "line")
        return `l ${preReqLineSegment.dx || 0} ${preReqLineSegment.dy || 0}`;
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
      return "";
    }),
  ].join(" ");

  const arrows = props.preReqLine
    .filter((segment) => segment.type === "endArrow")
    .map((segment, i) => {
      const { xPosition, yPosition } = calculateSkillPosition(
        skills.find((skill) => skill.name === segment.skill)
      );
      return (
        <PreReqArrow
          key={i}
          arrowSegment={segment}
          xPosition={xPosition}
          yPosition={yPosition}
          selectable={props.highlighted}
        />
      );
    });

  return (
    <>
      <path
        d={pathString}
        className={
          props.highlighted
            ? "stroke-black fill-none dark:stroke-white stroke-2 z-10"
            : "stroke-gray-400 dark:stroke-gray-600 fill-none stroke-2 -z-10"
        }
      />
      {arrows}
    </>
  );
}
