
import { getIsloading } from '../../redux/selectors';
import { useState, useEffect, FormEvent } from 'react';
import { getContacts } from '../../redux/selectors';

import { addContacts } from '../../redux/operations';
import { Loader } from '../Loader/Loader';


import {
  Form,
  Title,
  Text,
  Input,
  Wrapper,
  Button,
} from './ContactForm.styled';
import { IContact } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

 export interface IForm {
   name: string,
    email: string,
    birthday_date: string,
    phone_number: string,
    address: string,
}


export function ContactForm() {
  const isLoading = useAppSelector(getIsloading);
  const contacts = useAppSelector(getContacts);
   const dispatch = useAppDispatch();
  const [userMessage, setUserMessage] = useState<string>('');
  const [formData, setFormData] = useState<IForm>({
    name: '',
    email: '',
    birthday_date: '',
    phone_number: '',
    address: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone_number: '',
    birthday_date: '',
    address: '',
  });

  useEffect(() => {
    if (userMessage) {
      const timeoutId = setTimeout(() => {
        setUserMessage('');
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [userMessage]);

  const inputChange = ( event : React.ChangeEvent <HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setFormData({
      ...formData,
      [inputName]: inputValue,
    });
    validateInput(inputName, inputValue);
  };

  const validateInput = (inputName : string, inputValue : string) => {
    switch (inputName) {
      case 'name':
        setFormErrors(prevErrors => ({
          ...prevErrors,
          name:
            /^[a-zA-Zа-яА-Я\s]*$/.test(inputValue) || inputValue.trim() === ''
              ? ''
              : 'Invalid name format',
        }));
        break;
      case 'email':
        setFormErrors(prevErrors => ({
          ...prevErrors,
          email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(inputValue)
            ? ''
            : 'Invalid email format',
        }));
        break;
      case 'phone_number':
        if (inputValue.startsWith('+')) {
          if (!/^\+\d+$/.test(inputValue)) {
            setFormErrors(prevErrors => ({
              ...prevErrors,
              phone_number:
                'Invalid phone number format. Please enter numbers only after "+" sign.',
            }));
          } else {
            setFormErrors(prevErrors => ({
              ...prevErrors,
              phone_number: '',
            }));
          }
        } else {
          setFormErrors(prevErrors => ({
            ...prevErrors,
            phone_number: 'Phone number must start with a "+" sign',
          }));
        }
        break;

      case 'birthday_date':
        setFormErrors(prevErrors => ({
          ...prevErrors,
          birthday_date: /^\d{4}-\d{2}-\d{2}$/.test(inputValue)
            ? ''
            : 'Invalid date format (YYYY-MM-DD)',
        }));
        break;
      case 'address':
        if (!/^[a-zA-Zа-яА-Я0-9\s,' -]+$/.test(inputValue)) {
          setFormErrors(prevErrors => ({
            ...prevErrors,
            address: 'Invalid address format',
          }));
        } else {
          setFormErrors(prevErrors => ({
            ...prevErrors,
            address: '',
          }));
        }
        break;
      default:
        break;
    }

    if (inputValue.length < 1) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [inputName]: 'Field is required',
      }));
    }

    if (inputName === 'name' && inputValue.length > 255) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [inputName]: 'Name is too long (maximum 255 characters)',
      }));
    }

    if (inputName === 'email' && inputValue.length > 254) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [inputName]: 'Email is too long (maximum 254 characters)',
      }));
    }

    if (inputName === 'phone_number' && inputValue.length > 20) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [inputName]: 'Phone number is too long (maximum 20 characters)',
      }));
    }
  };

  const handleBlur =(inputName : keyof IForm)  => {
    if (formData[inputName].trim() === '' ) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [inputName]: 'Field is required',
      }));
    }
  };

  const handleSubmit = ( event : FormEvent, ) => {
    event.preventDefault();

    if (
      Object.values(formErrors).every(error => error === '') &&
      Object.values(formData).every(value => value !== '')
    ) {
      const contact = {
        name: formData.name,
        email: formData.email,
        birthday_date: formData.birthday_date,
        phone_number: formData.phone_number,
        address: formData.address,
      };

      if (
        contacts.some((p : IContact) => p.name === contact.name && p.email === contact.email)
      ) {
        setUserMessage(`Contact ${contact.name} already exists!`);
      } else {
        dispatch(addContacts(contact ));
        setUserMessage('Contact added successfully.');
        reset();
      }
    } else {
      setUserMessage('Please correct the form errors before submitting.');
    }
  };

  const reset = () => {
    setFormData({
      name: '',
      phone_number: '',
      email: '',
      birthday_date: '',
      address: '',
    });
    setFormErrors({
      name: '',
      email: '',
      phone_number: '',
      birthday_date: '',
      address: '',
    });
  };
  return (
    <>
      {isLoading && <Loader />}
      {userMessage && <div style={{ color: 'green' }}>{userMessage}</div>}
      <Form onSubmit={handleSubmit}>
        <Title>Add a new contact</Title>
        <Wrapper>
          <Text>Name</Text>
          <Input
            onChange={inputChange}
            onFocus={() => handleBlur('name')}
            value={formData.name}
            type="text"
            name="name"
            required
          />
          <div style={{ color: 'red' }} className="error">
            {formErrors.name}
          </div>
        </Wrapper>
        <Wrapper>
          <Text>Number</Text>
          <Input
            onChange={inputChange}
            onBlur={() => handleBlur('phone_number')}
            value={formData.phone_number}
            type="tel"
            name="phone_number"
            required
          />
          <div style={{ color: 'red' }} className="error">
            {formErrors.phone_number}
          </div>
        </Wrapper>
        <Wrapper>
          <Text>Email</Text>
          <Input
            onChange={inputChange}
            onBlur={() => handleBlur('email')}
            value={formData.email}
            type="email"
            name="email"
            required
          />
          <div style={{ color: 'red' }} className="error">
            {formErrors.email}
          </div>
        </Wrapper>
        <Wrapper>
          <Text>Birthday Date</Text>
          <Input
            onChange={inputChange}
            onBlur={() => handleBlur('birthday_date')}
            value={formData.birthday_date}
            type="date"
            name="birthday_date"
            required
          />
          <div style={{ color: 'red' }} className="error">
            {formErrors.birthday_date}
          </div>
        </Wrapper>
        <Wrapper>
          <Text>Address</Text>
          <Input
            onChange={inputChange}
            onBlur={() => handleBlur('address')}
            value={formData.address}
            type="text"
            name="address"
            required
          />
          <div style={{ color: 'red' }} className="error">
            {formErrors.address}
          </div>
        </Wrapper>
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
}
