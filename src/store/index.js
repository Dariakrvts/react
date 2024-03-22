// store.js
import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "../pages/PhotoList/PhotoListSlice";
import usersReducer from "../pages/PhotoList/PhotoListSlice";
import albumsReducer from "../pages/PhotoList/PhotoListSlice";

export const store = configureStore({
    reducer: {
        photo: photoReducer,
        users: usersReducer,
        albums: albumsReducer,
    },
});



// // store.js
// import { configureStore } from "@reduxjs/toolkit";
// import { usersReducer, albumsReducer, photosReducer } from "../pages/PhotoList/PhotoListSlice"

// export const store = configureStore({
//     reducer: {
//         users: usersReducer,
//         albums: albumsReducer,
//         photos: photosReducer
//     },
// });
