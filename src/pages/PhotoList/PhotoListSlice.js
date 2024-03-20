import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchUsersStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const albumsSlice = createSlice({
  name: 'albums',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchAlbumsStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchAlbumsSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    fetchAlbumsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchPhotosStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchPhotosSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    fetchPhotosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure
} = usersSlice.actions;

export const {
  fetchAlbumsStart,
  fetchAlbumsSuccess,
  fetchAlbumsFailure
} = albumsSlice.actions;

export const {
  fetchPhotosStart,
  fetchPhotosSuccess,
  fetchPhotosFailure
} = photosSlice.actions;

export const usersReducer = usersSlice.reducer;
export const albumsReducer = albumsSlice.reducer;
export const photosReducer = photosSlice.reducer;
