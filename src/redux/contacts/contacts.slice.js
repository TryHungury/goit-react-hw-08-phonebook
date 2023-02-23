import { createSlice } from "@reduxjs/toolkit";
import { contactsInitState } from "./contacts.init-state";
import { addContactsThunk, deleteContactsThunk, editContactsThunk, fetchContactsThunk } from "./contacts.thunk";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitState,
    
    extraReducers: builder => {
        builder
        
            .addCase(fetchContactsThunk.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
                state.items = [...payload];
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchContactsThunk.rejected, (state, { payload }) => {
                state.error = payload;
                state.isLoading = false;
            })

            .addCase(deleteContactsThunk.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
                state.items = state.items.filter(contact => contact.id !== payload);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deleteContactsThunk.rejected, (state, { payload }) => {
                state.error = payload;
                state.isLoading = false;
            })

            .addCase(addContactsThunk.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
                state.items = [...state.items, payload];
                state.isLoading = false;
                state.error = null;
            })
            .addCase(addContactsThunk.rejected, (state, { payload }) => {
                state.error = payload;
                state.isLoading = false;
            })
 
            .addCase(editContactsThunk.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(editContactsThunk.fulfilled, (state, { payload }) => {
                state.items = state.items.map(item => item.id === payload.id ? payload : item)

                // array: state.array.map(n => n.id === action.newObject.id ? action.newObject : n),
                    
                state.isLoading = false;
                state.error = null;
            })
            .addCase(editContactsThunk.rejected, (state, { payload }) => {
                state.error = payload;
                state.isLoading = false;
            })
    }
})



export const contactsReducer = contactsSlice.reducer;

// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: contactsInitState,
//     reducers: {
//         // contactsListAction: (state, {payload}) => {(state.contacts.items).push(payload)},
//         // contactsListDeleteAction: (state, {payload})=> {state.contacts.items = (state.contacts.items.filter((contact) => contact.id !== payload))}
//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchContactsThunk.pending, (state) => {
//             (state.isLoading) = true})
//         // [fetchContactsThunk.pending]: (state) => {
//         //     (state.isLoading) = true},
//         .addCase(fetchContactsThunk.fulfilled, (state, {payload}) => {
//             (state.items) = payload; 
//             (state.isLoading) = false})
//         // [fetchContactsThunk.fulfilled]: (state, {payload}) => {
//         //     (state.items) = payload; 
//         //     (state.isLoading) = false},
//         .addCase(fetchContactsThunk.rejected, (state, {error}) => {
//             (state.error) = error.message;
//             (state.isLoading) = false})
//         // [fetchContactsThunk.rejected]: (state, {error}) => {
//         //     (state.error) = error.message;
//         //     (state.isLoading) = false},
//         .addCase(addContactsThunk.pending, (state) => {
//             (state.isLoading) = true})
//         // [addContactsThunk.pending]: (state) => {
//         //     (state.isLoading) = true},
//         .addCase(addContactsThunk.fulfilled, (state, {payload}) => {(state.items).push(payload); 
//             (state.isLoading) = false})
//         // [addContactsThunk.fulfilled]: (state, {payload}) => {(state.items).push(payload); 
//         //     (state.isLoading) = false},
//         .addCase(addContactsThunk.rejected, (state, {error}) => {
//             (state.error) = error.message; 
//             (state.isLoading) = false})
//         // [addContactsThunk.rejected]: (state, {error}) => {
//         //     (state.error) = error.message; 
//         //     (state.isLoading) = false},
//         .addCase(deleteContactsThunk.pending,  (state) => {
//             (state.isLoading) = true})
//         // [deleteContactsThunk.pending]: (state) => {
//         //     (state.isLoading) = true},
//         .addCase(deleteContactsThunk.fulfilled, (state, {payload})=> {(state.items) = (state.items.filter((contact) => contact.id !== payload.id)); 
//             (state.isLoading) = false})
//         // [deleteContactsThunk.fulfilled]: (state, {payload})=> {(state.items) = (state.items.filter((contact) => contact.id !== payload.id)); 
//         //     (state.isLoading) = false},
//         .addCase(deleteContactsThunk.rejected, (state, {error}) => {
//             (state.error) = error.message; 
//             (state.isLoading) = false})
//         // [deleteContactsThunk.rejected]: (state, {error}) => {
//         //     (state.error) = error.message; 
//         //     (state.isLoading) = false},
//         }
//     })

// export const { contactsListAction, contactsListDeleteAction } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;