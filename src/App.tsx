import { Toaster } from "react-hot-toast";
import "./App.css";
import Routes from "./router";

function App() {
  return (
    <>
      <Routes />
      <Toaster />
    </>
  );
}

export default App;
