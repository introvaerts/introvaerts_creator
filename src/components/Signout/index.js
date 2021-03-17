import { useTokenContext } from '../../shared/utils/context.js';
import Button from '../../shared/components/Button/';

const Signout = () => {
  //getting token from context
  const { setToken } = useTokenContext();

  //deleting token from local storage
  const handleSignOut = () => {
    localStorage.removeItem('accessToken');
    setToken(false);
  };

  return (
    <>
      <Button text="Log Out" handleClick={handleSignOut} />
    </>
  );
};

export default Signout;
