import {
  expertSkillNames,
  masterSkillNames,
  saveNames,
  statNames,
  trainedSkillNames,
} from "./constants";

export type StatType = (typeof statNames)[number];
export type SaveType = (typeof saveNames)[number];
export type StatArrayType = Record<StatType, number | null>;
export type StatArrayTypeWithFormula = Record<
  StatType,
  { value: number | null; formula: string }
>;
export type SaveArrayType = Record<SaveType, number | null>;
export type SaveArrayTypeWithFormula = Record<
  SaveType,
  { value: number | null; formula: string }
>;
export type CharacterClassName =
  | "marine"
  | "android"
  | "scientist"
  | "teamster";
export interface CharacterClassType {
  name: CharacterClassName;
  description: string;
  modifiers: ClassStatModifiers[];
  traumaResponse: string;
  skillDescription: string;
  skills: ClassSkillChoice;
}
export interface CharacterType {
  name: string | null;
  pronouns: string | null;
  notes: string | null;
  stats: StatArrayType;
  saves: SaveArrayType;
  statModifierChosen: StatType | null;
  characterClass: CharacterClassName | null;
  selectedSkills: Array<
    TrainedSkillNameType | ExpertSkillNameType | MasterSkillNameType
  >;
}
export type TrainedSkillNameType = (typeof trainedSkillNames)[number];
export type ExpertSkillNameType = (typeof expertSkillNames)[number];
export type MasterSkillNameType = (typeof masterSkillNames)[number];
export interface TrainedSkillType {
  name: TrainedSkillNameType;
  level: "trained";
  prerequisites?: never;
}
export interface ExpertSkillType {
  name: ExpertSkillNameType;
  level: "expert";
  prerequisites: TrainedSkillNameType[];
}
export interface MasterSkillType {
  name: MasterSkillNameType;
  level: "master";
  prerequisites: ExpertSkillNameType[];
}
export type SkillType = (
  | TrainedSkillType
  | ExpertSkillType
  | MasterSkillType
) & { description: string; x?: number; y?: number };
export type SkillLevelType = SkillType["level"];
interface ClassStatModifiers {
  description: string;
  stats?: Partial<StatArrayType & { any: number }>;
  saves?: Partial<SaveArrayType>;
  wounds?: number;
}

interface ClassSkillChoice {
  granted?: SkillType["name"][];
  bonus?: Partial<Record<SkillLevelType, number>>[];
}
