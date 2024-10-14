import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Products({ data, cart, setCart }) {
    if (!data || data.length === 0) {
        return <p>No products available.</p>; // Handle empty items case
    }

    const addToCart = (id, price, title, description, imgSrc) => {
        const obj = { id, price, title, description, imgSrc };
        setCart((prevCart) => [...prevCart, obj]); // Use functional update for state

        toast.success('Item added!', {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={1100} />
            <div className="container">
                <div className="row">
                    {data.map((product) => (
                        <div key={product.id} className="col-md-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <Link to={`/product/${product.id}`}>
                                    <img className="card-img-top" src={product.imgSrc} alt={product.title} />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <button className='btn btn-primary mx-3'>{product.price} Rs</button>
                                    <button
                                        onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                                        className='btn btn-warning'>Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
