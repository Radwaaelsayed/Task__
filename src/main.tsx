import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home.tsx";
import Cars from "./pages/cars.tsx";
import { Provider } from "react-redux";
import { store } from "./services";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cars",
    element: <Cars />,
  },
]);
declare module "react" {
  interface JSX {
    [elemName: string]: any;
  }
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store} children={undefined}>
        <RouterProvider router={router} />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
