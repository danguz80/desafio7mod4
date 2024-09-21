import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(false); // Token por defecto en false

  const logout = () => {
    setToken(false); // Cambiar token a false cuando se hace logout
  };

  const login = () => {
    setToken(true); // Simular login cambiando el token a true
  };

  return (
    <UserContext.Provider value={{ token, logout, login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
