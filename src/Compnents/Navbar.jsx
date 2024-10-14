import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Data from './Data'

export default function Navbar({ setdata ,cart}) {
  const navigate = useNavigate();
  const [seacrhtrem, setseacrhtrem] = useState("");

  const handlesubmite = (e) => {
    e.preventDefault();
    navigate(`/Search/${seacrhtrem}`)
    setseacrhtrem("");
  }
  const filterbycategory = (category) => {
    const data = Data.filter((product) => product.category === category)
    setdata(data)
  }

  const filterbyprice = (price) => {
    const data = Data.filter((product) => product.price >= price)
    setdata(data)
  }
  return (
    <>
      <header>

        <div className="nav-bar">
          <Link to={'/'} className="brand">E-cart</Link>
          <form onSubmit={handlesubmite} className="search-bar">
            <input type="text"
              placeholder='search products'
              value={seacrhtrem}
              onChange={(e) => setseacrhtrem(e.target.value)} />
          </form>
          <Link to={'/Cart'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button></Link>
        </div>

        <div className="nav-bar-warapper">
          <div className="items">Filter by</div>
          <div onClick={() => setdata(Data)} className="items">NO filter</div>
          <div onClick={() => filterbycategory('mobiles')} className="items">Mobiles</div>
          <div onClick={() => filterbycategory('laptops')} className="items">Laptops</div>
          <div onClick={() => filterbycategory('tablets')} className="items">Tables</div>
          <div onClick={() => filterbyprice(29999)} className="items">{">="}29999</div>
          <div onClick={() => filterbyprice(49999)} className="items">{">="}49999</div>
          <div onClick={() => filterbyprice(69999)} className="items">{">="}69999</div>
          <div onClick={() => filterbyprice(89999)} className="items">{">="}89999</div>
        </div>

      </header>
    </>
  )
}
