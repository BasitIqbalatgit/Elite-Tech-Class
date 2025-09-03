import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux_store/Store";
const root = document.getElementById("root");

createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
