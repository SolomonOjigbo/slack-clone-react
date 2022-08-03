import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	roomId: null,
};

export const appSlice = createSlice({
	name: "app",
	initialState,

	reducers: {
		enterRoom: (state, action) => {
			state.roomId = action.payload.roomId;
		},
		decrement: (state) => {
			state.value -= 1;
		},
	},
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;
