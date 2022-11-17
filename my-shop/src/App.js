import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Cart from './components/Cart';
import ItemDetail from './components/ItemDetail';
import ListContainer from './components/ListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ListContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/detail/:id' element={<ItemDetail/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
