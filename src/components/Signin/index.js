import { useState } from 'react';
import Api from '../../shared/utils/api.js';
import { useTokenContext } from '../../shared/utils/context.js';

import { SignInContainer } from './Styles';
import Button from '../../shared/components/Button';
import FormRow from '../../shared/components/FormRow';

const Signin = () => {
  //getting token from context
  const { token, setToken } = useTokenContext();

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
    await Api.login(userPayload);
    setToken(localStorage.getItem('accessToken') ? true : false);
  };

  return (
    <SignInContainer>
      <h2>Sign In</h2>
      <form method="POST">
        <FormRow
          htmlFor="email"
          label="email"
          type="email"
          id="email"
          name="email"
          value={userLogIn.email}
          handleChange={handleChange}
          required
        />
        <FormRow
          htmlFor="password"
          label="password"
          type="password"
          id="password"
          name="password"
          value={userLogIn.password}
          handleChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
          title="Please put in a valid email address: accountname@domainname.domain"
          required
        ></input>

        <Button type="submit" handleClick={handleLogIn} text="Submit" />
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
