import {createSlice} from "@reduxjs/toolkit"

export const mockUserSlice = createSlice({
    name: "mockUser",
    initialState: {
        value: []
    },
    reducers: {
        getMockUser: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {getMockUser} = mockUserSlice.actions
export const mockUserState = state => state.mockUser.value
export default mockUserSlice.reducer

