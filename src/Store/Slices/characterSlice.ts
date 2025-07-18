import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { WritableDraft } from "immer";
import {
  CharacterClassName,
  CharacterType,
  ExpertSkillNameType,
  MasterSkillNameType,
  SaveArrayType,
  SaveType,
  StatArrayType,
  StatType,
  TrainedSkillNameType,
} from "../../Utils/types";

const initialState: CharacterType = {
  name: import.meta.env.VITE_ENVIRONMENT === "development" ? "Nathan" : "",
  pronouns: "he/him",
  notes: "32, overweight",
  stats: {
    strength: 10,
    speed: 10,
    intellect: 10,
    combat: 10,
  },
  saves: {
    sanity: 10,
    fear: 10,
    body: 10,
  },
  statModifierChosen: "intellect",
  characterClass: "scientist",
  selectedSkills: [],
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setName: (
      state: WritableDraft<CharacterType>,
      action: PayloadAction<string>
    ) => {
      state.name = action.payload;
    },
    setPronouns: (
      state: WritableDraft<CharacterType>,
      action: PayloadAction<string>
    ) => {
      state.pronouns = action.payload;
    },
    setNotes: (
      state: WritableDraft<CharacterType>,
      action: PayloadAction<string>
    ) => {
      state.notes = action.payload;
    },
    setStat: (
      state: WritableDraft<CharacterType>,
      action: PayloadAction<{ stat: StatType; value: number | null }>
    ) => {
      state.stats[action.payload.stat] = action.payload.value;
    },
    setStats: (
      state: WritableDraft<CharacterType>,
      action: PayloadAction<StatArrayType>
    ) => {
      state.stats = action.payload;
    },
    setStatModifierChosen: (
      state: WritableDraft<CharacterType>,
      action: PayloadAction<StatType | null>
    ) => {
      state.statModifierChosen = action.payload;
    },
    setSave: (
      state: WritableDraft<CharacterType>,
      action: PayloadAction<{ save: SaveType; value: number | null }>
    ) => {
      state.saves[action.payload.save] = action.payload.value;
    },
    setSaves: (
      state: WritableDraft<CharacterType>,
      action: PayloadAction<SaveArrayType>
    ) => {
      state.saves = action.payload;
    },
    setCharacterClass: (
      state: WritableDraft<CharacterType>,
      action: PayloadAction<CharacterClassName | null>
    ) => {
      state.characterClass = action.payload;
    },
    toggleSelectedSkill: (
      state: WritableDraft<CharacterType>,
      action: PayloadAction<
        TrainedSkillNameType | ExpertSkillNameType | MasterSkillNameType
      >
    ) => {
      const skill = action.payload;
      if (state.selectedSkills.includes(skill)) {
        const index = state.selectedSkills.indexOf(skill);
        state.selectedSkills.splice(index, 1);
      } else {
        state.selectedSkills.push(skill);
      }
    },
  },
});

export const {
  setCharacterClass,
  setName,
  setNotes,
  setPronouns,
  setSave,
  setSaves,
  setStat,
  setStats,
  setStatModifierChosen,
  toggleSelectedSkill,
} = characterSlice.actions;
export default characterSlice.reducer;
