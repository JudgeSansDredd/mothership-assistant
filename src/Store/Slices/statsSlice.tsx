import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StatArrayType, StatType } from "../../Utils/types";

const initialState: StatArrayType = {
  strength: undefined,
  speed: undefined,
  intellect: undefined,
  combat: undefined,
};

export const statSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    setStat: (
      state,
      action: PayloadAction<{ stat: StatType; value?: number }>
    ) => {
      state[action.payload.stat] = action.payload.value;
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
      state.strength = action.payload.strength;
      state.speed = action.payload.speed;
      state.intellect = action.payload.intellect;
      state.combat = action.payload.combat;
    },
  },
});

export const { setStat, setStats } = statSlice.actions;
export default statSlice.reducer;
