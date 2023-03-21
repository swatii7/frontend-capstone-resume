import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import {

  BrowserRouter
} from "react-router-dom"
import App from './App'
import { SnackbarProvider  } from 'notistack';

import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: "#EEEEEE",
    },
    typography: {
      fontFamily: [
        "IBM Plex Sans",
        //  "-apple-system",
        //   "BlinkMacSystemFont",
        //  "Segoe UI",
        //   "Roboto",
        //   "Helvetica Neue",
        //    "Arial",
        //     "sans-serif", 
        //     "Apple Color Emoji",
        //      "Segoe UI Emoji", 
        //      "Segoe UI Symbol"
      ].join(','),
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
  <SnackbarProvider maxSnack={3}>
  <App />
  </SnackbarProvider>

  </Provider>
  </BrowserRouter>

   
     </ThemeProvider>
  </React.StrictMode>,
)
