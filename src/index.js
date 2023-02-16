import React from "react"
import ReactDOM from "react-dom/client"
import UserAuth from "./services/UserAuth";

import App from './App';

//const renderApp = () => ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = () => root.render(<App />);

UserAuth.init(renderApp);
