import React, { Component } from 'react';
import Header from './Header.component.jsx';
import Slider from './Slider.component.jsx';
import LoginForm from './LoginForm.component.jsx';
import Footer from './Footer.component.jsx';

class Main extends React.Component {
  

  render() {
    return (
      <div className="container-fluid bg-white">
        <Header />
        <Slider />
        <Footer />
      </div>
    );
  }
}

export default Main