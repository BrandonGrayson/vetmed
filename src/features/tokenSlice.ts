import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface TokenState {
    token: string
}

const initialState: TokenState = {
    token: ''
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        }
    }
})

export const selectToken = (state: RootState) => state.tokenSlice.token

export const { setToken } = tokenSlice.actions

export default tokenSlice.reducer
