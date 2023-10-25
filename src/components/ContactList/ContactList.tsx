import React, { useState } from 'react';
import { List, Item, Button, Input } from './ContactList.styled';

import { getFilteredContacts } from '../../redux/selectors';
import { deleteContacts, ChangeContact } from '../../redux/operations';
import { IContact } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {IForm}   from '../ContactForm/ContactForm';




function ContactList() {
  const contacts: IContact[] = useAppSelector(getFilteredContacts);
const dispatch = useAppDispatch();

  const [editingContact, setEditingContact] = useState<IContact | null>(null);
  const [updatedData, setUpdatedData] = useState<IForm | null>(null);

  const handleDelete = (id: string ) => {
     dispatch(deleteContacts(id) );
  }; 

  const handleEdit = (contact : IContact ) => {
    setEditingContact(contact);
    setUpdatedData({ ...contact });
  };

  const formatDateForServer = (date : string ) => {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  };

  const handleUpdate = ( id : string) => {
    const formattedDate = formatDateForServer(updatedData?.birthday_date!);
    const updatedDataFormatted = {
      ...updatedData,
      birthday_date: formattedDate,
    };

    dispatch(
      ChangeContact({contactId: id, ContactData: updatedDataFormatted}  )
    );
    setEditingContact(null);
  };

  return (
    <>
      {contacts.length && (
        <List>
          {contacts.map((contact : IContact  ) => (
            <Item key={contact.id}>
              {editingContact === contact ? (
                <div>
                  <Input
                    type="text"
                    value={updatedData?.name}
                    onChange={e =>
                      setUpdatedData({ ...updatedData!, name: e.target.value })
                    }
                  />
                  <Input
                    type="text"
                    value={updatedData?.email}
                    onChange={e =>
                      setUpdatedData({ ...updatedData!, email: e.target.value })
                    }
                  />
                  <Input
                    type="date"
                    value={updatedData?.birthday_date}
                    onChange={e => {
                      const value = e.target.value;
                      if (/^\d{4}-\d{2}-\d{2}$/.test(value) || value === '') {
                        setUpdatedData({
                          ...updatedData!,
                          birthday_date: value,
                        });
                      }
                    }}
                  />

                  <Input
                    type="text"
                    value={updatedData?.address}
                    onChange={e =>
                      setUpdatedData({
                        ...updatedData!,
                        address: e.target.value,
                      })
                    }
                  />
                  <Input
                    type="text"
                    value={updatedData?.phone_number}
                    onChange={e =>
                      setUpdatedData({
                        ...updatedData!,
                        phone_number: e.target.value,
                      })
                    }
                  />
                  <Button onClick={()=> handleUpdate((contact as IContact).id)}>Save</Button>
                </div>
              ) : (
                <div>
                  <p>{contact.name}:</p>
                  <p>{contact.email}</p>
                  <p>{contact.birthday_date}</p>
                  <p>{contact.address}</p>
                  <p>{contact.phone_number}</p>
                  <Button onClick={() => handleEdit(contact)}>Edit</Button>
                  <Button onClick={() => handleDelete(contact.id)}>
                    Delete
                  </Button>
                </div>
              )}
            </Item>
          ))}
        </List>
      )}
    </>
  );
}

export default ContactList;
