import { ReactElement } from 'react';
import GlobalContextProvider from '../context/globalStateContext';

const Providers = ({ children }: { children: ReactElement }): ReactElement => {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
};

export default Providers;
