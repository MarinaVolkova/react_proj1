import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react';
import AuthProvider from './context/AuthContext';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
    <AuthProvider>
      <Router>
        <App />
      </Router>
     </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

