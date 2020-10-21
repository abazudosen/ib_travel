import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Design from "./components/pages/Design";
import ContactUs from "./components/pages/Contact-Us";
import Consulting from "./components/pages/Consulting";
import Software from "./components/pages/Software";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/software" exact component={Software} />
          <Route path="/consulting" exact component={Consulting} />
          <Route path="/design" exact component={Design} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
