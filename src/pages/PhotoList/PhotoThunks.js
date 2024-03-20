
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  }
);
export const fetchAlbumsByUserId = createAsyncThunk(
  'albums/fetchAlbumsByUserId',
  async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    return response.json();
  }
);
export const fetchPhotosByAlbumId = createAsyncThunk(
  'photos/fetchPhotosByAlbumId',
  async (albumId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    return response.json();
  }
);