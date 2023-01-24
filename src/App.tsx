import Login from "./components/Login";
import { useState } from "react";
import MedicationsHome from "./pages/MedicationsHome";

function App() {
  const [token, setToken] = useState("");
  return <>{token ? <MedicationsHome token={token} /> : <Login />}</>;
}

export default App;
