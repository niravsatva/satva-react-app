import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import User from '../../interfaces/User';
import { addUserAction, getAllUsersAction } from '../actions/userActions';

export interface UserState {
  data: Array<User>;
  isLoading: boolean;
  error: string | null | any;
}

const initialState: UserState = {
  data: [],
  isLoading: false,
  error: null,
};

// Actions

const UserSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsersAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getAllUsersAction.fulfilled,
      (state, action: PayloadAction<Array<User>>) => {
        console.log('Action data: ', action?.payload);
        console.log('State: ', state?.data);
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(getAllUsersAction.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.error;
    });
    builder.addCase(
      addUserAction.fulfilled,
      (state, action: PayloadAction<Array<User>>) => {
        console.log('User:', action?.payload);
        state.data = [...state.data, action.payload] as Array<User>;
      }
    );
  },
});

export default UserSlice;
