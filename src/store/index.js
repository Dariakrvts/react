// store.js
import { configureStore } from "@reduxjs/toolkit";
import { usersReducer, albumsReducer, photosReducer } from "../pages/PhotoList/PhotoListSlice"

export const store = configureStore({
    reducer: {
        users: usersReducer,
        albums: albumsReducer,
        photos: photosReducer
    },
});
