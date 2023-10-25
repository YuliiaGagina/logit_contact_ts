import { NavLink } from 'react-router-dom';

import { HeaderWrapper } from './UserMenu.styled';
export const UserMenu = () => {
  return (
    <HeaderWrapper>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>

      <ul>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
      </ul>
    </HeaderWrapper>
  );
};
