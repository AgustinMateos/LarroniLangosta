import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Cart from './components/Cart';
import { CartContextProvider } from './components/context/CartContext';
import ItemDetail from './components/ItemDetail';
import ListContainer from './components/ListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ListContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/detail/:id' element={<ItemDetail/>}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;
