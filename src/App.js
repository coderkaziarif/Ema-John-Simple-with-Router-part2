
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import React from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import ProductDetail from './components/ProductDetail/ProductDetail';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
          <Routes>
              <Route path='shop' element={<Shop/>}></Route>
              <Route path='review' element={<Review/>}></Route>
              <Route path='inventory' element={<Inventory/>}></Route>
              <Route exact path='/' element={<Shop/>}></Route>
              <Route path='/product/:productKey' element={<ProductDetail/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
            
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
