import { createContext, useState, useContext, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Context = createContext();

const GlobalContextProvider = ({ children }: { children }) => {
  const getInitialState = () => {
    const settings = localStorage?.getItem('settings');
    if (!settings) return [];
    return JSON.parse(settings);
  };
  const [settings, setSettings] = useState<[]>([]);

  useEffect(() => {
    if(settings.length > 0) localStorage.setItem('settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    setSettings(getInitialState());
  }, []);


  const state = {};

  const actions = { };

  return <Context.Provider value={{ state, actions }}>{children}</Context.Provider>;
};

export const useGlobalState = () => useContext(Context);

export default GlobalContextProvider;
