import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
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
  name: "name",
  pronouns: "pronouns",
  notes: "notes",
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
  statModifierChosen: null,
  characterClass: "marine",
  selectedSkills: [],
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPronouns: (state, action: PayloadAction<string>) => {
      state.pronouns = action.payload;
    },
    setNotes: (state, action: PayloadAction<string>) => {
      state.notes = action.payload;
    },
    setStat: (
      state,
      action: PayloadAction<{ stat: StatType; value: number | null }>
    ) => {
      state.stats[action.payload.stat] = action.payload.value;
    },
    setStats: (state, action: PayloadAction<StatArrayType>) => {
      state.stats = action.payload;
    },
    setStatModifierChosen: (state, action: PayloadAction<StatType | null>) => {
      state.statModifierChosen = action.payload;
    },
    setSave: (
      state,
      action: PayloadAction<{ save: SaveType; value: number | null }>
    ) => {
      state.saves[action.payload.save] = action.payload.value;
    },
    setSaves: (state, action: PayloadAction<SaveArrayType>) => {
      state.saves = action.payload;
    },
    setCharacterClass: (state, action) => {
      state.characterClass = action.payload;
    },
    toggleSelectedSkill: (
      state,
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
