import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = [
    {id: 0, name: 'Yehor', number: '+380966576683'},
    {id: 1, name: 'Halyna', number: '+380674908671'}
];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
});

export const contactsReduser = contactsSlice.reducer;