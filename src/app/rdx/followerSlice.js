import {createSlice} from "@reduxjs/toolkit"

export const followerSlice = createSlice({
    name: "follower",
    initialState: {
        value: []
    },
    reducers: {
        getFollower: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {getFollower} = followerSlice.actions
export const followerState = state => state.follower.value
export default followerSlice.reducer

