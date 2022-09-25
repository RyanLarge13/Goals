import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

export const regiser = createAsyncThunk('auth/register', async (user, thunkApi) => {
    try {
        await authService.register(user)
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
        return thunkApi.rejectWithValue(message); 
    }
}); 

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSucces = false;
            state.isError = false;
            state.message = '';
        }
    },
    extraReducers: () => {}
});

export const  { reset } = authSlice.actions;
export default authSlice.reducer;