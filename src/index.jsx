import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DarkModeContextProvider } from "./contexts/DarkModeContext/DarkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DarkModeContextProvider><App /></DarkModeContextProvider>);
