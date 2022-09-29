import { createSlice, createAsyncthunk } from '@reduxjs/toolkit';
import goalService from './goalService';

const initialState = {
    goals: {},
    isError: false,
    isSeccess: false,
    isLoading: false,
    message: '',
};

export const createGoal = createAsyncthunk('goals/create', async (goalData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await goalService.createGoal(goalData, token);
    } catch (err) {
        const message =
          (err.response && err.response.data && err.response.data.message) ||
          err.message ||
          err.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getGoals = createAsyncthunk('goals/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await goalService.getGoals(token);
    } catch (err) {
        const message =
          (err.response && err.response.data && err.response.data.message) ||
          err.message ||
          err.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const deleteGoal = createAsyncthunk(
  "goals/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await goalService.deleteGoal(id, token);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
          .addCase(createGoal.pending, (state) => (state.isLoading = true))
          .addCase(createGoal.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSeccess = true;
            state.goals.push(action.payload);
          })
          .addCase(createGoal.rejected, (state, message) => {
            state.isLoading = false;
            state.isError = true;
            state.message = message.payload;
          })
          .addCase(getGoals.pending, (state) => (state.isLoading = true))
          .addCase(getGoals.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSeccess = true;
            state.goals = action.payload;
          })
          .addCase(getGoals.rejected, (state, message) => {
            state.isLoading = false;
            state.isError = true;
            state.message = message.payload;
          })
          .addCase(deleteGoal.pending, (state) => (state.isLoading = true))
          .addCase(deleteGoal.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSeccess = true;
            state.goals = state.goals.filter((goal) => goal._id !== action.payload.id);
          })
          .addCase(deleteGoal.rejected, (state, message) => {
            state.isLoading = false;
            state.isError = true;
            state.message = message.payload;
          });
    }
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer