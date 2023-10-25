import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login } from './operations';

 export interface IUser {
  username: string;
  password: string;
}

 export interface UserState {
  user: IUser | undefined,
  token: string | null,
  isLoggedIn: boolean;
  error: null | string;
}

const initialState: UserState = {
  user: undefined,
  token: null,
  isLoggedIn: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
    reducers: {
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers: bulder =>
    bulder
      .addCase(login.fulfilled, (state, action: PayloadAction<UserState>) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, { error }) => {
        state.error =
          'Ви ввели не правильні данні. Логін або пароль не вірні. Спробуйте ще раз.'; // Зберігаємо повідомлення про помилку при невдалому вході
      }),
});

export const userReducer = userSlice.reducer;
