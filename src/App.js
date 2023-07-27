import './App.css';
import Layout from './component/Layout';
import Register from './component/Register';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import View from './component/View';

function App() {
  return (
    
    <div>
      <BrowserRouter>
        <Routes>
            <Route  element={<Layout />}> 
               <Route path='register' element={<Register />} />
               <Route path='/view' element={<View />} />
               </Route>   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
