import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SaveType, StatType } from "../../Utils/types";

interface newCharacterSliceStateType {
  stats: Record<StatType, number | undefined>;
  saves: Record<SaveType, number | undefined>;
}

const initialState: newCharacterSliceStateType = {
  stats: {
    strength: undefined,
    speed: undefined,
    intellect: undefined,
    combat: undefined,
  },
  saves: {
    sanity: undefined,
    fear: undefined,
    body: undefined,
  },
};

export const newCharacterSlice = createSlice({
  name: "newCharacter",
  initialState,
  reducers: {
    setStat: (
      state,
      action: PayloadAction<{ stat: string; value?: number }>
    ) => {
      state.stats[action.payload.stat] = action.payload.value;
    },
    setStats: (
      state,
      action: PayloadAction<{
        strength: number;
        speed: number;
        intellect: number;
        combat: number;
      }>
    ) => {
      state.stats.strength = action.payload.strength;
      state.stats.speed = action.payload.speed;
      state.stats.intellect = action.payload.intellect;
      state.stats.combat = action.payload.combat;
    },
    setSave: (
      state,
      action: PayloadAction<{ save: string; value?: number }>
    ) => {
      state.saves[action.payload.save] = action.payload.value;
    },
    setSaves: (
      state,
      action: PayloadAction<{ sanity: number; fear: number; body: number }>
    ) => {
      state.saves.sanity = action.payload.sanity;
      state.saves.fear = action.payload.fear;
      state.saves.body = action.payload.body;
    },
  },
});

export const { setStat, setSave, setStats, setSaves } =
  newCharacterSlice.actions;
export default newCharacterSlice.reducer;
