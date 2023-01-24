import { configureStore } from '@reduxjs/toolkit'
import tokenSlice from '../features/tokenSlice'

export default configureStore({
    reducer: {
        tokenReducer: tokenSlice
    }
})