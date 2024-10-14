import React from 'react';

export default function Cart({ cart, setCart }) {
    const handleRemoveItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <>
        <div className="container " style={{width:"60%"}}>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
              <>
              <p>Your cart is empty.</p>
              
              </>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="card mb-3" style={{ width: '700px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={item.imgSrc} className="img-fluid rounded-start" alt={item.title} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <p className="card-text"><strong>{item.price} Rs</strong></p>
                                    <button 
                                        className="btn btn-danger" 
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
        <button className='btn btn-warning mx-5 '>CheckOut</button>
        <button onClick={()=>setCart("")} className='btn btn-danger'>Clear Cart</button>
        </>
    );
}
