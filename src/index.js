import React from 'react';
import React from "react";
import { Index } from "./screens/Index";
import * as ReactDOMClient from "react-dom/client";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Index />);
