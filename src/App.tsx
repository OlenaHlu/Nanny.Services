import React from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const NanniesPage = lazy(() => import("./pages/NanniesPage/NanniesPage"));
// const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {/* <Route
            path="/nannies"
            element={<PrivateRoute component={<NanniesPage />} />}
          ></Route>
          <Route
            path="/favorites"
            element={<PrivateRoute component={<FavoritesPage />} />}
          ></Route>
          <Route path="*" element={<NotFoundPage />}></Route> */}
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
