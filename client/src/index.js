import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './theme'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import UserContext from './components/AccountContext';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <UserContext>
        <App />
      </UserContext>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
