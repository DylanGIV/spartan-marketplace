import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({
  company: null,
  user: null,
  userDetails: null,
  setUser: () => {},
  setCompany: () => {},
  setUserDetails: () => {},
});

export const UserProvider = ({ children }) => {
  const [company, setCompany] = useState(null);
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const value = {
    company,
    user,
    userDetails,
    setCompany,
    setUser,
    setUserDetails,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
