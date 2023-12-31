import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/home";
import Login from "./pages/user_login";
import Signup from "./pages/user_signup";
import ViewBooks from "./pages/ViewBooks";
import Borrow from "./pages/borrow_books";
import SearchPage from "./pages/search_page";
import SpecificCard from "./components/SpecificCard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/viewbooks" element={<ViewBooks />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/borrowbooks" element={<Borrow />} />
          <Route path="/book/:id" element={<SpecificCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
