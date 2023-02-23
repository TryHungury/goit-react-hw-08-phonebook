import { configureStore } from "@reduxjs/toolkit";
import { filterInitState } from "./filter/filter.init-state";
import { contactsInitState } from "./contacts/contacts.init-state";
import { contactsReducer } from "./contacts/contacts.slice";
import { filterReducer } from "./filter/filter.slice";
import { authInitState } from './auth/auth.init-state';
import { authReducer } from './auth/auth.slice';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
// import {
//     // persistStore,
//     // persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist';

const initState = {
    auth: authInitState,
    contacts: contactsInitState,
    filter: filterInitState,
}

const persistConfig = {
  key: 'auth',
    storage,
  whitelist: ['token'],
}

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
// })

// const persistConfig = {
//     key: 'phone_book',
//     storage,
//   }

// const persistedReducer = persistReducer(persistConfig, contactsReducer)

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    preloadedState: initState,
    reducer: {
        auth: persistedReducer,
        contacts: contactsReducer,
        filter: filterReducer,
    },

    middleware: [thunk],
    devTools: true,

    // middleware: getDefaultMiddleware =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }
})

export const persistor = persistStore(store);