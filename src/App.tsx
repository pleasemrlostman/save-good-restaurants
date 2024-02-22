import { useEffect } from "react";
import "./App.css";
import api from "./api";

function App() {
  const test = async () => {
    const res = await api("http://localhost:9090/api/jobs");
    return res;
  };

  useEffect(() => {
    test();
  }, []);

  return <></>;
}

export default App;
