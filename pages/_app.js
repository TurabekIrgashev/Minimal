import { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "../styles/createTheme";
import store from "../src/redux/store";
import "../styles/globals.css";
import Sidebar from "../src/components/Sidebar/Sidebar";
import { Head, Html } from "next/document";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router, { useRouter } from "next/router";
import { CssBaseline } from "@mui/material";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState("light");
  return (
    // <Provider store={{ store }}>

    <ThemeProvider theme={theme(mode)}>
      {/* <Layout> */}
      <CssBaseline />
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
      {/* </Layout> */}
    </ThemeProvider>

    // </Provider>
  );
}

export default MyApp;
