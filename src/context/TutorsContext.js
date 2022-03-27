import { StyleSheet, Text, View } from 'react-native';
import React, { createContext } from 'react';
import { useState } from 'react';

export const TutorsContext = createContext();

export const TutorsProvider = ({ children }) => {

  const [tutors, setTutors] = useState([
    {
      id:'fernanelcrackcarajo',
      name: 'Luis',
      middleName: 'Fernando',
      lastname:'Flores',
      specialization: 'Web Development',
      profilePic: 'https://imgs.search.brave.com/nPKsMRFSLZZ76NxLK0Ac1nyKEyE1X7r5fKxAv2s5LIc/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKd3Q4eWJT/WnFLcnNqX3Jwa0pI/OTE4c09rRnNocnBC/Wmt1TT1zOTAwLWMt/ay1jMHhmZmZmZmZm/Zi1uby1yai1tbw',
      stars:4,
      studies: [
        {
          id:'1',
          study:'Lic. en Informática',
          school:'Harvard',
          img:'https://imgs.search.brave.com/OvJ1E340rm9rAw6V-0qD62Zd9aG3MHbmf59Ro0KS1n0/rs:fit:1200:1200:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly1lOWJVRVB2a3pi/Zy9UaGE3R3RCeGo0/SS9BQUFBQUFBQUkz/ay9RY2dUM0hwd1Vw/OC9zMTYwMC9IYXJ2/YXJkJTJCVW5pdmVy/c2l0eSUyQlVTQSUy/QldhbGxwYXBlcnMl/MkJieSUyQmNvb2wl/MkJ3YWxscGFwZXJz/JTJCJTI1MjgxJTI1/MjkuanBn'
        },
        {
          id:'2',
          study: 'Curso avanzado de Git',
          school:'Udemy',
          img:'https://imgs.search.brave.com/P8tgN3JjEO3M5UgZG_t4k8XKgJ8MKecubq1JiMRTuAU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvZ2l0/LWljb24tbG9nby1w/bmctdHJhbnNwYXJl/bnQucG5n'
        }
      ],
      insights:[
        {
          id:1,
          name:'HTML'
        },
        {
          id:2,
          name:'React'
        },
        {
          id:3,
          name:'CSS'
        },
        {
          id:4,
          name:'REST API'
        },
        {
          id:5,
          name:'MongoDB'
        },
      ],
      fee:200
    },
    {
      id:'fgmamasdfgna',
      name: 'Bryce',
      middleName: '',
      lastname:'Howard',
      specialization: 'Acting',
      profilePic:'https://imgs.search.brave.com/-w_CnUK-xpjq7jgXIZ8Fifyh3DtFNZB_T7SNnkQ1rEA/rs:fit:1200:1200:1/g:ce/aHR0cDovL2ltYWdl/LnRtZGIub3JnL3Qv/cC9vcmlnaW5hbC9w/N1cwRTVKNkZwVE1P/RHhPT0Zid3NkeE9Q/bWwuanBn',
      stars:5,
      studies: [
        {
          id:'1',
          study:'Lic. en Informática',
          school:'Harvard',
          img:'https://imgs.search.brave.com/OvJ1E340rm9rAw6V-0qD62Zd9aG3MHbmf59Ro0KS1n0/rs:fit:1200:1200:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly1lOWJVRVB2a3pi/Zy9UaGE3R3RCeGo0/SS9BQUFBQUFBQUkz/ay9RY2dUM0hwd1Vw/OC9zMTYwMC9IYXJ2/YXJkJTJCVW5pdmVy/c2l0eSUyQlVTQSUy/QldhbGxwYXBlcnMl/MkJieSUyQmNvb2wl/MkJ3YWxscGFwZXJz/JTJCJTI1MjgxJTI1/MjkuanBn'
        },
        {
          id:'2',
          study: 'Curso avanzado de Git',
          school:'Udemy',
          img:'https://imgs.search.brave.com/P8tgN3JjEO3M5UgZG_t4k8XKgJ8MKecubq1JiMRTuAU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvZ2l0/LWljb24tbG9nby1w/bmctdHJhbnNwYXJl/bnQucG5n'
        }
      ],
      insights:[
        {
          id:1,
          name:'HTML'
        },
        {
          id:2,
          name:'React'
        },
        {
          id:3,
          name:'CSS'
        },
        {
          id:4,
          name:'REST API'
        },
        {
          id:5,
          name:'MongoDB'
        },
      ],
      fee:200
    },
    {
      id:'asidfqpniewnipfone3iofe',
      name: 'John',
      middleName: '',
      lastname:'Smith',
      specialization:'Basktetball',
      profilePic: 'https://imgs.search.brave.com/SMswVKwY3R1-mQWMHp7o9aDseLC-7VeMWJ0l9u379Ls/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly90b3du/c3F1YXJlLm1lZGlh/L3NpdGUvODEyL2Zp/bGVzLzIwMTcvMDMv/bWV0aG9kLW1hbjEu/anBnP3c9MTIwMCZo/PTAmemM9MSZzPTAm/YT10JnE9ODk',
      stars:2,
      studies: [
        {
          id:'1',
          study:'Lic. en Informática',
          school:'Harvard',
          img:'https://imgs.search.brave.com/OvJ1E340rm9rAw6V-0qD62Zd9aG3MHbmf59Ro0KS1n0/rs:fit:1200:1200:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly1lOWJVRVB2a3pi/Zy9UaGE3R3RCeGo0/SS9BQUFBQUFBQUkz/ay9RY2dUM0hwd1Vw/OC9zMTYwMC9IYXJ2/YXJkJTJCVW5pdmVy/c2l0eSUyQlVTQSUy/QldhbGxwYXBlcnMl/MkJieSUyQmNvb2wl/MkJ3YWxscGFwZXJz/JTJCJTI1MjgxJTI1/MjkuanBn'
        },
        {
          id:'2',
          study: 'Curso avanzado de Git',
          school:'Udemy',
          img:'https://imgs.search.brave.com/P8tgN3JjEO3M5UgZG_t4k8XKgJ8MKecubq1JiMRTuAU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvZ2l0/LWljb24tbG9nby1w/bmctdHJhbnNwYXJl/bnQucG5n'
        }
      ],
      insights:[
        {
          id:1,
          name:'HTML'
        },
        {
          id:2,
          name:'React'
        },
        {
          id:3,
          name:'CSS'
        },
        {
          id:4,
          name:'REST API'
        },
        {
          id:5,
          name:'MongoDB'
        },
      ],
      fee:200
    },
    {
      id:'feergerrnargergnelregercracrgergk2cagrraergerjo',
      name: 'Luis',
      middleName: 'Fernando',
      lastname:'Flores',
      specialization: 'Web Development',
      profilePic: 'https://imgs.search.brave.com/nPKsMRFSLZZ76NxLK0Ac1nyKEyE1X7r5fKxAv2s5LIc/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKd3Q4eWJT/WnFLcnNqX3Jwa0pI/OTE4c09rRnNocnBC/Wmt1TT1zOTAwLWMt/ay1jMHhmZmZmZmZm/Zi1uby1yai1tbw',
      stars:1,
      studies: [
        {
          id:'1',
          study:'Lic. en Informática',
          school:'Harvard',
          img:'https://imgs.search.brave.com/OvJ1E340rm9rAw6V-0qD62Zd9aG3MHbmf59Ro0KS1n0/rs:fit:1200:1200:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly1lOWJVRVB2a3pi/Zy9UaGE3R3RCeGo0/SS9BQUFBQUFBQUkz/ay9RY2dUM0hwd1Vw/OC9zMTYwMC9IYXJ2/YXJkJTJCVW5pdmVy/c2l0eSUyQlVTQSUy/QldhbGxwYXBlcnMl/MkJieSUyQmNvb2wl/MkJ3YWxscGFwZXJz/JTJCJTI1MjgxJTI1/MjkuanBn'
        },
        {
          id:'2',
          study: 'Curso avanzado de Git',
          school:'Udemy',
          img:'https://imgs.search.brave.com/P8tgN3JjEO3M5UgZG_t4k8XKgJ8MKecubq1JiMRTuAU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvZ2l0/LWljb24tbG9nby1w/bmctdHJhbnNwYXJl/bnQucG5n'
        }
      ],
      insights:[
        {
          id:1,
          name:'HTML'
        },
        {
          id:2,
          name:'React'
        },
        {
          id:3,
          name:'CSS'
        },
        {
          id:4,
          name:'REST API'
        },
        {
          id:5,
          name:'MongoDB'
        },
      ],
      fee:200
    },
    {
      id:'mawefwefmwefasefwitaregergchulegrrgapreweefwefwefciwefosewefgerganawefweflgwefonefwa',
      name: 'Bryce',
      middleName: '',
      lastname:'Howard',
      specialization: 'Acting',
      profilePic:'https://imgs.search.brave.com/-w_CnUK-xpjq7jgXIZ8Fifyh3DtFNZB_T7SNnkQ1rEA/rs:fit:1200:1200:1/g:ce/aHR0cDovL2ltYWdl/LnRtZGIub3JnL3Qv/cC9vcmlnaW5hbC9w/N1cwRTVKNkZwVE1P/RHhPT0Zid3NkeE9Q/bWwuanBn',
      stars:4,
      studies: [
        {
          id:'1',
          study:'Lic. en Informática',
          school:'Harvard',
          img:'https://imgs.search.brave.com/OvJ1E340rm9rAw6V-0qD62Zd9aG3MHbmf59Ro0KS1n0/rs:fit:1200:1200:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly1lOWJVRVB2a3pi/Zy9UaGE3R3RCeGo0/SS9BQUFBQUFBQUkz/ay9RY2dUM0hwd1Vw/OC9zMTYwMC9IYXJ2/YXJkJTJCVW5pdmVy/c2l0eSUyQlVTQSUy/QldhbGxwYXBlcnMl/MkJieSUyQmNvb2wl/MkJ3YWxscGFwZXJz/JTJCJTI1MjgxJTI1/MjkuanBn'
        },
        {
          id:'2',
          study: 'Curso avanzado de Git',
          school:'Udemy',
          img:'https://imgs.search.brave.com/P8tgN3JjEO3M5UgZG_t4k8XKgJ8MKecubq1JiMRTuAU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvZ2l0/LWljb24tbG9nby1w/bmctdHJhbnNwYXJl/bnQucG5n'
        }
      ],
      insights:[
        {
          id:1,
          name:'HTML'
        },
        {
          id:2,
          name:'React'
        },
        {
          id:3,
          name:'CSS'
        },
        {
          id:4,
          name:'REST API'
        },
        {
          id:5,
          name:'MongoDB'
        },
      ],
      fee:200
    },
    {
      id:'asidfqpniewnipfoneiofe',
      name: 'John',
      middleName: '',
      lastname:'Smith',
      specialization:'Basktetball',
      profilePic: 'https://imgs.search.brave.com/SMswVKwY3R1-mQWMHp7o9aDseLC-7VeMWJ0l9u379Ls/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly90b3du/c3F1YXJlLm1lZGlh/L3NpdGUvODEyL2Zp/bGVzLzIwMTcvMDMv/bWV0aG9kLW1hbjEu/anBnP3c9MTIwMCZo/PTAmemM9MSZzPTAm/YT10JnE9ODk',
      stars:4,
      studies: [
        {
          id:'1',
          study:'Lic. en Informática',
          school:'Harvard',
          img:'https://imgs.search.brave.com/OvJ1E340rm9rAw6V-0qD62Zd9aG3MHbmf59Ro0KS1n0/rs:fit:1200:1200:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly1lOWJVRVB2a3pi/Zy9UaGE3R3RCeGo0/SS9BQUFBQUFBQUkz/ay9RY2dUM0hwd1Vw/OC9zMTYwMC9IYXJ2/YXJkJTJCVW5pdmVy/c2l0eSUyQlVTQSUy/QldhbGxwYXBlcnMl/MkJieSUyQmNvb2wl/MkJ3YWxscGFwZXJz/JTJCJTI1MjgxJTI1/MjkuanBn'
        },
        {
          id:'2',
          study: 'Curso avanzado de Git',
          school:'Udemy',
          img:'https://imgs.search.brave.com/P8tgN3JjEO3M5UgZG_t4k8XKgJ8MKecubq1JiMRTuAU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvZ2l0/LWljb24tbG9nby1w/bmctdHJhbnNwYXJl/bnQucG5n'
        }
      ],
      insights:[
        {
          id:1,
          name:'HTML'
        },
        {
          id:2,
          name:'React'
        },
        {
          id:3,
          name:'CSS'
        },
        {
          id:4,
          name:'REST API'
        },
        {
          id:5,
          name:'MongoDB'
        },
      ],
      fee:200
    }
  ])


  return (
    <TutorsContext.Provider value={tutors}>
      { children }
    </TutorsContext.Provider>
  );
};