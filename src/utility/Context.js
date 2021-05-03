import { createContext } from 'react';

const authContext = createContext({
    user: '',
    setUser: () => {}
})

const { Provider, Consumer } = authContext;
export { Provider, Consumer }

export default authContext;