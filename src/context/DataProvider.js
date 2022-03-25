import { StyleSheet, Text, View } from 'react-native';
import React, { createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider>
      { children }
    </DataContext.Provider>
  );
};