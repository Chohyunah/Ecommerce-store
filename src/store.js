import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

let cart = createSlice ({
  name: 'cart',
  initialState:
  [
    {id : 0, name : 'Air Force 1 07 Low White', count : 0}
  ],
  reducers: {
    increase(state, action){
      let num  = state.findIndex((a) => {return a.id === action.payload})
      state[num].count += 1
      /* state[action.payload].count ++ */
    
    },

    addItem(state, action) {
      let num = state.findIndex((a)=>a.id == action.payload.id)
      if (num == -1){
        state.push(action.payload)
      }
      else {
        state[num].count += 1
      }
    }

  }

})

export let {increase, addItem} = cart.actions
export default configureStore({
  reducer: {
    user : user.reducer, //작명: user.reducer
    cart : cart.reducer
  }
}) 