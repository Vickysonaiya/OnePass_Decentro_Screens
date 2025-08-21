import { Route, Routes } from "react-router-dom";
import "./App.css";
import PhoneNumberScreen from "./PhoneNumberScreen";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PhoneNumberScreen />} />
      </Routes>
    </div>
  );
}

export default App;
