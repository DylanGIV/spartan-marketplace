import { createContext, useEffect, useState } from 'react';

export const InventoryContext = createContext({
  isAddPartOpen: false,
  setIsAddPartOpen: () => {},
  isImportPartOpen: false,
  setIsImportPartOpen: () => {},
  isDeleteAllPartOpen: false,
  setIsDeleteAllPartOpen: () => {},
});

export const InventoryProvider = ({ children }) => {
  const [isAddPartOpen, setIsAddPartOpen] = useState(false);
  const [isImportPartOpen, setIsImportPartOpen] = useState(false);
  const [isDeleteAllPartOpen, setIsDeleteAllPartOpen] = useState(false);

  const value = {
    isAddPartOpen,
    setIsAddPartOpen,
    isImportPartOpen,
    setIsImportPartOpen,
    isDeleteAllPartOpen,
    setIsDeleteAllPartOpen,
  };

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
};
