import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Product from './Components/Product';

class App extends Component {
  render() {
  

    return (
      <div className="App">
          <Navbar />
          <div className = "container mt-4">
            <Product/>
          </div>
      </div>
    );
  }
}

export default App;
