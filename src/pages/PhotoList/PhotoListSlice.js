import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, fetchAlbumsByUserId, fetchPhotosByAlbumId } from '../PhotoList/PhotoThunks';

const initialState = {
  users: {
    list: [],
    loading: false,
    error: null
  },
  albums: {
    list: [],
    loading: false,
    error: null
  },
  photos: {
    list: [],
    loading: false,
    error: null
  }
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.users.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users.loading = false;
        state.users.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.users.loading = false;
        state.users.error = action.error.message;
      })
      .addCase(fetchAlbumsByUserId.pending, (state) => {
        state.albums.loading = true;
      })
      .addCase(fetchAlbumsByUserId.fulfilled, (state, action) => {
        state.albums.loading = false;
        state.albums.list = action.payload;
      })
      .addCase(fetchAlbumsByUserId.rejected, (state, action) => {
        state.albums.loading = false;
        state.albums.error = action.error.message;
      })
      .addCase(fetchPhotosByAlbumId.pending, (state) => {
        state.photos.loading = true;
      })
      .addCase(fetchPhotosByAlbumId.fulfilled, (state, action) => {
        state.photos.loading = false;
        state.photos.list = action.payload;
      })
      .addCase(fetchPhotosByAlbumId.rejected, (state, action) => {
        state.photos.loading = false;
        state.photos.error = action.error.message;
      });
  },
});

export default photoSlice.reducer;
