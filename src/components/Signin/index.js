import { useState } from 'react';
import Api from '../../shared/utils/api.js';

const Signin = () => {
  const [userLogIn, setUserLogIn] = useState({
    email: '',
    password: '',
    message: null,
  });

  const [token, setToken] = useState('');

  const handleChange = e => {
    const { id, value } = e.target;
    setUserLogIn(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleLogIn = async e => {
    e.preventDefault();
    const userPayload = {
      email: userLogIn.email,
      password: userLogIn.password,
    };
    const data = await Api.login(userPayload);

    setToken(localStorage.getItem('accessToken'));
  };

  const handleLogOut = () => {
    localStorage.removeItem('accessToken');
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form method="POST">
        <label for="email">
          email:{' '}
          <input
            type="email"
            id="email"
            name="email"
            value={userLogIn.email}
            onChange={handleChange}
          ></input>
        </label>
        <label for="password">
          password:{' '}
          <input
            type="password"
            id="password"
            name="password"
            value={userLogIn.password}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit" onClick={handleLogIn}>
          Submit
        </button>
        <button type="submit" onClick={handleLogOut}>
          Log Out
        </button>
      </form>
      {token !== '' ? (
        <div style={{ marginTop: '30px' }}>
          <h3>you are in!</h3>
          <p> here is your token: </p>
          {token}
        </div>
      ) : null}
    </div>
  );
};

export default Signin;
