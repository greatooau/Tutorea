import React, { createContext, useState, useEffect } from 'react';

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
    
    const [account, setAccount] = useState(
         /* {
            "_id": "6265b4675bce7cc5b6b7d342",
            "name": "Luis",
            "lastname": "Flores",
            "specialization": "Desarrollo web",
            "profile_picture": "https://imgs.search.brave.com/nPKsMRFSLZZ76NxLK0Ac1nyKEyE1X7r5fKxAv2s5LIc/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKd3Q4eWJT/WnFLcnNqX3Jwa0pI/OTE4c09rRnNocnBC/Wmt1TT1zOTAwLWMt/ay1jMHhmZmZmZmZm/Zi1uby1yai1tbw",
            "stars": 5,
            "studies": [
                {
                    "id": 1,
                    "study": "Lic. en Informática",
                    "school": "Harvard",
                    "img": "https://imgs.search.brave.com/OvJ1E340rm9rAw6V-0qD62Zd9aG3MHbmf59Ro0KS1n0/rs:fit:1200:1200:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly1lOWJVRVB2a3pi/Zy9UaGE3R3RCeGo0/SS9BQUFBQUFBQUkz/ay9RY2dUM0hwd1Vw/OC9zMTYwMC9IYXJ2/YXJkJTJCVW5pdmVy/c2l0eSUyQlVTQSUy/QldhbGxwYXBlcnMl/MkJieSUyQmNvb2wl/MkJ3YWxscGFwZXJz/JTJCJTI1MjgxJTI1/MjkuanBn"
                },
                {
                    "id": 2,
                    "study": "Curso avanzado de Git",
                    "school": "Udemy",
                    "img": "https://imgs.search.brave.com/P8tgN3JjEO3M5UgZG_t4k8XKgJ8MKecubq1JiMRTuAU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvZ2l0/LWljb24tbG9nby1w/bmctdHJhbnNwYXJl/bnQucG5n"
                }
            ],
            "insights": [
                {
                    "id": 1,
                    "name": "HTML"
                },
                {
                    "id": 2,
                    "name": "React"
                },
                {
                    "id": 3,
                    "name": "CSS"
                },
                {
                    "id": 4,
                    "name": "REST API"
                },
                {
                    "id": 5,
                    "name": "MongoDB"
                }
            ],
            "fee": 200,
            "contacts": [
                {
                    "contact_id": "3ssdf4sdfsdf2sdsdfsdf8sdfdsfsdsdf9sdf2sdf3",
                    "name": "Discord",
                    "contact": "Emile#5967"
                },
                {
                    "contact_id": "3ssdf4sdfsdf2sdsdfsdf8sdfdsfsdsdf9sdf2sdf3",
                    "name": "WhatsApp",
                    "contact": "+52 8165359874"
                }
            ],
            "category": "technology",
            "status": "APROBADO",
            "password": "$2a$10$k2Qze.7E8vtMtNZwlBb8vO6U/QD7kW5HL3XeiRxTVJRDFzU67bNaS",
            "username": "juan12345"
        }  */

        {
            "id": "62c2fc9557bdd3750b4a9484",
            "name": "Pedro",
            "lastname": "Rodriguez",
            "email": "juan2@gmail.com",
            "profile_picture": "https://imgs.search.brave.com/GBLxonEYI_OAMfApYU2-OV4YFKkMARAbq8mFZoscPbo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZWFj/b3BpbmlvbmVzLmVz/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzAzL3VzZXItNi5w/bmc",
            "username": "juan12345",
            "sex": "masculino",
            "born_date": "21/05/2002",
            "phone": "8121809293",
            "myTutors": []
        }
    )
    /* useEffect(()=>{
        console.log(account)
      },[account]) */
    return(
        <AccountContext.Provider value={[account, setAccount]}>
            { children }
        </AccountContext.Provider>
    )
}