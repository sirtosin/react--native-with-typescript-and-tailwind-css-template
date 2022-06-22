import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface State {
  origin: string | null;
  destination: string | null;
  travelTime: string | null;
}

const initialState: State = {
  origin: null,
  destination: null,
  travelTime: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state: State, action: PayloadAction<string>) => {
      state.origin = action.payload;
    },
    setDestination: (state: State, action: PayloadAction<string>) => {
      state.destination = action.payload;
    },
    setTravelTime: (state: State, action: PayloadAction<string>) => {
      state.travelTime = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDestination, setOrigin, setTravelTime } = navSlice.actions;

// selectors
export const selectOrigin = (state: State) => state.origin;
export const selectDestination = (state: State) => state.destination;
export const selectTravelTime = (state: State) => state.travelTime;

export default navSlice.reducer;
