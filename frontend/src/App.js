import { Fragment } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Form';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/form' element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
