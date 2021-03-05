import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Api from '../../shared/utils/api.js';

const Singup = props => {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
    confirmPassword: ``,
  });

  const sendCredentialsToServer = async () => {
    const { email, password } = userInput;
    if (email && password) {
      const response = await Api.createUser(email, password);
      switch (response.code) {
        case 201:
          redirectLogIn(response.token);
          break;
        case 11000:
          console.log('User does already exists!');
          break;
        default:
          console.log('User is not created, please singup again.');
          break;
      }
    } else console.log('Please fill in the form.');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (userInput.password === userInput.confirmPassword)
      sendCredentialsToServer();
    else console.log('Passwords do not match');
  };

  const handleUserInput = e => {
    const { name, value } = e.target;

    setUserInput(userInput => ({
      ...userInput,
      [name]: value,
    }));
  };

  const redirectLogIn = token => {
    console.log('redirect to dashboard');
    console.log(token);
    //useHistory
    props.history.push('/dashboard');
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
          value={userInput.email}
          required
          onChange={handleUserInput}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={userInput.password}
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          title="Please put in a password with minimum eight characters, at least one upper case letter, one lower case letter, one number and one of these special characters (! @ # $ % & * ?)"
          required
          onChange={handleUserInput}
        />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="confirm password"
          value={userInput.confirmPassword}
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          title="Please put in a password with minimum eight characters, at least one upper case letter, one lower case letter, one number and one of these special characters (! @ # $ % & * ?)"
          required
          onChange={handleUserInput}
        />
        <input type="submit" id="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Singup;
