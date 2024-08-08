import "./App.css";
import SearchPage from "./SearchPage";
import ListBook from "./ListBook";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<ListBook />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
    </Routes>
  );
}

export default App;
