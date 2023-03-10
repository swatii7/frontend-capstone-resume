import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import {

  BrowserRouter
} from "react-router-dom"
import App from './App'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: "#EEEEEE",
    },

  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <ThemeProvider theme={theme}>
  <BrowserRouter >
  <Provider store= {store}>
  <App />
  </Provider>
  </BrowserRouter>

   
     </ThemeProvider>
  </React.StrictMode>,
)
