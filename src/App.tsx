import React from 'react';
import rocketIMG from './imageFile/rocket.png'
import SignUp from './components/SignUp';
import './App.css';


function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <SignUp/>
        </div>
        <div className="col-md-7 my-auto">
          <img className='img-fluid w-100' src={rocketIMG} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
