import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Compnents/Navbar'
import Products from './Compnents/Products'
import Cart from './Compnents/Cart'
import Searchitem from './Compnents/Searchitem'
import Produstdetails from './Compnents/Produstdetails'
import Data from './Compnents/Data'


function App() {
  const [data, setdata] = useState([...Data])
  const [cart,setCart]=useState([]);

   return (
    <>

      <Router>
        <Navbar cart={cart} setdata={setdata}/>
        <Routes>
          <Route path='/' element={<Products cart={cart} setCart={setCart} data={data}/>}></Route>
          <Route path='/Product/:id' element={<Produstdetails data={data} />} />
          <Route path='/Search/:term' element={<Searchitem/>}></Route>
          <Route path='/Cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
    </Routes >
      </Router >
    </>
  )
}

export default App
