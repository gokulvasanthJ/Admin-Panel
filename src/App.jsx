import React from 'react'
import Homepage from './pages/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './components/product-details/ProductDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
 

  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/' element={<Dashboard />}>
            <Route path='dashboard' element={<ProductDetails />}></Route>
          </Route>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App