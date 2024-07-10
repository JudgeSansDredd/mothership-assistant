import { toggleSelectedSkill } from "../Store/Slices/characterSlice";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { useCharacterClass } from "../Utils/functions";
import { SkillType } from "../Utils/types";

interface PropType {
  skill: SkillType;
}

export default function SkillWaypoint(props: PropType) {
  const { skill } = props;
  const characterClass = useCharacterClass();
  const selectedSkills = useAppSelector(
    (state) => state.character.selectedSkills,
  );
  const dispatch = useAppDispatch();
  if (!characterClass) return <div>Character class not selected</div>;

  // Spacing constants
  const Y_SPACING = 40;
  const X_SPACING = 275;

  // Calculate position of the skill
  const yPosition = 60 + Y_SPACING * (skill.y ?? -10);
  const xPosition = 50 + X_SPACING * (skill.x ?? -10);

  const granted =
    characterClass.skills.granted &&
    characterClass.skills.granted.includes(skill.name);

  const selected = selectedSkills.includes(skill.name);

  const preReqSatisfied = skill.prerequisites
    ? skill.prerequisites.some((prereq) => selectedSkills.includes(prereq)) ||
      skill.prerequisites.some((prereq) =>
        characterClass.skills.granted?.includes(prereq),
      )
    : true;

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

  const bonusSkills = characterClass.skills.bonus;
  // TODO: Bonus skills is an array of possible choices e.g. two trained skills or one master skill

  const unselectable = !granted && !selected && !preReqSatisfied;
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
    </>
  );
}
