import ReactDOMClient from "react-dom/client";
import { Console } from "./screens/Console";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Console />);
