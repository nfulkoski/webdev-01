import { UserActionTypes } from './user-types.js'

const INITIAL_STATE = {

  currentUser: null

}; 

const userReducer = (state = INITIAL_STATE, action) => {

  switch(action.type) {

    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;

  }


};

export default userReducer;


/*
Learning

- Note every reducer gets every action that's fired, even if not relevant to the reducer

- Provide state in each case as we only want to modify relevant values and return others

*/
