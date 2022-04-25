import { types } from "../types/types";


// const state = {
//  name: 'Elis Antonio',
//  logged: true
// }

// Actions Reducer example:
// const loginAction = {
//  type: types.login,
//  payload: {
//   name: 'Elis Antonio',
//   email: 'nombre@mail.com'
//  }
// }
// const logoutAction = {
//  type: types.logout,
//  payload: {}
// }


export const authReducer = (state = {}, action) => {

 switch (action.type) {
  case types.login:   
   return {
    ...action.payload,
    logged: true
   }
  
  case types.logout:   
   return {    
    logged: false
   }
 
  default:
   return state;
 }
}