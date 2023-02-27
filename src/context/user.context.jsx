import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({
  company: null,
  user: null,
  userDetails: null,
  refreshPage: false,
  countries: null,
  setUser: () => {},
  setCompany: () => {},
  setUserDetails: () => {},
  setRefreshPage: () => {},
  setCountries: () => {},
});

export const UserProvider = ({ children }) => {
  const [company, setCompany] = useState(null);
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [refreshPage, setRefreshPage] = useState(false);
  const [countries, setCountries] = useState(null);

  const value = {
    company,
    user,
    userDetails,
    setCompany,
    setUser,
    setUserDetails,
    refreshPage,
    setRefreshPage,
    countries,
    setCountries,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
