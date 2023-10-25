
import { login } from '../../redux/user/operations';

import {
  SectionWrapper,
  Form,
  Title,
  Input,
  Label,
  Button,
} from './Login.styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IUser } from '../../redux/user/userSlise';
interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

export const Login = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.user.error);

  const handelSubmit = (event?:   HTMLInputEvent | any) => {
    event.preventDefault();
    
    const { name, password } = event.target.elements ;
    const user : IUser = {
      username: name.value,
      password: password.value,
    };
    dispatch(login(user));

    event.target.reset();
  };
  return (
    <SectionWrapper>
      <Title>Log in and see your all people!</Title>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      <Form onSubmit={handelSubmit}>
        <Label htmlFor="name">Your Email:</Label>
        <Input type="text" id="name" name="name" placeholder="Your name" />
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="*******"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </SectionWrapper>
  );
};
