import { StyleSheet, Text, View } from 'react-native';
import React, { createContext } from 'react';
import { useState, useEffect } from 'react';

export const TutorsContext = createContext();

export const TutorsProvider = ({ children }) => {

  const [tutors, setTutors] = useState([])

  useEffect(()=>{
    console.log(tutors)
  },[tutors])
  return (
    <TutorsContext.Provider value={[tutors, setTutors]}>
      { children }
    </TutorsContext.Provider>
  );
};