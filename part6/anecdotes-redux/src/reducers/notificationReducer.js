import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notificationChange(_state, action) {
      console.log('action', action)
      return action.payload
    }
  }
})

export const { notificationChange } = notificationSlice.actions

export const setNotification = (notification, time) => {
  return async (dispatch) => {
    dispatch(notificationChange(notification))
    setTimeout(() => {
      dispatch(notificationChange(''))
    }, time)
  }
}

export default notificationSlice.reducer
