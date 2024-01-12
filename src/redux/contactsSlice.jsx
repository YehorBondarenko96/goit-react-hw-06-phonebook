import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
    {id: 0, name: 'Yehor', number: '+380966576683'},
    {id: 1, name: 'Halyna', number: '+380674908671'}
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
    }
});

export const {addContact} = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;