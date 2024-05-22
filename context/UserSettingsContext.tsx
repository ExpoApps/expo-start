import React, { createContext, useState, useContext } from 'react';

type UserSettingsContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const defaultUserSettings: UserSettingsContextType = {
  isDarkMode: false,
  toggleDarkMode: () => {},
};

export const UserSettingsContext = createContext<UserSettingsContextType>(defaultUserSettings);

export const UserSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <UserSettingsContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </UserSettingsContext.Provider>
  );
};

export const useUserSettings = () => useContext(UserSettingsContext);