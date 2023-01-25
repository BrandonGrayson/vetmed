import { configureStore } from '@reduxjs/toolkit'
import tokenSlice from '../features/tokenSlice'

export const store = configureStore({
    reducer: {
        tokenReducer: tokenSlice
    }
})

export type RootState = ReturnType<typeof store.getState>