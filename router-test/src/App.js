import './reset.css'
import './App.css';

import {Route, Routes, Link, BrowserRouter} from 'react-router-dom'

import Main from './Component/Main';
import ExplainSite from './Component/ExplainSite';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main></Main>} ></Route>
          <Route path='/ExplainSite' element={<ExplainSite></ExplainSite>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
