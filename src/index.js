import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./global.css";
import { MessageList, Layout, Header, ChatList } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage, ChatPage, ProfilePage, GistsPage } from "./pages";
import { CustomThemeProvider, ThemeContext } from "./theme-context";
import { persistor, store, store2 } from "./store";
import { useContext } from "react";
import Router from "./routes/Router";
import { setupStore } from "./store/store";
import { myStore } from "./store/my-redux";

import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Provider store={store2}>
      {/*<PersistGate loading={null} persistor={persistor}>*/}
      <CustomThemeProvider initialTheme={theme}>
        {/*<Router />*/}
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="chats/*" element={<ChatPage />} />
            <Route path="*" element={<h1>404</h1>} />
            <Route path="gists" element={<GistsPage />} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
      {/*</PersistGate>*/}
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);