import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    info: null,

}
export const personSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        loadperson: (state, action) => {
            state.info = action.payload;
        },
        removeperson: (state) => {
            state.info = null;
        }


    }
});


export const { loadperson, removeperson } = personSlice.actions;
// Action creators are generated for each case

export default personSlice.reducer;