import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface navigationSliceStateType {
  currentPage: number;
}

const initialState: navigationSliceStateType = {
  currentPage: 2,
};

// const initialState: navigationSliceStateType = {
//   currentPage: 0,
// };

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
  },
});

export const { setCurrentPage } = navigationSlice.actions;
export default navigationSlice.reducer;
