import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { toggleSelectedSkill } from "../Store/Slices/characterSlice";
import {
  useSkillIsGranted,
  useSkillLevelAvailable,
  useSkillPreReqSatisfied,
} from "../Utils/functions";
import { SkillType } from "../Utils/types";

interface PropType {
  skill: SkillType;
  xPosition: number;
  yPosition: number;
}

export default function SkillBulletPoint(props: PropType) {
  const granted = useSkillIsGranted(props.skill.name);
  const preReqSatisfied = useSkillPreReqSatisfied(props.skill);
  const skillLevelAvailable = useSkillLevelAvailable(props.skill.level);
  const dispatch = useAppDispatch();
  const selectedSkills = useAppSelector(
    (state) => state.character.selectedSkills
  );
  const selected = selectedSkills.includes(props.skill.name);
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
    dispatch(toggleSelectedSkill(props.skill.name));
  };
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

  return (
    <>
      {/* Outer circle */}
      <circle
        className={`cursor-pointer stroke-2 ${outerCircleClass}`}
        cx={props.xPosition}
        cy={props.yPosition}
        r={8}
        onClick={onClick}
      />
      {/* Inner circle and fill */}
      <circle
        className={`cursor-pointer ${innerCircleClass}`}
        cx={props.xPosition}
        cy={props.yPosition}
        r={!granted && selected ? 5 : 7}
        onClick={onClick}
      />
      {/* Label */}
      <text
        x={props.xPosition + 10}
        y={props.yPosition + 1}
        textAnchor="start"
        dominantBaseline="middle"
        fontSize={12}
        fill="black"
        className={`${textClass} capitalize`}
      >
        {props.skill.name}
      </text>
    </>
  );
}
