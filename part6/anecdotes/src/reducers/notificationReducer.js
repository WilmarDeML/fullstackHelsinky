import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    notificationChange (_state, action) {
      console.log('action', action)
      return action.payload
    }    
  }
})

export const { notificationChange } = notificationSlice.actions

export default notificationSlice.reducer