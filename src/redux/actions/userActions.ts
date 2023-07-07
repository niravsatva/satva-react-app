import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET } from 'apis/utils/Requests';
import { authHandler } from '../../apis/handler/auth/index';

export const getAllUsersAction: any = createAsyncThunk(
  'users/getAllUSers',
  async () => {
    try {
      const users = await GET('http://localhost:3000/users');
      return users?.data;
    } catch (err) {
      return err;
    }
  }
);

export const addUserAction: any = createAsyncThunk(
  'users/addUser',
  async () => {
    try {
      const user = await authHandler.register({
        id: 6,
        name: 'New User',
        age: 25,
        position: 'Developer',
      });

      return user;
    } catch (err) {
      return err;
    }
  }
);
