import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from 'styled-components'
import {theme} from './themes/theme'

import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(
  <ThemeProvider theme={theme}>

    <App />
 </ThemeProvider> ,
  document.getElementById('root')
);
