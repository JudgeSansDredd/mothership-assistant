import { useAppSelector } from "../../Store/hooks";
import { characterClasses, skills } from "../../Utils/constants";
import SkillWaypoint from "../skillWaypoint";

export default function SkillSelection() {
  const characterClass = useAppSelector(
    (state) => state.character.characterClass
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
          return (
            <SkillWaypoint
              key={skill.name}
              skill={skill}
              granted={skillGranted}
            />
          );
        })}
      </svg>
    </div>
  );
}
