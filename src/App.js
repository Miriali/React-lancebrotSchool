import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './components/About/About';
import Courses from './Pages/Courses/Courses';
import Footer from './components/Footer/Footer';
import CampusSignin from './Pages/Campus/campus-signin';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
          <Switch>
          <Route path='/about' component={About} />
          <Route path='/courses' component={Courses} />
          <Route path='/campus' component={CampusSignin} />
          <Route path='/' component={Home} />
          </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;