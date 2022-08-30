import React, { createContext } from 'react';
import { useState, useEffect } from 'react';

export const TutorsStudentsContext = createContext();

export const TutorsProvider = ({ children }) => {

  const [tutors, setTutors] = useState([])

  return (
    <TutorsStudentsContext.Provider value={[tutors, setTutors]}>
      { children }
    </TutorsStudentsContext.Provider>
  );
};