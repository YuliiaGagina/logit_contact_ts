import { createSlice, PayloadAction, } from '@reduxjs/toolkit';
// import produce, { WritableDraft } from 'immer';
import {
  getContcts,
  deleteContacts,
  addContacts,
  ChangeContact,
} from './operations';
import { IContact } from '../types/types';





interface ContactState {
  contacts: IContact[],
  isLoading: boolean,
  error: null | string,
}

const initialState : ContactState = {
  contacts: [],
  isLoading: false,
  error: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    resetError(state) {
      state.error = null;
    },
  },
  
  extraReducers: (builder) =>
      builder
        .addCase(getContcts.pending, state => {
          state.isLoading = true;
        })
        .addCase(getContcts.fulfilled, (state, action : PayloadAction<IContact[]> ) => {
          state.isLoading = false;
          state.contacts = [...action.payload].reverse();
        })
        .addCase(getContcts.rejected, (state   , {payload } )=> {
          state.isLoading = false;
          state.error = "Error Loading";
        })
        //  delete contact
        .addCase(deleteContacts.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(deleteContacts.fulfilled, (state, action : PayloadAction<IContact> ) => {
          state.contacts = state.contacts.filter(item => item.id !== action.payload.id);
          state.isLoading = false;
        })
        .addCase(deleteContacts.rejected, ( state, action ) => {
          state.error = "Error Loading";
          state.isLoading = false;
        })
        //  add contact
        .addCase(addContacts.pending, (state, action) => {
          state.isLoading = true;
        })
        .addCase(addContacts.fulfilled, (state, action : PayloadAction<IContact>) => {
          state.contacts = [action.payload, ...state.contacts];
          state.isLoading = false;
        })
        .addCase(addContacts.rejected, (state , action) => {
          state.error = "Error Loading";
          state.isLoading = false;
        })
        // change contacts
        .addCase(ChangeContact.pending, (state, action) => {
          state.isLoading = true;
        })
        .addCase(ChangeContact.fulfilled, (state, action : PayloadAction<IContact>) => {
        
          state.isLoading = false;
          state.error = null;
          const updatedContact = action.payload;
          const index = state.contacts.findIndex(
            contact => contact.id === updatedContact.id
          );

          if (index !== -1) {
            state.contacts[index] = updatedContact;
          }
        })
        .addCase(ChangeContact.rejected, (state , action) => {
       
          state.isLoading = false;
          state.error = "Error Loading";
        }),
  });

export const contactReducer = contactsSlice.reducer;



// export default commentSlice.reducer;
