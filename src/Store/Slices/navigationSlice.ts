import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { WritableDraft } from "immer";

interface navigationSliceStateType {
  currentPage: number;
}

const initialState: navigationSliceStateType = {
  currentPage: 3,
};

// const initialState: navigationSliceStateType = {
//   currentPage: 0,
// };

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setCurrentPage: (
      state: WritableDraft<navigationSliceStateType>,
      action: PayloadAction<number>
    ) => {
      if (action.payload < 0) {
        state.currentPage = 0;
        return;
      }
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = navigationSlice.actions;
export default navigationSlice.reducer;
