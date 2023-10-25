import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';

export const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      {isLoggedIn ? <AuthNav /> : <UserMenu />}
      <Outlet />
    </div>
  );
};
