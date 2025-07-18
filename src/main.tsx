import React from "react";
import ReactDOM, { Container } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import routesFn from "./Routes";
import { store } from "./Store";
import "./index.css";

const router = createBrowserRouter(createRoutesFromElements(routesFn()));

ReactDOM.createRoot(document.getElementById("root") as Container).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>,
);
