import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./client/components/navbar";
import Footer from "./client/components/Footer";

import "./App.css";

const HomePage = lazy(() => import("./client/Pages/HomePage"));
const SinglePage = lazy(() => import("./client/Pages/SingleMoviePage"));
const MoviePage = lazy(() => import("./client/Pages/MoviePage"));
// import SinglePage from "./client/components/SingleMoviePage";
// import HomePage from "./client/Pages/HomePage";
// import MoviePage from "./client/Pages/MoviePage";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/movies/:id/*" element={<SinglePage />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </>
  );
}

export default App;
