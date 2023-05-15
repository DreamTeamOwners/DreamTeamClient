import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/authService';

export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await authService.login(username, password);
      return {...response,username};
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const registrationAsync = createAsyncThunk(
  'auth/registrationAsync',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      console.log('reg'+username)
      const response = await authService.registration(username, email, password);
      return {...response,username,email};
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    login(state, action) {
      state.isAuth = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuth = false;
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        const user = {
          username: action.payload.username
        }
        state.user = user;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(registrationAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registrationAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        const user = {
          username: action.payload.username,
          email: action.payload.email
        }
        state.user = user;
      })
      .addCase(registrationAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {actions, reducer} = authSlice
//export const {login,logout} = authSlice.actions;
//export const {reducer} = authSlice.reducer;
