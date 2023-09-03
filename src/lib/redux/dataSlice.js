import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter((d) => d.id != action.payload)];
    },
    updateDataFunc: (state, action) => {
      state.data = [
        ...state.data.map((d) =>
          d.id == action.payload.id ? { ...d, ...action.payload } : d
        ),
      ];
    },
  },
});

export const { createDataFunc, deleteDataFunc, updateDataFunc } =
  dataSlice.actions;

export default dataSlice.reducer;
