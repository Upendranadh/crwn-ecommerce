import { UserActionsTypes } from "./User.action.Types";

const initial_State = {
  currentUser: null,
};

const userReducer = (state = initial_State, action) => {
  switch (action.type) {
    case UserActionsTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
