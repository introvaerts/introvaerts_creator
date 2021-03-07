import { useState } from 'react';
import Api from '../../shared/utils/api.js';
import { useTokenContext } from '../../shared/utils/context.js';

import Button from '../../shared/components/Button';

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
    <div>
      <h2>Sign In</h2>
      <form method="POST">
        <label htmlFor="email">
          email:{' '}
          <input
            type="email"
            id="email"
            name="email"
            value={userLogIn.email}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="password">
          password:{' '}
          <input
            type="password"
            id="password"
            name="password"
            value={userLogIn.password}
            onChange={handleChange}
          ></input>
        </label>
        <Button type="submit" handleClick={handleLogIn} text="Submit" />
      </form>
      {/* testing the token & log fx */}
      {token ? (
        <div style={{ marginTop: '30px' }}>
          <h3>you are in!</h3>
        </div>
      ) : null}
    </div>
  );
};

export default Signin;
