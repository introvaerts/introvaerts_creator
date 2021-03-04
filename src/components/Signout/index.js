const Signout = () => {
  //deleting token from local storage
  const handleLogOut = () => {
    localStorage.removeItem('accessToken');
  };

  return (
    <button type="button" onClick={handleLogOut}>
      Log Out
    </button>
  );
};

export default Signout;
