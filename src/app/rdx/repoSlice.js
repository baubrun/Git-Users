import { createSlice } from '@reduxjs/toolkit';


export const repoSlice = createSlice({
    name: "repo",
    initialState: {
        value: []
    },
    reducers: {
        getRepos: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {getRepos} = repoSlice.actions
export const repoState = state => state.repo.value
export default repoSlice.reducer