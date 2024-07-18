import { toggleSelectedSkill } from "../Store/Slices/characterSlice";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { skills } from "../Utils/constants";
import {
  useSkillIsGranted,
  useSkillLevelAvailable,
  useSkillPreReqSatisfied,
} from "../Utils/functions";
import { SkillType } from "../Utils/types";

interface PropType {
  skill: SkillType;
}

export default function SkillWaypoint(props: PropType) {
  const { skill } = props;
  const granted = useSkillIsGranted(skill.name);
  const skillLevelAvailable = useSkillLevelAvailable(skill.level);
  const preReqSatisfied = useSkillPreReqSatisfied(skill);
  const selectedSkills = useAppSelector(
    (state) => state.character.selectedSkills
  );
  const dispatch = useAppDispatch();

  // Spacing constants
  const Y_SPACING = 40;
  const X_SPACING = 275;

  // Calculate position of the skill
  const yPosition = 60 + Y_SPACING * (skill.y ?? -10);
  const xPosition = 50 + X_SPACING * (skill.x ?? -10);

  const selected = selectedSkills.includes(skill.name);

  let innerCircleClass: string = "";
  if (granted) {
    innerCircleClass =
      "stroke-1 stroke-black dark:stroke-white fill-black dark:fill-white";
  } else if (selected) {
    innerCircleClass =
      "stroke-1 stroke-white dark:stroke-black fill-black dark:fill-white";
  } else if (preReqSatisfied && skillLevelAvailable) {
    innerCircleClass = "stroke-1 stroke-black dark:stroke-white";
  } else {
    innerCircleClass = "stroke-1 stroke-gray-400 dark:stroke-gray-600";
  }

  const unselectable =
    !granted && !selected && (!preReqSatisfied || !skillLevelAvailable);
  const outerCircleClass = unselectable
    ? "stroke-gray-400 dark:stroke-gray-600"
    : "stroke-black dark:stroke-white";
  const textClass = unselectable
    ? "stroke-gray-400 dark:stroke-gray-600 fill-gray-400 dark:fill-gray-600"
    : "stroke-black fill-black dark:stroke-white dark:fill-white";

  const onClick: React.MouseEventHandler<SVGCircleElement> = (e) => {
    e.preventDefault();
    if (unselectable) return;
    dispatch(toggleSelectedSkill(skill.name));
  };

  const isClockwise = (start: string, end: string) => {
    if (start === "top" && end === "left") return true;
    if (start === "right" && end === "top") return true;
    if (start === "bottom" && end === "right") return true;
    if (start === "left" && end === "bottom") return true;
    return false;
  };

  const paths =
    skill.level !== "trained" && skill.preReqLines
      ? skill.preReqLines.map((preReqLine) => {
          return preReqLine.map((preReqLineSegment) => {
            const { type } = preReqLineSegment;
            if (type === "skip")
              return `m ${preReqLineSegment.dx} ${preReqLineSegment.dy}`;
            if (type === "line")
              return `l ${preReqLineSegment.dx} ${preReqLineSegment.dy}`;
            if (type === "curve") {
              const { start, end } = preReqLineSegment;
              const curveLength = 10;
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
              const preReqSkill = skills.find(
                (skill) => skill.name === skillName
              );
              if (!preReqSkill || preReqSkill.level === "master") return "";
              const endX =
                (preReqSkill.x ?? -10) * X_SPACING +
                50 +
                (preReqSkill.preReqLineJoinPoint ?? 0);
              const endY = (preReqSkill.y ?? -10) * Y_SPACING + 60;
              return `L ${endX} ${endY}`;
            }
            return "";
          });
        })
      : [];

  return (
    <>
      {/* Outer circle */}
      <circle
        className={`cursor-pointer stroke-2 ${outerCircleClass}`}
        cx={xPosition}
        cy={yPosition}
        r={8}
        onClick={onClick}
      />
      {/* Inner circle and fill */}
      <circle
        className={`cursor-pointer ${innerCircleClass}`}
        cx={xPosition}
        cy={yPosition}
        r={!granted && selected ? 5 : 7}
        onClick={onClick}
      />
      {/* Label */}
      <text
        x={xPosition + 10}
        y={yPosition + 1}
        textAnchor="start"
        dominantBaseline="middle"
        fontSize={12}
        fill="black"
        className={`${textClass} capitalize`}
      >
        {skill.name}
      </text>
      {paths.length && (
        <>
          {paths.map((pathPieces, i) => {
            return (
              <path
                key={i}
                d={[`M ${xPosition - 12} ${yPosition}`, ...pathPieces].join(
                  " "
                )}
                className={`stroke-black dark:stroke-white stroke-2`}
              />
            );
          })}
          <polygon
            points={`${xPosition - 9},${yPosition} ${xPosition - 16},${yPosition - 5} ${xPosition - 16},${yPosition + 5}`}
            className="fill-black dark:fill-white"
          />
        </>
      )}
    </>
  );
}
