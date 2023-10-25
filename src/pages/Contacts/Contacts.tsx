import { ContactForm } from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';

import { useSelector } from 'react-redux';
import { getIsloading } from '../../redux/selectors';
import { Loader } from '../../components/Loader/Loader';
import { Wrapper, FilterConractWrap } from './Friends.styled';

import { getContcts } from '../../redux/operations';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';

export function Contacts() {
  const isLoading = useSelector(getIsloading);

 const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getContcts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}

      <Wrapper>
        <div>
          <ContactForm />
        </div>
        <FilterConractWrap>
          <Filter value={''} />
          <ContactList />
        </FilterConractWrap>
      </Wrapper>
    </>
  );
}
