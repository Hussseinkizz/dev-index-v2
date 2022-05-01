import { createContext, useContext, useReducer } from 'react';

export const store = createContext();
const initialState = {
  // import Cookies from js-cookie after installing it, remove this comment and uncomment the codeblock below!
  // darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
  darkMode: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return { ...state, darkMode: true };
    case 'DARK_MODE_OFF':
      return { ...state, darkMode: false };
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <store.Provider value={value}>{children}</store.Provider>;
}

export function useStore() {
  const useStore = useContext(store);

  return useStore;
}
