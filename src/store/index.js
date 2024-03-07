import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import loginReducer from "../features/login/loginSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        login: loginReducer,
        users: usersReducer,
    },
});