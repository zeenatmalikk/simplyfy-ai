import "./App.css";
import Layout from "./component/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./sections/Dashboard";
import Sales from "./sections/Sales";
import Analytics from "./sections/Analytics";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
