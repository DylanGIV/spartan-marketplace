import { createContext, useEffect, useState } from 'react';

export const RFQContext = createContext({
  rfqs: null,
  setRFQs: () => {},
});

export const RFQProvider = ({ children }) => {
  const [rfqs, setRFQs] = useState(null);

  const value = {
    rfqs,
    setRFQs,
  };

  return <RFQContext.Provider value={value}>{children}</RFQContext.Provider>;
};
