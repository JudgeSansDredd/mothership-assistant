import { SkillType } from "../Utils/types";

interface PropType {
  skill: SkillType;
  granted: boolean;
  selected: boolean;
  preReqSatisfied: boolean;
}

export default function SkillWaypoint(props: PropType) {
  const { skill, granted, selected, preReqSatisfied } = props;
  const Y_SPACING = 40;
  const X_SPACING = 275;
  const yPosition = 60 + Y_SPACING * (skill.y ?? -10);
  const xPosition = 50 + X_SPACING * (skill.x ?? -10);

  let innerCircleClass: string = "";
  if (granted) {
    innerCircleClass =
      "stroke-1 stroke-black dark:stroke-white fill-black dark:fill-white";
  } else if (selected) {
    innerCircleClass =
      "stroke-1 stroke-white dark:stroke-black fill-black dark:fill-white";
  } else if (preReqSatisfied) {
    innerCircleClass = "stroke-1 stroke-black dark:stroke-white";
  } else {
    innerCircleClass = "stroke-1 stroke-gray-400 dark:stroke-gray-600";
  }

  const unselectable = !granted && !selected && !preReqSatisfied;

  return (
    <>
      {/* Outer circle */}
      <circle
        className={`stroke-2 ${
          unselectable
            ? "stroke-gray-400 dark:stroke-gray-600"
            : "stroke-black dark:stroke-white"
        }`}
        cx={xPosition}
        cy={yPosition}
        r={8}
      />
      {/* Inner circle and fill */}
      <circle
        className={innerCircleClass}
        cx={xPosition}
        cy={yPosition}
        r={!granted && selected ? 5 : 7}
      />
      <text
        x={xPosition + 10}
        y={yPosition + 1}
        textAnchor="start"
        dominantBaseline="middle"
        fontSize={12}
        fill="black"
        className={`${
          unselectable
            ? "stroke-gray-400 dark:stroke-gray-600 fill-gray-400 dark:fill-gray-600"
            : "stroke-black fill-black dark:stroke-white dark:fill-white"
        } capitalize`}
      >
        {skill.name}
      </text>
    </>
  );
}
