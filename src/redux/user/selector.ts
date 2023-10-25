import { RootState } from "../store";


export const selectIsLoggedIn = (state : RootState) => state.user.isLoggedIn;

export const selectUser = (state : RootState)=> state.user.user;

export const selectToken = (state : RootState)=> state.user.token;
