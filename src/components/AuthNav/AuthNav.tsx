import { NavLink } from 'react-router-dom';

import { HeaderWrapper } from './AuthNav.styled';
import { useAuth } from '../../hooks/useAuth';

export const AuthNav = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <HeaderWrapper>
      <ul>
        <li>
          <NavLink to="contacts">My contacts</NavLink>
        </li>
      </ul>
      <p> Welcome, dear testuser !</p>
    </HeaderWrapper>
  );
};
