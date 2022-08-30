import { createContext, useState, useEffect } from 'react';

export const HoursContext = createContext();

export const HoursProvider = ({ children }) => {

  const [hours, setHours] = useState([
    { id: 99, name: "Seleccione una hora", value: "default" },
    { id: 1, name: "8:00 - 9:00", value: "H1" },
    { id: 2, name: "9:00 - 10:00", value: "H2" },
    { id: 3, name: "10:00 - 11:00", value: "H3" },
    { id: 4, name: "11:00 - 12:00", value: "H4" },
    { id: 5, name: "12:00 - 13:00", value: "H5" },
    { id: 6, name: "13:00 - 14:00", value: "H6" },
    { id: 7, name: "14:00 - 15:00", value: "H7" },
    { id: 8, name: "15:00 - 16:00", value: "H8" },
    { id: 9, name: "16:00 - 17:00", value: "H9" },
    { id: 10, name: "17:00 - 18:00", value: "H10" },
    { id: 11, name: "18:00 - 19:00", value: "H11" },
    { id: 12, name: "19:00 - 20:00", value: "H12"}])

  return (
    <HoursContext.Provider value={[hours, setHours]}>
      { children }
    </HoursContext.Provider>
  );
};