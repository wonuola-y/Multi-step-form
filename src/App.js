import React from 'react'
import  Form  from "./components/Home";
import { Routes, Route } from 'react-router-dom';
import Add from './components/Add';
import Plan from './components/Plan';
import Summary from './components/Summary';
import Thanks from './components/Thanks';


function App() {
  return (
    <div className="App bg-grayish-blue flex flex-col justify-center items-center p-20">
     <Routes>
      <Route path='/' element={<Form />}/>
     <Route path='/Add' element={<Add />}/>
     <Route path='/Plan' element={<Plan />}/>
     <Route path='/Summary' element={<Summary/>}/>
     <Route path='/Thanks' element={<Thanks/>}/>
     <Route />
     </Routes>
    
    </div>
  );
}

export default App;
