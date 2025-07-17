import { useAppSelector } from "../../Store/hooks";
import { skills } from "../../Utils/constants";
import {
  calculateSkillPosition,
  getSkillIsGranted,
  getSkillLevelAvailable,
  getSkillPreReqSatisfied,
  useCharacterClass,
} from "../../Utils/functions";
import PreReqLine from "../PreReqLine";
import SkillWaypoint from "../skillWaypoint";

export default function SkillSelection() {
  const selectedSkills = useAppSelector(
    (state) => state.character.selectedSkills
  );
  const characterClass = useCharacterClass();
  if (!characterClass) return <div>Character class not selected</div>;

  skills.sort((a, b) => {
    const aSelectable =
      getSkillIsGranted(a.name, characterClass) ||
      selectedSkills.includes(a.name) ||
      (getSkillPreReqSatisfied(a, characterClass, selectedSkills) &&
        getSkillLevelAvailable(a.level, selectedSkills, characterClass));
    const bSelectable =
      getSkillIsGranted(b.name, characterClass) ||
      selectedSkills.includes(b.name) ||
      (getSkillPreReqSatisfied(b, characterClass, selectedSkills) &&
        getSkillLevelAvailable(b.level, selectedSkills, characterClass));

    if (aSelectable) {
      if (bSelectable) {
        return 0;
      } else {
        return 1;
      }
    } else {
      if (bSelectable) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  const wayPoints = skills.map((skill) => {
    return <SkillWaypoint key={skill.name} skill={skill} />;
  });

  const preReqLines = skills
    .flatMap((skill) => {
      if (skill.level !== "master" && skill.preReqLines) {
        const { xPosition, yPosition } = calculateSkillPosition(skill);
        const selected = selectedSkills.includes(skill.name);
        return skill.preReqLines.map((preReqLine) => {
          return {
            preReqLine,
            startPosition: {
              x: xPosition + (skill.preReqLineStartPoint || 0),
              y: yPosition,
            },
            highlighted: selected,
          };
        });
      }
      return [];
    })
    .sort((a, b) => {
      // This ensures highlighted lines are drawn on top
      if (a.highlighted) {
        return 1;
      } else {
        return -1;
      }
    })
    .map((params, i) => {
      return <PreReqLine key={i} {...params} />;
    });

  return (
    <div className="h-full w-full flex flex-col items-center">
      <h1 className="text-2xl">Select your bonus skills</h1>
      <svg style={{ height: "800px", width: "800px" }}>
        {wayPoints}
        {preReqLines}
      </svg>
    </div>
  );
}
