import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import "./scss/tesc-website.scss";
import TescRoutes from "./Routes";

const root = createRoot(document.getElementById("root")!);

root.render(
    <React.StrictMode>
        <TescRoutes />
    </React.StrictMode>
);