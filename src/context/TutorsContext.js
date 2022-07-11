import { StyleSheet, Text, View } from 'react-native';
import React, { createContext } from 'react';
import { useState, useEffect } from 'react';

export const TutorsStudentsContext = createContext();

export const TutorsProvider = ({ children }) => {

  const [tutors, setTutors] = useState([
/* 
    {
      "id": "62804d814ab7faa5fb8e3b4f",
      "student": {
          "_id": "6264b11d01dfab5ad2db4ddf",
          "username": "john117",
          "password": "$2a$10$0Acsx8bx7ksNaZg.gRS65es0WWfESdY3R2J8qxwHKQXmfZBA/QxYy",
          "name": "Camilo",
          "lastname": "Lopez",
          "born_date": "12/05/1987",
          "profile_picture": "https://imgs.search.brave.com/GBLxonEYI_OAMfApYU2-OV4YFKkMARAbq8mFZoscPbo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZWFj/b3BpbmlvbmVzLmVz/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzAzL3VzZXItNi5w/bmc",
          "sex": "masculino",
          "email": "gafe21@hotmail.com",
          "phone": "8131956854",
          "myTutors": [
              "626750fa1889a7f90071d3de",
              "62672fe01889a7f90071d3dd",
              "6265b3495bce7cc5b6b7d341"
          ],
          "createdAt": "2022-04-24T02:08:29.293Z",
          "updatedAt": "2022-05-15T00:50:49.610Z",
          "__v": 0
      },
      "sesions": 4
  },
  {
      "id": "62830ccdc8279635d16484f1",
      "student": {
          "_id": "62804f1b4ab7faa5fb8e3b69",
          "username": "pedro123",
          "password": "$2a$10$CeHeCUlynmC.vxf5mNYCyuft6TG9NfU50Kcfhp0cQjYSAKWBLPnJ6",
          "name": "Antonio",
          "lastname": "Obrador",
          "born_date": "31/03/1977",
          "profile_picture": "https://imgs.search.brave.com/GBLxonEYI_OAMfApYU2-OV4YFKkMARAbq8mFZoscPbo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZWFj/b3BpbmlvbmVzLmVz/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzAzL3VzZXItNi5w/bmc",
          "sex": "masculino",
          "email": "pedro@gmail.com",
          "phone": "8131809297",
          "myTutors": [
              "626750fa1889a7f90071d3de"
          ],
          "createdAt": "2022-05-15T00:53:47.731Z",
          "updatedAt": "2022-05-23T23:24:36.250Z",
          "__v": 0
      },
      "sesions": 3
  } */
  ])

  /* useEffect(()=>{
    console.log(tutors)
  },[tutors]) */
  return (
    <TutorsStudentsContext.Provider value={[tutors, setTutors]}>
      { children }
    </TutorsStudentsContext.Provider>
  );
};