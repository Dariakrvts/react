import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json();
  console.log(data);
  return data
 });

export const fetchAlbumsByUserId = createAsyncThunk('albums/fetchAlbumsByUserId', async (userId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  const data = await response.json();
  return data
});

export const fetchPhotosByAlbumId = createAsyncThunk('photos/fetchPhotosByAlbumId', async (albumId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  const data = await response.json();
  return data
});

// export {fetchUsers, fetchAlbumsByUserId, fetchPhotosByAlbumId}; // экспорт сразу после создания
