import { useAppSelector } from "../../Store/hooks";
import { skills } from "../../Utils/constants";
import { useCharacterClass } from "../../Utils/functions";
import SkillWaypoint from "../skillWaypoint";

export default function SkillSelection() {
  const selectedSkills = useAppSelector(
    (state) => state.character.selectedSkills
  );
  const characterClass = useCharacterClass();
  if (!characterClass) return <div>Character class not selected</div>;
  const { granted } = characterClass.skills;

  return (
    <div className="h-full w-full flex flex-col items-center">
      <h1 className="text-2xl">Select your bonus skills</h1>
      <svg style={{ height: "800px", width: "800px" }}>
        {skills.map((skill) => {
          return <SkillWaypoint key={skill.name} skill={skill} />;
        })}
      </svg>
    </div>
  );
}
