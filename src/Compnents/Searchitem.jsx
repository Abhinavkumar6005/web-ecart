import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from './Data';
import Products from './Products';

export default function Searchitem() {
    const { term } = useParams();
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        // Define the search function
        const filterData = () => {
            const filteredData = Data.filter((product) =>
                product.title.toLowerCase().includes(term.toLowerCase())
            );
            setSearchData(filteredData);
        };

        filterData(); 
    }, [term]); // No need for cleanup in this case

    return (
        <>
            <Products data={searchData} /> {/* Ensure prop name is consistent */}
        </>
    );
}
