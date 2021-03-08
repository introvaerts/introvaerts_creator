import { useState } from 'react';
import Api from '../../shared/utils/api.js';
import { useTokenContext } from '../../shared/utils/context.js';
import { getToken, redirectAfterAuth } from '../../shared/utils/helpers';

import { SignInContainer } from './Styles';
// import SectionContainer from '../../shared/components/SectionContainer';
import Button from '../../shared/components/Button';
import FormRow from '../../shared/components/FormRow';

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
    const response = await Api.login(userPayload);
    setToken(getToken() ? true : false);
  };

  if (token) {
    redirectAfterAuth(getToken(), 'dashboard', props);
  }

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

      {/* testing the token & log fx */}
      {token ? (
        <div style={{ marginTop: '30px' }}>
          <h3>you are in!</h3>
        </div>
      ) : null}
    </SignInContainer>
  );
};

export default Signin;
