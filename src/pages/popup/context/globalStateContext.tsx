import { defaultSettings } from '@src/pages/variables/defaultSettings';
import { createContext, useState, useContext, useEffect } from 'react';
import { appSettings } from '@src/global';

type contextTypes = {
  state: { settings: appSettings },
  actions: { modifySetting: (setting, value) => void }
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Context = createContext<contextTypes>();

const GlobalContextProvider = ({ children }: {children}) => {
  const [settings, setSettings] = useState<appSettings>(null);
  const getInitialState = () => {
    chrome.storage.sync.get(['ytControlsSettings']).then((result) => {
      console.log(result.ytControlsSettings);
      if (Object.keys(result).length === 0) {
        chrome.storage.sync.set({ ytControlsSettings: defaultSettings });
        setSettings(defaultSettings);
      } else {
        setSettings(result.ytControlsSettings);
      }
    });
  };

  useEffect(() => {
    getInitialState();
  }, []);

  useEffect(() => {
    if (settings) {
      chrome.storage.sync.set({ ytControlsSettings: settings });
    }
  }, [settings]);

  const modifySetting = (setting: string, value: never) => {
    setSettings((prev) => ({ ...prev, [setting]: value }));
  };

  const state = { settings };

  const actions = { modifySetting };

  return <Context.Provider value={{ state, actions }}>{children}</Context.Provider>;
};

export const useGlobalState = () => useContext(Context);

export default GlobalContextProvider;
