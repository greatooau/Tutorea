import { createContext, useState } from 'react';

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {

    const [account, setAccount] = useState(
        {
            name: 'Eugenio',
            middleName:'',
            lastname: 'Torres',
            password: '123',
            profilePic: 'https://imgs.search.brave.com/kJKQlgpWW1xyG9ktsinvjydfB1zC-gnHV6uZMG7-Mxw/rs:fit:439:493:1/g:ce/aHR0cHM6Ly9sYWNv/bHVtbmFyaWFibG9n/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNS8wNy9rb25h/bjAuanBn',
            userName: 'konanbig60',
            email:'konanbig@gmail.com',
            sex:'masculino',
            bornDate:'09-12-1999',
            phone:'8131892034',
            payInfo:{

            }
        }
    )

    return(
        <AccountContext.Provider value={[account, setAccount]}>
            { children }
        </AccountContext.Provider>
    )
}