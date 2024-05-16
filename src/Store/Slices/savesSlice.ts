import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SaveArrayType, SaveType } from "../../Utils/types";

const initialState: SaveArrayType = {
  sanity: undefined,
  fear: undefined,
  body: undefined,
};

export const savesSlice = createSlice({
  name: "saves",
  initialState,
  reducers: {
    setSave: (
      state,
      action: PayloadAction<{ save: SaveType; value?: number }>
    ) => {
      state[action.payload.save] = action.payload.value;
    },
    setSaves: (
      state,
      action: PayloadAction<{ sanity: number; fear: number; body: number }>
    ) => {
      state.sanity = action.payload.sanity;
      state.fear = action.payload.fear;
      state.body = action.payload.body;
    },
  },
});

export const { setSave, setSaves } = savesSlice.actions;
export default savesSlice.reducer;
