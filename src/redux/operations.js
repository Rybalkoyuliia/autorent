import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65ea2b37c9bf92ae3d3b33a5.mockapi.io/';
const initialPage = 1;
export const fetchDataThunk = createAsyncThunk(
  'fetchAll',
  async (parameters = initialPage, thunkAPI) => {
    try {
      const { data } = await axios.get('Advert', {
        params: {
          limit: 12 * parameters,
          page: 1,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
