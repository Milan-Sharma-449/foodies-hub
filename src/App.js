import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./component/NavBar"
import Footer from "./component/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/foodies-hub/" element={<Home />} />
          <Route path="/foodies-hub/recipes" element={<Recipes />} />
          <Route path="/foodies-hub/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
