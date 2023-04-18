import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import championsSlice from '../features/championsSlice'

export const store = configureStore({
  reducer: {
    champions: championsSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
