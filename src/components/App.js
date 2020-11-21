import React from 'react';
import Header from './Header';
import ProductControl from './ProductControl';

function App() {
  return (
    <React.Fragment>
      <div className="text-center" style={{backgroundColor: "#C16E70" }}>
        <Header />
      </div>
    <div className="container mb-5">
      <div className="text-center">
        <ProductControl />
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
