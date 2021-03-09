import { useState } from 'react';
import Api from '../../shared/utils/api.js';
import { useTokenContext } from '../../shared/utils/context.js';
import { getToken, redirectAfterAuth } from '../../shared/utils/helpers';

import { SIGNUP } from '../../navigation/CONSTANTS';

import { SignInContainer } from './Styles';
// import SectionContainer from '../../shared/components/SectionContainer';
import Button from '../../shared/components/Button';
import FormRow from '../../shared/components/FormRow';
import LinkModule from '../../shared/components/LinkModule';

const Signin = props => {
  //getting token from context
  const { token, setToken } = useTokenContext();

  console.log('props: ', props);

  //for storing user credentials
  const [userLogIn, setUserLogIn] = useState({
    email: '',
    password: '',
    message: null,
  });

  //for reading input from login form
  const handleChange = e => {
    const { id, value } = e.target;
    setUserLogIn(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  //submitting login credentials & storing token
  const handleLogIn = async e => {
    e.preventDefault();
    const userPayload = {
      email: userLogIn.email,
      password: userLogIn.password,
    };

    console.log('hola again');

    const response = await Api.login(userPayload);

    setToken(response.data.token ? true : false);

    if (response.data.token) {
      redirectAfterAuth(response.data.token, 'dashboard', props);
    }
  };

  /*   const redirectAfterAuth = token => {
    if (token) {
      console.log('redirect to dashboard');
      props.history.push('/dashboard');
    } else console.log('redirection forbidden, no token available');
  }; */

  return (
    <SignInContainer>
      <h1>Sign In</h1>
      <form method="POST" onSubmit={handleLogIn}>
        <FormRow
          htmlFor="email"
          label="email"
          type="email"
          id="email"
          name="email"
          value={userLogIn.email}
          handleChange={handleChange}
        />
        <FormRow
          htmlFor="password"
          label="password"
          type="password"
          id="password"
          name="password"
          value={userLogIn.password}
          handleChange={handleChange}
        />
        <Button type="submit" text="Submit" />
      </form>
      <LinkModule text="sign up" linkTo={SIGNUP} />
    </SignInContainer>
  );
};

export default Signin;
