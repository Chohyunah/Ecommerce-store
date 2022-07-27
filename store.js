import { configureStore, createSlice } from '@reduxjs/toolkit'
let createSlice ({  /* useState와 비슷한 용도 */
    name : 'user',
    initialState: 'kim'
})
export default configureStore({
  reducer: {
    reducer : {
        user : user.reducer //작명: user.reducer
    }
   }
}) 