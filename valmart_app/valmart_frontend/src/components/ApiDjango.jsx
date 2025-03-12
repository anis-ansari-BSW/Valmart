import React, { useEffect, useState } from 'react';
import axios from 'axios';
import project1 from '../assets/image/project/project1.jpg'
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ApiDjango = () => {
    const gridCols = ['grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6', 'grid-cols-7', 'grid-cols-8', 'grid-cols-9', 'grid-cols-10'];
    // const gridColsTest = 'grid-cols-4';

    const [products, setProducts] = useState([]);
    // const [categories, setCategories] = useState([]); // For category options
    const [filteredProducts, setFilteredProducts] = useState([]); // Filtered product data
    const [selectedCategory, setSelectedCategory] = useState('all'); // Selected category
    const [selectedGrid, setSelectedGrid] = useState(gridCols[4]); // Default: 'grid-cols-5'
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
            .then(response => {
                setProducts(response.data);
                setFilteredProducts(response.data); // Initially, show all products
                // console.log("data is here", setFilteredProducts);
                setLoading(false);

            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
                setLoading(false);
            });

    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!products) {
        return <div>Product not found</div>;
    }



    // Get unique categories from products
    const categories = [...new Set(
        products.flatMap(product =>
            product.categories
                ?.replace(/[{}]/g, "") // Remove curly braces
                .split(",")
                .map(cat => cat.trim()) || []
        )
    )].sort();
    // Handle category selection
    const handleCategoryChange = (e) => {
        const selected = e.target.value;
        setSelectedCategory(selected);

        if (selected === "all") {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(
                products.filter(product =>
                    product.categories
                        ?.replace(/[{}]/g, "") // Remove curly braces
                        .split(",")
                        .map(cat => cat.trim())
                        .includes(selected)
                )
            );
        }
    };

    const handleGridChange = (e) => {
        setSelectedGrid(e.target.value);
        console.log(e.target.value);

    };

    return (
        <div className='container mx-auto px-10 mt-5'>
            <div className='flex justify-between items-center'>
                <h1 className={'text-2xl font-bold'}>Data Python API</h1>
                <div className='flex items-center'>
                    {/* Grid Selector Dropdown */}
                    <div className="my-4 mr-4 grid">
                        <label htmlFor="gridSelect" className="mr-2 font-semibold">Select Grid Columns:</label>
                        <select
                            id="gridSelect"
                            value={selectedGrid}
                            onChange={handleGridChange}
                            className='border-2 border-gray-500 rounded-full px-4 p-1 text-sm font-semibold my-2 text-gray-500'
                        >
                            {gridCols.map((col, index) => (
                                <option key={index} value={col}>{col}</option>
                            ))}
                        </select>
                    </div>

                    {/* category Dropdown */}
                    <div className='my-4 grid'>
                        <label className='mr-2 font-semibold'>Select Category</label>
                        <select
                            id="category"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className='border-2 border-gray-500 rounded-full px-4 p-1 text-sm font-semibold my-2 text-gray-500'
                        >
                            <option value='all'>All</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className={`slider-container my-8 grid ${selectedGrid} gap-3`}>
                {filteredProducts.map(product => (
                    <Link to={`/product_details/${product.id}`} key={product.id}>
                        <div className='px-2 cursor-pointer relative mb-4' key={product.id}>
                            <div>
                                <img src={product.image_url} alt='image' className='w-full h-40' />
                            </div>
                            <div>
                                <h2 className='my-1'>
                                    <span className='text-green-800 text-lg font-bold'>Now ${Number(product.final_price)} </span>
                                    
                                    {/* Conditionally render initial_price if it differs from final_price */}
                                    {product.final_price !== product.initial_price && (
                                        <span className="pl-5 text-sm text-gray-600 line-through">
                                            ${Number(product.initial_price).toFixed(2)}
                                        </span>
                                    )}
                                </h2>
                                <p className='text-gray-600 text-wrap text-sm'>{product.title.substring(0, 50)}...</p>
                                <button className='bg-white border-2 border-gray-500 hover:border-gray-800 rounded-full px-4 p-1 text-sm font-semibold my-2 text-gray-500'>Options</button>
                            </div>
                            <div className='absolute right-8 top-3'>
                                <FaRegHeart className='text-2xl' />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ApiDjango;