import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: "no user"
    },
    reducers: {
        getUser: (state, action) => {
            state.value = action.payload
        }
    }
})


export const {getUser} = userSlice.actions
export const userState = state => state.user.value
export default userSlice.reducer