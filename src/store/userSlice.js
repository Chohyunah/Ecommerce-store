import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice ({  /* useState와 비슷한 용도 */
    name : 'user',
    initialState: {name : 'kim', age : 20},
    reducers: {
      changeName(state){
        return {name : 'park', age : 20}
        //state.name = 'park' 이라고 해도 됨
      },
      changeAge(state, action){
        state.age += action.payload
      }

    }
})

export let {changeName, changeAge} = user.actions
export default user
