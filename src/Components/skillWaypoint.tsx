import { SkillType } from "../Utils/types";

interface PropType {
  skill: SkillType;
}

export default function SkillWaypoint({ skill }: PropType) {
  const yPosition = 50 + 30 * (skill.y ?? -10);
  const xPosition = 50 + 200 * (skill.x ?? -10);

  return (
    <>
      <circle
        className="stroke-black fill-white dark:stroke-white dark:fill-black stroke-2"
        cx={xPosition}
        cy={yPosition}
        r={8}
      />
      <text
        x={xPosition + 10}
        y={yPosition}
        textAnchor="start"
        dominantBaseline="middle"
        fontSize={12}
        fill="black"
        className="stroke-black fill-black dark:stroke-white dark:fill-white"
      >
        {skill.name}
      </text>
    </>
  );
}
