import { useEffect, useState } from "react";
import CharacterClass from "../Components/PageComponents/characterClass";
import SkillSelection from "../Components/PageComponents/skillSelection";
import StatClassSelection from "../Components/PageComponents/statClassSelection";
import StatsAndSaves from "../Components/PageComponents/statsAndSaves";
import { useAppSelector } from "../Store/hooks";
import {
  characterClasses,
  expertSkillNames,
  masterSkillNames,
  saveNames,
  statNames,
  trainedSkillNames,
} from "./constants";
import {
  CharacterClassType,
  ExpertSkillNameType,
  MasterSkillNameType,
  SkillLevelType,
  SkillType,
  StatArrayTypeWithFormula,
  TrainedSkillNameType,
} from "./types";

export const rollD10 = () => Math.floor(Math.random() * 10 + 1);

export const useTransitionClasses = (page: number) => {
  const currentPage = useAppSelector((state) => state.navigation.currentPage);
  const defaultTransitionClasses = "transition-all duration-300 ease-in-out";

  const [transitionClasses, setTransitionClasses] = useState(
    defaultTransitionClasses
  );
  useEffect(() => {
    const left = currentPage > page;
    const right = currentPage < page;
    let newTransitionClasses = defaultTransitionClasses;
    if (left) {
      newTransitionClasses += " -translate-x-full opacity-0 -z-10";
    } else if (right) {
      newTransitionClasses += " translate-x-full opacity-0 -z-10";
    }
    setTransitionClasses(newTransitionClasses);
  }, [currentPage, page]);

  return transitionClasses;
};

export const usePages = () => {
  const defaultPages = [
    {
      name: "statsAndSaves",
      component: <StatsAndSaves />,
    },
    {
      name: "characterClass",
      component: <CharacterClass />,
    },
    {
      name: "skillSelection",
      component: <SkillSelection />,
    },
    {
      name: "placeholderPage",
      component: (
        <div className="h-screen w-screen bg-red-700">Placeholder</div>
      ),
    },
  ];

  const [pages, setPages] = useState<
    {
      name: string;
      component: JSX.Element;
    }[]
  >(defaultPages);

  const selectedClass = useAppSelector(
    (state) => state.character.characterClass
  );

  useEffect(() => {
    if (selectedClass === "android" || selectedClass === "scientist") {
      const newPages = [...defaultPages];
      newPages.splice(2, 0, {
        name: `${selectedClass}StatSelection`,
        component: <StatClassSelection characterClass={selectedClass} />,
      });
      setPages(newPages);
    } else {
      setPages(defaultPages);
    }
  }, [selectedClass]);

  return pages;
};

export const useNavChecks = (page: number) => {
  const pages = usePages();
  const numPages = pages.length;
  const currentPage = useAppSelector((state) => state.navigation.currentPage);
  const character = useAppSelector((state) => state.character);

  const [canGoLeft, setCanGoLeft] = useState(false);
  const [canGoRight, setCanGoRight] = useState(false);

  // Check if we can go left
  useEffect(() => {
    setCanGoLeft(page > 0);
  }, [currentPage, character.characterClass, page]);

  // Check if we can go right
  useEffect(() => {
    if (pages[page].name === "statsAndSaves") {
      const hasName = character.name !== null && character.name !== "";
      const hasPronounds =
        character.pronouns !== null && character.pronouns !== "";
      const hasNotes = character.notes !== null && character.notes !== "";
      const hasStats = statNames.every((key) => character.stats[key] !== null);
      const hasSaves = saveNames.every((key) => character.saves[key] !== null);
      setCanGoRight(
        hasName && hasPronounds && hasNotes && hasStats && hasSaves
      );
    } else if (pages[page].name === "characterClass") {
      setCanGoRight(character.characterClass !== null);
    } else if (
      pages[page].name === "androidStatSelection" ||
      pages[page].name === "scientistStatSelection"
    ) {
      setCanGoRight(character.statModifierChosen !== null);
    } else {
      setCanGoRight(page < numPages - 1);
    }
  }, [
    page,
    numPages,
    character.name,
    character.pronouns,
    character.notes,
    character.stats,
    character.saves,
    character.characterClass,
    character.statModifierChosen,
  ]);

  return { canGoLeft, canGoRight };
};

