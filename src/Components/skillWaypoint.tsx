import { useAppSelector } from "../Store/hooks";
import {
  getSkillIsGranted,
  getSkillLevelAvailable,
  getSkillPreReqSatisfied,
  useCharacterClass,
} from "../Utils/functions";
import { SkillType } from "../Utils/types";
import PreReqLine from "./PreReqLine";
import SkillBulletPoint from "./SkillBulletPoint";

interface PropType {
  skill: SkillType;
}

export default function SkillWaypoint({ skill }: PropType) {
  const characterClass = useCharacterClass();
  const selectedSkills = useAppSelector(
    (state) => state.character.selectedSkills
  );
  const granted = getSkillIsGranted(skill.name, characterClass);
  const preReqSatisfied = getSkillPreReqSatisfied(
    skill,
    characterClass,
    selectedSkills
  );
  const skillLevelAvailable = getSkillLevelAvailable(
    skill.level,
    selectedSkills,
    characterClass
  );
  const selected = selectedSkills.includes(skill.name);

  // Spacing constants
  const Y_SPACING = 40;
  const X_SPACING = 275;

  // Calculate position of the skill
  const yPosition = 60 + Y_SPACING * (skill.y ?? -10);
  const xPosition = 50 + X_SPACING * (skill.x ?? -10);

  const selectable =
    granted || selected || (preReqSatisfied && skillLevelAvailable);

  return (
    <>
      {skill.level !== "trained" && skill.preReqLines && (
        <>
          {skill.preReqLines.map((preReqLine, i) => {
            const params = {
              preReqLine,
              xPosition,
              yPosition,
              xSpacing: X_SPACING,
              ySpacing: Y_SPACING,
              selectable,
            };
            return <PreReqLine key={i} {...params} />;
          })}
        </>
      )}
      <SkillBulletPoint
        skill={skill}
        xPosition={xPosition}
        yPosition={yPosition}
        selectable={selectable}
      />
    </>
  );
}
