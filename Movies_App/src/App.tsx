import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./Pages/Movies";
import TvSeries from "./Pages/TvSeries";
import Bookmarks from "./Pages/Bookmarks";
import Home from "./Pages/Home";
import Search from "./Components/Search";
import Navbar from "./Components/Navbar";
import { SearchProvider } from "./Context/SearchProvider"; 
import BookmarkProvider from "./Context/BookmarkProvider";
function App() {
  return (
    <Router>
        <SearchProvider>
          <BookmarkProvider>
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col flex-grow mt-10">
          <Search />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TvSeries />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
        </div>
        </BookmarkProvider>
    </SearchProvider>
      </Router>
  );
}

export default App;
