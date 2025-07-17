import { useAppSelector } from "../Store/hooks";
import {
  calculateSkillPosition,
  getSkillIsGranted,
  getSkillLevelAvailable,
  getSkillPreReqSatisfied,
  useCharacterClass,
} from "../Utils/functions";
import { SkillType } from "../Utils/types";
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

  // Calculate position of the skill
  const { xPosition, yPosition } = calculateSkillPosition(skill);

  const selectable =
    granted || selected || (preReqSatisfied && skillLevelAvailable);

  return (
    <SkillBulletPoint
      skill={skill}
      xPosition={xPosition}
      yPosition={yPosition}
      selectable={selectable}
    />
  );
}
