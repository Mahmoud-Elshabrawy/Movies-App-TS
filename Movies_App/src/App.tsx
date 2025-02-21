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
import ItemDetails from "./Pages/ItemDetails";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
        <SearchProvider>
          <BookmarkProvider>
            <div className=" flex flex-col min-h-screen">
          <Navbar />
        <div className=" flex-grow my-10 ">
          <Search />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TvSeries />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/movies/:id" element= {<ItemDetails/>} />
          <Route path="/tv/:id" element= {<ItemDetails/>} />
          </Routes>
        </div>
          <Footer />
            </div>
        </BookmarkProvider>
    </SearchProvider>
      </Router>
  );
}

export default App;
