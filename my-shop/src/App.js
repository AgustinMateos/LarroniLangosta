import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Cart from './components/Cart';
import { CartContextProvider } from './components/context/CartContext';
import ItemDetail from './components/ItemDetail';
import ListContainer from './components/ListContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Order from './components/Order';



function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ListContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/cart/:order' element={<Order/>}/>
      <Route path='/detail/:id' element={<ItemDetail/>}/>
      <Route path="/*" element={<div>404 error</div>}></Route>
     
    </Routes>
    </BrowserRouter> 
    <Footer/>
    </CartContextProvider>
   
  );
}
export default App;
