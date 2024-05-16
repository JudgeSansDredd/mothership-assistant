import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CharacterClassName } from "../../Utils/types";

interface navigationSliceStateType {
  currentPage: number;
  selectedClass: CharacterClassName | null;
}

const initialState: navigationSliceStateType = {
  currentPage: 0,
  selectedClass: null,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) {
        state.currentPage = 0;
        return;
      }
      state.currentPage = action.payload;
    },
    setSelectedClass: (
      state,
      action: PayloadAction<CharacterClassName | null>
    ) => {
      state.selectedClass = action.payload;
    },
  },
});

export const { setCurrentPage, setSelectedClass } = navigationSlice.actions;
export default navigationSlice.reducer;
