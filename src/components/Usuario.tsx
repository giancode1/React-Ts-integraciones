import { useState } from 'react';

interface User{
    uid: string;
    name: string;
}

// const tempUser: User = {
//     uid: 'ABC',
//     name: 'un nombre'
// }

export const Usuario = () => {
    // const [user, setUser] = useState<User>(tempUser);
    const [user, setUser] = useState<User>();

    const login = ():void => {
        setUser({
            uid: 'ABC123',
            name: 'Juan',
        });
    }

  return (
    <div className='mt-3'>
        <h4>Usuario: </h4>
        <button
            onClick={login}
            className="btn btn-outline-primary my-2"
        >
            Login
        </button>
        {
            (!user)
                ? <pre>Sin usuario</pre>
                : <pre>{ JSON.stringify(user, null, 2) }</pre>
        }
        

    </div>
  )
}
