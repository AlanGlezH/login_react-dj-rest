const UserSession = (function () {
  let username = "";
  let email = "";
  let authenticated = true;

  const getUsername = () => {
    return username;
  };
  
  const setUsername = (name) => {
    username = name;
  }

  const getEmail = () => {
    return email;
  };

  const getAuthenticated = () => {
    return authenticated;
  };

  function setAuthenticated(auth){
    authenticated = auth;
  }

  return {
    getUsername,
    setUsername,
    getEmail,
    getAuthenticated,
    setAuthenticated
  };
})();

export default UserSession;
