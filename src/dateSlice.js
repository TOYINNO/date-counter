import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "date",
  initialState: {
    currentDate: new Date(),
  },
  reducers: {
    incrementDate: (state) => {
      const newDate = new Date(state.currentDate);
      newDate.setDate(newDate.getDate() + 1);
      state.currentDate = newDate;
    },
    decrementDate: (state) => {
      const newDate = new Date(state.currentDate);
      newDate.setDate(newDate.getDate() - 1);
      state.currentDate = newDate;
    },
  },
});

export const { incrementDate, decrementDate } = dateSlice.actions;
export default dateSlice.reducer;
