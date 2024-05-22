import React, { createContext, useState, useContext } from 'react';
import { storage } from '@/utils/storage';
import { useColorScheme } from 'react-native';

export const UserSettingsContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const UserSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(storage.getString('theme') || useColorScheme() || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    storage.set('theme', newTheme);
  };

  return (
    <UserSettingsContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </UserSettingsContext.Provider>
  );
};

export const useUserSettings = () => useContext(UserSettingsContext);