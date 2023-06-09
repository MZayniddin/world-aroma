import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import root from "./routes";
import "./index.css";
import "./locales/i18next";

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={root} />
);