export const useGetStats = () => {
  const character = useAppSelector((state) => state.character);
  const selectedClass = character.characterClass;
  const statModifierChosen = character.statModifierChosen;

  const [stats, setStats] = useState<StatArrayTypeWithFormula>({
    strength: { value: null, formula: "" },
    speed: { value: null, formula: "" },
    intellect: { value: null, formula: "" },
    combat: { value: null, formula: "" },
  });

  useEffect(() => {
    // Set the stats based on the class
    const stats = statNames.reduce((r, statName) => {
      const base = character.stats[statName] || 0;
      const characterClass = characterClasses.filter(
        (characterClass) => characterClass.name === selectedClass
      )[0];
      const modifierValue =
        characterClass.modifiers
          .filter((mod) => {
            return mod.stats && Object.keys(mod.stats).includes(statName);
          })
          .map((mod) => {
            return mod.stats && mod.stats[statName];
          })[0] || null;
      const chosenModifierValue =
        statModifierChosen === statName
          ? characterClass.modifiers
              .filter((mod) => {
                return mod.stats && Object.keys(mod.stats).includes("any");
              })
              .map((mod) => {
                return mod.stats && mod.stats.any;
              })[0] || null
          : null;

      const value = base + (modifierValue || 0) + (chosenModifierValue || 0);
      const formulaBase = `${base}`;
      const formulamoModifier =
        modifierValue !== null
          ? modifierValue > 0
            ? ` + ${modifierValue} (${selectedClass})`
            : ` - ${-1 * modifierValue} (${selectedClass})`
          : "";
      const formulaChosenModifier =
        chosenModifierValue !== null
          ? chosenModifierValue > 0
            ? ` + ${chosenModifierValue} (${selectedClass} choice)`
            : ` - ${-1 * chosenModifierValue} (${selectedClass} choice)`
          : "";

      const formula = `${formulaBase}${formulamoModifier}${formulaChosenModifier} = ${value}`;

      return { ...r, [statName]: { value, formula } };
    }, {} as StatArrayTypeWithFormula);
    setStats(stats);
  }, [
    selectedClass,
    statModifierChosen,
    character.stats.combat,
    character.stats.intellect,
    character.stats.speed,
    character.stats.strength,
  ]);

  return stats;
};

export const useCharacterClass = () => {
  const [characterClass, setCharacterClass] =
    useState<CharacterClassType | null>(null);
  const selectedClass = useAppSelector(
    (state) => state.character.characterClass
  );

  useEffect(() => {
    if (selectedClass === null) {
      setCharacterClass(null);
    } else {
      const characterClass = characterClasses.filter(
        (c) => c.name === selectedClass
      )[0];
      setCharacterClass(characterClass);
    }
  }, [selectedClass]);

  return characterClass;
};

export const getSelectedSkillNumbers = (
  selectedSkills: Array<
    TrainedSkillNameType | ExpertSkillNameType | MasterSkillNameType
  >,
  characterClass: CharacterClassType
) => {
  const granted = characterClass?.skills.granted;

  const numTrainedSkills = selectedSkills.filter((selectedSkill) => {
    if (granted && granted.includes(selectedSkill)) return false;
    return trainedSkillNames.includes(selectedSkill as TrainedSkillNameType);
  }).length;
  const numExpertSkills = selectedSkills.filter((selectedSkill) => {
    if (granted && granted.includes(selectedSkill)) return false;
    return expertSkillNames.includes(selectedSkill as ExpertSkillNameType);
  }).length;
  const numMasterSkills = selectedSkills.filter((selectedSkill) => {
    if (granted && granted.includes(selectedSkill)) return false;
    return masterSkillNames.includes(selectedSkill as MasterSkillNameType);
  }).length;
  const skillNumbers = {
    trained: numTrainedSkills,
    expert: numExpertSkills,
    master: numMasterSkills,
  };

  return skillNumbers;
};

export const getSkillLevelAvailable = (
  level: SkillLevelType,
  selectedSkills: Array<
    TrainedSkillNameType | ExpertSkillNameType | MasterSkillNameType
  >,
  characterClass: CharacterClassType | null
) => {
  if (!characterClass) return false;
  const selectedSkillNumbers = getSelectedSkillNumbers(
    selectedSkills,
    characterClass
  );

  const bonusSkillSets = characterClass.skills.bonus;

  const skillLevelAvailable = bonusSkillSets
    ? bonusSkillSets
        .map((bonusSkillSet) => {
          const thisLevelSkillNumberAvailable = bonusSkillSet[level];
          if (!thisLevelSkillNumberAvailable) {
            return false;
          }

          const { trained, expert, master } = bonusSkillSet;
          const trainedAvailable = trained || 0;
          const expertAvailable = expert || 0;
          const masterAvailable = master || 0;

          if (
            (selectedSkillNumbers.trained &&
              trainedAvailable <= selectedSkillNumbers.trained) ||
            (selectedSkillNumbers.expert &&
              expertAvailable <= selectedSkillNumbers.expert) ||
            (selectedSkillNumbers.master &&
              masterAvailable <= selectedSkillNumbers.master)
          ) {
            return false;
          }

          return true;
        })
        .some((skillSet) => skillSet === true)
    : false;

  return skillLevelAvailable;
};

export const getSkillIsGranted = (
  skillName: TrainedSkillNameType | ExpertSkillNameType | MasterSkillNameType,
  characterClass: CharacterClassType | null
) => {
  if (!characterClass) return false;
  return characterClass.skills.granted
    ? characterClass.skills.granted.includes(skillName)
    : false;
};

export const getSkillPreReqSatisfied = (
  skill: SkillType,
  characterClass: CharacterClassType | null,
  selectedSkills: string[]
) => {
  if (!characterClass) return false;
  return skill.prerequisites
    ? skill.prerequisites.some((prereq) => selectedSkills.includes(prereq)) ||
        skill.prerequisites.some((prereq) =>
          characterClass?.skills.granted?.includes(prereq)
        )
    : true;
};
