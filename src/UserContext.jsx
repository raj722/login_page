import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '', email: '', age: null });

  const updateUser = (newUserDetails) => {
    setUser((prevUser) => ({ ...prevUser, ...newUserDetails }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
