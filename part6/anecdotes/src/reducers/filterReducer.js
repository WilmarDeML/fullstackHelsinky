import { createSlice } from '@reduxjs/toolkit'

const initialState = 'ALL'

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterChange (_state, action) {
      console.log('action', action)
      return action.payload
    }    
  }
})

export const { filterChange } = filterSlice.actions

export default filterSlice.reducer