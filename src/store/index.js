import {configureStore} from '@reduxjs/toolkit';
import contactReducer from './slices/contact';

export default configureStore({
    reducer: {
        contactsData: contactReducer,
    },
});