import { UserActionsTypes } from "./User.action.Types";

export const setCurrentUser = (user) => ({
  type: UserActionsTypes.SET_CURRENT_USER,
  payload: user,
});
