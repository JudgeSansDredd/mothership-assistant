import {
  expertSkillNames,
  masterSkillNames,
  trainedSkillNames,
} from "./constants";

export type StatType = "strength" | "speed" | "intellect" | "combat";
export type SaveType = "sanity" | "fear" | "body";
export type StatArrayType = Partial<Record<StatType, number>>;
export type SaveArrayType = Partial<Record<SaveType, number>>;
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

export interface CharacterClass {
  name: string;
  description: string;
  stats: StatArrayType;
  saves: SaveArrayType;
  skills: {};
  wounds: number;
}
