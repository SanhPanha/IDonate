import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/slices/authSlice'
import registerSlice from '@/features/auth/registerSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
        auth: authReducer,
    register: registerSlice,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']