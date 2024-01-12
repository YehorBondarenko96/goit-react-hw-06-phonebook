import { createStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
});

const persistConfig = {
    key: 'reduxStorage',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore (persistedReducer);

export const persistor = persistStore(store);