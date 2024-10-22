import React, { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./components/Form/form.scss"

import MainRouter from "./routes/MainRouter";

import "./App.scss"
import ErrorAlert from "./components/Alerts/Error";
import MessageAlert from "./components/Alerts/Message";
import Loader from "./components/Reusable/Loader";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2b2b2b',
      light: '#fff',
    },
    secondary: {
      main: '#9292AB',
      light: '#FFED53',
    },
    background: {
      default: '#111142',
      paper: 'rgba(255, 255, 255, 0.02)',
    },
    text: {
      hint: 'rgba(143, 143, 143, 1)',
      secondary: '#8B8E93',
    },
    typography:{
      fontFamily: "Urbanist",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
            @font-face {
              font-family: 'Urbanist';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
        },
    },
  shape: {
    borderRadius: 12,
  },}
});


function App() {
  const is_loading = useSelector(state=>state.loader.is_loading);
  const lng = useSelector(state=>state.settings.account_settings.language);
  const { i18n } = useTranslation();

  useEffect(()=>{
    i18n.changeLanguage(lng);
    console.log("Lng changed to ", lng)
  },[lng])

  return (
    <div className="App">
      {is_loading?<Loader/>:false}
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ErrorAlert/>
        <MessageAlert/>
        <MainRouter/>
      </ThemeProvider>
    </div>
  );
}

export default App;
