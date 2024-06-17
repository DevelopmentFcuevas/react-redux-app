import { configureStore } from "@reduxjs/toolkit";
//reducer
import users from "./slices/users";

//Configurar store
export default configureStore({
    reducer: {
        users
    }
});