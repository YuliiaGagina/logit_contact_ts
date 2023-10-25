import { createSelector } from '@reduxjs/toolkit';
import { RootState } from "./store";


export const getContacts = (state : RootState) => state.contacts.contacts;
export const getFilter = (state : RootState) => state.filter.value;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],

  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const getIsloading = (state : RootState) => state.contacts.isLoading;