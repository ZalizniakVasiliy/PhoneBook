import {createSlice} from '@reduxjs/toolkit';

export const contactSlice = createSlice({
    name: 'contactsData',
    initialState: [],
    reducers: {
        addContact: (state, {payload}) => {
            state.push(payload);
        },

        deleteContact: (state, {payload}) => {
            return state.filter(singleContact => singleContact.id !== payload.id);
        },

        editContact: (state, {payload}) => {
            const {name, phoneNumber, position, id} = payload;
            const currentContact = state.find(currentElem => currentElem.id === id);

            if (currentContact) {
                currentContact.name = name;
                currentContact.phoneNumber = phoneNumber;
                currentContact.position = position;
            }
        }
    }
})

export const {addContact, deleteContact, editContact} = contactSlice.actions;
export default contactSlice.reducer;