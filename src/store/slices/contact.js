import {createSlice} from '@reduxjs/toolkit';

export const contactSlice = createSlice({
    name: 'contactsData',
    initialState: [],
    reducers: {
        addContact: (state, {payload}) => {
            state.push(payload);
        },

        editContact: (state, {payload}) => {
            const {firstName, lastName, phoneNumber, position, id} = payload;
            const currentContact = state.find(currentElem => currentElem.id === id);
            currentContact.firstName = firstName;
            currentContact.lastName = lastName;
            currentContact.phoneNumber = phoneNumber;
            currentContact.position = position;
        },

        deleteContact: (state, {payload}) => {
            return state.filter(singleContact => singleContact.id !== payload.id);
        },
    },
});

export const {addContact, editContact, deleteContact} = contactSlice.actions;
export default contactSlice.reducer;