import { useState } from 'react';
/* import { useHistory } from 'react-router-dom'; */
import Api from '../../shared/utils/api.js';
import { useTokenContext } from '../../shared/utils/context.js';
import { getToken, redirectAfterAuth } from '../../shared/utils/helpers';
import { SignUpContainer } from './Styles';
import Button from '../../shared/components/Button';
import FormRow from '../../shared/components/FormRow';

const Singup = props => {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
    confirmPassword: ``,
  });
  const { setToken } = useTokenContext();

  /*   const redirectAfterAuth = token => {
    if (token) {
      console.log('redirect to dashboard');
      props.history.push('/dashboard');
    } else console.log('redirection forbidden, no token available');
  }; */

  const sendCredentialsToServer = async () => {
    const { email, password } = userInput;
    if (email && password) {
      const response = await Api.createUser(email, password);
      switch (response.code) {
        case 201:
          setToken(getToken() ? true : false);
          redirectAfterAuth(response.token, 'dashboard', props);
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

  return (
    <SignUpContainer>
      <h1>Signup</h1>

      <form method="POST" onSubmit={handleSubmit}>
        <FormRow
          type="email"
          name="email"
          label="email"
          id="email"
          value={userInput.email}
          pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
          title="Please put in a valid email address: accountname@domainname.domain"
          required
          handleChange={handleUserInput}
        />
        <FormRow
          type="password"
          name="password"
          label="password"
          id="password"
          value={userInput.password}
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          title="Please put in a password with minimum eight characters, at least one upper case letter, one lower case letter, one number and one of these special characters (! @ # $ % & * ?)"
          required
          handleChange={handleUserInput}
        />
        <FormRow
          type="password"
          name="confirmPassword"
          label="confirm password"
          id="confirmPassword"
          value={userInput.confirmPassword}
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          title="Please put in a password with minimum eight characters, at least one upper case letter, one lower case letter, one number and one of these special characters (! @ # $ % & * ?)"
          required
          handleChange={handleUserInput}
        />
        <Button type="submit" id="submit" text="Submit" />
      </form>
    </SignUpContainer>
  );
};

export default Singup;
