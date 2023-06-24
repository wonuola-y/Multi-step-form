import React from 'react'
import  Home  from "./components/Home";
import { Routes, Route } from 'react-router-dom';
import Add from './components/Add';
import Plan from './components/Plan';
import Summary from './components/Summary';


function App() {
  return (
    <div className="App bg-grayish-blue flex flex-col justify-center items-center p-20">
     <Routes>
      <Route path='/' element={<Home />}/>
     <Route path='/Add' element={<Add />}/>
     <Route path='/Plan' element={<Plan />}/>
     <Route path='/Summary' element={<Summary/>}/>
     <Route />
     </Routes>
    
    </div>
  );
}

export default App;
