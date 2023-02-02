import logo from "./logo.svg";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Settings from "./Pages/Settings";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
        {/* <Settings /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
