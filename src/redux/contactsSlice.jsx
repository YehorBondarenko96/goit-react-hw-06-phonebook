import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
    {id: 0, name: 'Yehor', number: '+380966576683'},
    {id: 1, name: 'Halyna', number: '+380674908671'},
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer (state, action){
                state.push(action.payload);
            },
            prepare (name, number){
                return {
                    payload: {
                        id: nanoid(),
                        name: name,
                        number: number
                    }
                }
            }
        },
        deleteContact (state, action){
            const indexContact = state.findIndex(contact => String(contact.id) === action.payload);
            if (indexContact !== -1) {
                state.splice(indexContact, 1);
            }
        }
    }
});

export const {addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;