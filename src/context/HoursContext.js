import { createContext, useState, useEffect } from 'react';
import hoursJson from '../constants/hours.json'
export const HoursContext = createContext();

export const HoursProvider = ({ children }) => {

  const [ hours, setHours ] = useState(hoursJson)

  return (
    <HoursContext.Provider value={[hours, setHours]}>
      { children }
    </HoursContext.Provider>
  );
};