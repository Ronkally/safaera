import React, { lazy, Suspense } from "react";
import "./styles/App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { AnimatePresence } from "framer-motion";

const Projects = lazy(() => import("./pages/Projects"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/AboutUs"));
const renderLoader = () => (
  <div class="fa-3x loader">
    <i class="fas fa-spinner fa-spin"></i>
  </div>
);

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Suspense fallback={renderLoader()}>
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/projects" component={Projects}></Route>
            </Switch>
          </AnimatePresence>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
