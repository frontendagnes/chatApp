import { createContext } from 'react';

const authContext = createContext({
    items: [],
    setItems: () => {}
})

const { Provider, Consumer } = authContext;
export { Provider, Consumer }

export default authContext;