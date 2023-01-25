import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice'
import tokenSlice from '../features/tokenSlice'

export const store = configureStore({
    reducer: {
        tokenReducer: tokenSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(apiSlice.middleware)
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch