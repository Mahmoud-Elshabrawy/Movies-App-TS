import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const LazyMovies = React.lazy(() => import("./Pages/Movies"));
const LazyTvSeries = React.lazy(() => import("./Pages/TvSeries"));
const LazyBookmarks = React.lazy(() => import("./Pages/Bookmarks"));
import Home from "./Pages/Home";
import Search from "./Components/Search";
import Navbar from "./Components/Navbar";
import { SearchProvider } from "./Context/SearchProvider";
import BookmarkProvider from "./Context/BookmarkProvider";
import ItemDetails from "./Pages/ItemDetails";
import Footer from "./Components/Footer";
import LightModeProvider from "./Context/LightModeProvider";
function App() {
  return (
    <Router>
      <SearchProvider>
        <BookmarkProvider>
          <LightModeProvider>
            <div className=" flex flex-col min-h-screen">
              <Navbar />
              <div className=" flex-grow overflow-x-hidden">
                <Search />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/movies"
                    element={
                      <React.Suspense fallback="Loading...">
                        <LazyMovies />
                      </React.Suspense>
                    }
                  />
                  <Route
                    path="/tv"
                    element={
                      <React.Suspense fallback="Loading...">
                        <LazyTvSeries />
                      </React.Suspense>
                    }
                  />
                  <Route
                    path="/bookmarks"
                    element={
                      <React.Suspense fallback="Loading...">
                        <LazyBookmarks />
                      </React.Suspense>
                    }
                  />
                  <Route path="/movies/:id" element={<ItemDetails />} />
                  <Route path="/tv/:id" element={<ItemDetails />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </LightModeProvider>
        </BookmarkProvider>
      </SearchProvider>
    </Router>
  );
}

export default App;
