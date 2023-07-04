import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { authHandler } from '../../apis/handler/auth/index';
import { GET } from 'apis/utils/Requests';

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
