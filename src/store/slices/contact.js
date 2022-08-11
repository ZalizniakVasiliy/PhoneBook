import {createSlice} from '@reduxjs/toolkit';

export const contactSlice = createSlice({
    name: 'contactsData',
    initialState: [],
    reducers: {
        addContact: (state, {payload}) => {
            const {firstName, lastName, phoneNumber} = payload;
            state.forEach(contact => {
                if ((firstName === contact.firstName && lastName === contact.lastName) ||
                    (phoneNumber === contact.phoneNumber)) {
                    alert(`The contact with a such unique data has already created`);
                    throw new Error('The contact with a such unique data has already created');
                }
            });
            state.push(payload);
        },

        editContact: (state, {payload}) => {
            const {firstName, lastName, phoneNumber, position, id} = payload;
            state.forEach(contact => {
                if ((firstName === contact.firstName && lastName === contact.lastName) ||
                    (phoneNumber === contact.phoneNumber)) {
                    alert(`The contact with a such unique data has already created`);
                    throw new Error('The contact with a such unique data has already created');
                }
            });
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