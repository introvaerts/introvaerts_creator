import { useTokenContext } from '../../shared/utils/context.js';

const Signout = () => {
  //getting token from context
  const { setToken } = useTokenContext();

  //deleting token from local storage
  const handleSignOut = () => {
    localStorage.removeItem('accessToken');
    setToken(false);
  };

  return (
    <button type="button" onClick={handleSignOut}>
      Log Out
    </button>
  );
};

export default Signout;
