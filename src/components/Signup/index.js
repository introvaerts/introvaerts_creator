import { useState } from 'react';
import Api from '../../shared/utils/api.js';

const Singup = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = userCredentials;
    // TODO: validation
    //email
    // password: Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character
    Api.createUser(email, password);
  };

  const handleUserInput = e => {
    console.log(e.target.value);
    const { name, value } = e.target;

    setUserCredentials(userCredentials => ({
      ...userCredentials,
      [name]: value,
    }));
    console.log(userCredentials);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form method="POST" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          required
          onChange={handleUserInput}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          required
          onChange={handleUserInput}
        />
        <input type="submit" id="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Singup;
