import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './Pages/Cart';
import { Shop } from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory'; 
import Product from './Pages/Product';
import { LoginSignup } from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import banner_mens from './Components/Assets/banner_mens.png';
import banner_women from './Components/Assets/banner_women.png';
import banner_kids from './Components/Assets/banner_kids.png';
import ShopContextProvider from './Context/ShopContext';  // Importation du provider

function App() {
  return (
    <div>
      <ShopContextProvider> {/* Enveloppe ton application avec le provider */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopCategory banner={banner_mens} category="mens" />} />
            <Route path='/women' element={<ShopCategory banner={banner_women} category="women" />} />
            <Route path='/kid' element={<ShopCategory banner={banner_kids} category="kid" />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
