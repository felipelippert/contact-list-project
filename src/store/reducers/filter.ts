import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type filterState = {
  termSearch: string
}

const initialState: filterState = {
  termSearch: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.termSearch = action.payload
    }
  }
})

export const { changeTerm } = filterSlice.actions
export default filterSlice.reducer
