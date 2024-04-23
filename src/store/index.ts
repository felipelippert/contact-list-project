import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './reducers/filter'
import contactsReducer from './reducers/contacts'

const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
