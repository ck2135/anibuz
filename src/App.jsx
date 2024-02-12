import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Trending from './Pages/Trending/Trending';
import Register from './Pages/Register/Register';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Upcoming from './Pages/Upcoming/Upcoming';


function App() {
  return (
    <div>
      <Router basename="/anibuz">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/upcoming' element={< Upcoming/>}/>
          <Route path='/trending' element={<Trending />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
