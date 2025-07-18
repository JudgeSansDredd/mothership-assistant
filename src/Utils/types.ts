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
  preReqLineStartPoint?: number;
  preReqLines?: Array<PreReqPathType>;
}
export interface PathSkipType {
  type: "skip";
  dx: number;
  dy: number;
}
export interface LineSegmentType {
  type: "line";
  dx?: number;
  dy?: number;
}
interface CurveTopStart {
  start: "top";
  end: "left" | "right";
}
interface CurveBottomStart {
  start: "bottom";
  end: "left" | "right";
}
interface CurveLeftStart {
  start: "left";
  end: "top" | "bottom";
}
interface CurveRightStart {
  start: "right";
  end: "top" | "bottom";
}
export type CurveSegmentType = (
  | CurveTopStart
  | CurveBottomStart
  | CurveLeftStart
  | CurveRightStart
) & { type: "curve"; radius?: number };
export type EndArrowType = {
  type: "endArrow";
  position: "left" | "top" | "bottom";
  skill: ExpertSkillNameType | MasterSkillNameType;
};
export type PreReqPathSegmentType =
  | PathSkipType
  | LineSegmentType
  | CurveSegmentType
  | EndArrowType;
export type PreReqPathType = PreReqPathSegmentType[];
export interface ExpertSkillType {
  name: ExpertSkillNameType;
  level: "expert";
  prerequisites: TrainedSkillNameType[];
  preReqLines?: Array<PreReqPathType>;
  preReqLineStartPoint?: number;
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
) & {
  description: string;
  x?: number;
  y?: number;
};
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
