import {
  expertSkillNames,
  masterSkillNames,
  trainedSkillNames,
} from "./constants";

export type StatType = "strength" | "speed" | "intellect" | "combat";
export type SaveType = "sanity" | "fear" | "body";
export type StatArrayType = Record<StatType, number | null>;
export type SaveArrayType = Record<SaveType, number | null>;
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
}
export type TrainedSkillNameType = (typeof trainedSkillNames)[number];
export type ExpertSkillNameType = (typeof expertSkillNames)[number];
export type MasterSkillNameType = (typeof masterSkillNames)[number];
export interface TrainedSkillType {
  name: TrainedSkillNameType;
  description: string;
  level: "trained";
  prerequisites?: never;
}
export interface ExpertSkillType {
  name: ExpertSkillNameType;
  description: string;
  level: "expert";
  prerequisites: TrainedSkillNameType[];
}
export interface MasterSkillType {
  name: MasterSkillNameType;
  description: string;
  level: "master";
  prerequisites: ExpertSkillNameType[];
}
export type SkillType = TrainedSkillType | ExpertSkillType | MasterSkillType;
export type SkillLevelType = SkillType["level"];
interface ClassStatModifiers {
  description: string;
  stats?: Partial<StatArrayType> | { any?: number };
  saves?: Partial<SaveArrayType>;
  wounds?: number;
}
interface ClassSkillChoice {
  granted?: SkillType["name"][];
  bonus?: Partial<Record<SkillLevelType, number>>[];
}
