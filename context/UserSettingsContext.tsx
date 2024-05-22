import React, { createContext, useState, useContext } from 'react';
import { storage } from '@/utils/storage';

export const UserSettingsContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const UserSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(storage.getBoolean('isDarkMode') || false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    storage.set('isDarkMode', newMode);
  };

  return (
    <UserSettingsContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </UserSettingsContext.Provider>
  );
};

export const useUserSettings = () => useContext(UserSettingsContext);