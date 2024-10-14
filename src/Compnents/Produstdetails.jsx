import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';

const ProductDetails = ({ data }) => {
    // const addToCart = (id, price, title, description, imgSrc) => {
    //     const obj = { id, price, title, description, imgSrc };
    //     setCart((prevCart) => [...prevCart, obj]); // Use functional update for state

    //     toast.success('Item added!', {
    //         position: "top-right",
    //         autoClose: 500,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //     });
    // };


    const { id } = useParams();
    
    // State for the selected product
    const [product, setProduct] = useState(null);
    
    // State for related products
    const [relatedProducts, setRelatedProducts] = useState([]);
    
    useEffect(() => {
        // Ensure data is an array
        if (!Array.isArray(data)) {
            console.error("Data is not an array:", data);
            return;
        }

        // Find the product by ID
        const filteredProduct = data.find((item) => item.id == id);
        setProduct(filteredProduct || null); // Set to null if not found
    }, [id, data]);

    useEffect(() => {
        // Find related products based on category
        if (product && product.category) {
            const related = data.filter((item) => item.category === product.category && item.id !== product.id);
            setRelatedProducts(related);
        }
    }, [product, data]);

    if (!product) {
        return <p>Product not found.</p>; // Handle case where product is not found
    }

    return (
        <>
        {/* <ToastContainer position="top-right" autoClose={1100} /> */}
            <div className="container con">
                <div className="img">
                    <img src={product.imgSrc} alt={`Image of ${product.title}`} />
                </div>
                <div>
                    <h1 className="card-title">{product.title}</h1>
                    <p className="card-text">{product.description}</p>
                    <button className='btn btn-primary mx-3'>{product.price} Rs</button>
                    <button
                    //  onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                                        
                    className='btn btn-warning'>Add to cart</button>
                </div>
            </div>
            {relatedProducts.length > 0 && (
                <div>
                    <h2>Related Products</h2>
                    <Products data={relatedProducts} />
                </div>
            )}
        </>
    );
};

export default ProductDetails;