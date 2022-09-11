import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrimarySearchAppBar from './components/NavBar';
import NavBarTwo from './components/NavBarTwo';
import NoMatch from './components/NoMatch';
import Cart from './screens/Cart';
import Home from './screens/Home';

function App() {
  return (
    <>
    <NavBarTwo/>
    

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='cart' element={<Cart/>} />
      <Route path='*' element={<NoMatch />} />

      
    </Routes>

    </>
  );
}

export default App;
