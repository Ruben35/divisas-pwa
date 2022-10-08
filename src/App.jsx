import { Route, Routes } from "react-router-dom";
import DivisasPage from "./pages/DivisasPage";
import NearMePage from "./pages/NearMePage";
import WalletPage from "./pages/WalletPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DivisasPage />} />
      <Route path="/nearMe" element={<NearMePage />} />
      <Route path="/wallet" element={<WalletPage />} />
    </Routes>
  );
}

export default App;
