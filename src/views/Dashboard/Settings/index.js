import { useState, useEffect } from 'react';

// api
/* import Api from '../../../shared/utils/api'; */
// shared components
import SectionContainer from '../../../shared/components/SectionContainer';
import FormRow from '../../../shared/components/FormRow';
import Button from '../../../shared/components/Button';

const Settings = ({ userEmail }) => {
  const [userInput, setUserInput] = useState({
    userEmail: '',
    userPassword: '',
    confirmUserPassword: ``,
  });
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    if (userEmail) setUserInput({ ...userInput, userEmail: userEmail });
  }, [userEmail]);

  const handleUserInput = e => {
    const { name, value } = e.target;

    setUserInput(userInput => ({
      ...userInput,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    setErrorMessages({});
    e.preventDefault();
    if (userInput.password === userInput.confirmPassword)
      console.log('send Credentials to server');
    /* sendCredentialsToServer(); */ else console.log('Passwords do not match');
  };
  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        {/* EMAIL */}
        <SectionContainer border="yes" padding="2">
          <h2>Email</h2>
          <FormRow
            width="25"
            marginLeft="33"
            htmlFor="userEmail"
            label="User Email"
            type="email"
            id="userEmail"
            name="serEmail"
            value={userInput.userEmail}
            pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
            title="Please put in a valid email address: accountname@domainname.domain"
            required={true}
            handleChange={handleUserInput}
          />
        </SectionContainer>
        {/* PASSWORD */}
        <SectionContainer border="yes" padding="2">
          <h2>Password</h2>
          <FormRow
            width="25"
            marginLeft="33"
            htmlFor="userPassword"
            type="password"
            label="Password"
            id="userPassword"
            name="userPassword"
            value={userInput.userPassword}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            title="Please put in a password with minimum eight characters, at least one upper case letter, one lower case letter, one number and one of these special characters (! @ # $ % & * ?)"
            required={true}
            handleChange={handleUserInput}
            errorMessage={errorMessages.userPassword}
          />
          <FormRow
            width="25"
            marginLeft="33"
            htmlFor="confirmUserPassword"
            type="password"
            label="Confirm Password"
            id="confirmUserPassword"
            name="confirmUserPassword"
            value={userInput.confirmUserPassword}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            title="Please put in a password with minimum eight characters, at least one upper case letter, one lower case letter, one number and one of these special characters (! @ # $ % & * ?)"
            required={true}
            handleChange={handleUserInput}
            errorMessage={errorMessages.confirmUserPassword}
          />
        </SectionContainer>
        {/* SUBMIT */}
        <SectionContainer borderBottom="yes" padding="2" align="center">
          <Button type="submit" text="Submit" />
        </SectionContainer>
      </form>
    </>
  );
};

export default Settings;
