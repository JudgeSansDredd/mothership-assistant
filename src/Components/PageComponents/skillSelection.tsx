import { useAppSelector } from "../../Store/hooks";
import { characterClasses, skills } from "../../Utils/constants";
import SkillWaypoint from "../skillWaypoint";

export default function SkillSelection() {
  const characterClass = useAppSelector(
    (state) => state.character.characterClass
  );
  const selectedSkills = useAppSelector(
    (state) => state.character.selectedSkills
  );
  if (!characterClass) return <div>Character class not selected</div>;
  const characterSkills = characterClasses.filter(
    (c) => c.name === characterClass
  )[0].skills;

  const { granted, bonus } = characterSkills;

  return (
    <div className="h-full w-full flex flex-col items-center">
      <h1 className="text-2xl">Select your bonus skills</h1>
      <svg
        className="border border-red-500"
        style={{ height: "800px", width: "800px" }}
      >
        {skills.map((skill) => {
          const skillGranted = granted?.includes(skill.name) || false;
          const selected = selectedSkills.includes(skill.name);
          const preReqSatisfied = skill.prerequisites
            ? skill.prerequisites.some((prereq) =>
                selectedSkills.includes(prereq)
              ) ||
              skill.prerequisites.some((prereq) => granted?.includes(prereq))
            : true;
          return (
            <SkillWaypoint
              key={skill.name}
              skill={skill}
              granted={skillGranted}
              selected={selected}
              preReqSatisfied={preReqSatisfied}
            />
          );
        })}
      </svg>
    </div>
  );
}
