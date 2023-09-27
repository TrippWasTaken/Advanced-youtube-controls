import React from 'react';
import '@pages/popup/Popup.css';
import Providers from './providers/Providers';
import Wrapper from './components/Wrapper';

const Popup = () => {
  return (
    <Providers>
      <Wrapper />
    </Providers>
  );
};

export default Popup;
