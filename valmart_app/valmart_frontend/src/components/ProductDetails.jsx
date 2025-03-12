import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaTruckMoving } from "react-icons/fa";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { CartContext } from '../context/CartContext';



const ProductDetails = () => {
    const { id } = useParams(); // Use useParams to get the id
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}/`)
            .then(response => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the product!', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    const multiImageURL = product.images
        ?.replace(/[{}]/g, "") // Remove curly braces
        .split(",");


    // Split the delivery string by commas and periods
    const deliveryParts = product.delivery
        .replace([], "")
        .split(/[,.]/)
        .filter(part => part.trim() !== "");

    // Split the features string by commas and periods
    const productFeatures = product.features
        .replace({}, "")
        .split(/[,.]/)
        .filter(features => features.trim() !== "");

    // Split the user review string by commas and periods
    const productReview = product.top_review
        .replace({}, "")
        .split(/[,.]/)
        .filter(userReview => userReview.trim() !== "");



    // image slider function
    function changeImage(src) {
        document.getElementById('mainImage').src = src;
        // console.log("image log", src);

    }

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-5 gap-6 relative">
                {/* Left Column: Product Image Slider */}
                <div className="col-span-4">
                    <div className="grid grid-cols-4 gap-8">

                        <div className="col-span-2">

                            {/* <!-- Product Images --> */}
                            <div className="w-full px-4 mb-8">
                                <img id="mainImage" src={multiImageURL[0]} alt="Product"
                                    className="w-full h-96 rounded-lg shadow-md mb-4" />

                                <div className="space-y-4 flex gap-4 py-4 justify-center overflow-x-auto">
                                    {multiImageURL.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Product Image ${index + 1}`}
                                            onClick={() => changeImage(image)}
                                            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Middle Column: Product Details */}
                        <div className="col-span-2">
                            <p className='underline text-slate-400'>{product.brand}</p>
                            <h1 className="font-bold mb-4">{product.title}</h1>
                            <div className="flex items-center mb-4">
                                <span className="text-yellow-500 text-sm">★★★★☆</span>
                                <span className="ml-2 text-gray-400 text-sm">({product.rating}) </span>
                                <span className='ml-2 text-gray-400 text-sm underline'> | {product.reviews_count}</span>

                            </div>
                            <hr className="border-1 border-gray-200 w-full my-4 block" />
                            <div>
                                <p className="font-bold">About this item
                                </p>
                                <p className="text-gray-700 mb-6 text-sm">{product.description}</p>
                            </div>

                        </div>
                    </div>

                    {/* accordion section */}
                    <div>
                        <p className='font-semibold text-xl'>About this item </p>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Product Features</AccordionTrigger>
                                <AccordionContent>
                                    <ul className="space-y-2 ">
                                        {productFeatures.map((features, index) => (
                                            <li key={index} className="">
                                                ✅ {features.trim()}
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Specifications                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className='mb-3'>
                                        <p className='font-semibold'>Brand</p>
                                        <p className='text-sm text-gray-500'>{product.brand}</p>
                                    </div>

                                    <div className='mb-3'>
                                        <p className='font-semibold'>Manufacturer</p>
                                        <p className='text-sm text-gray-500'>{product.manufacturer}</p>
                                    </div>

                                    <div className='mb-3'>
                                        <p className='font-semibold'>Department</p>
                                        <p className='text-sm text-gray-500'>{product.department}</p>
                                    </div>

                                    <div className='mb-3'>
                                        <p className='font-semibold'>Country of Origin</p>
                                        <p className='text-sm text-gray-500'>{product.country_of_origin}</p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* Customer Reviews section */}
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
                        <ul className="space-y-4">
                            {productReview.map((userReview, index) => (
                                <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                    <p className="text-sm text-gray-700 mb-2"> 🎯 {userReview.trim()}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Column: Product Price and Add to Cart Button */}
                <div className="col-span-1 bg-gray-100 p-4 rounded-lg shadow-md sticky top-32 right-0 h-screen">
                    <div className="">
                        <p className="text-2xl text-green-600 font-bold mb-2">
                            <span> Now ${Number(product.final_price)}</span>
                            {product.final_price !== product.initial_price && (
                                <span className='pl-5 text-sm text-gray-400 line-through'>${Number(product.initial_price)}</span>
                            )}

                        </p>

                        <p className="text-sm text-green-600 font-bold mb-2">
                            You Save ${((product.initial_price) - Number(product.final_price)).toFixed(2)}
                        </p>

                        <div className='mb-1'>
                            <span className='text-xs text-gray-600 flex items-center'><FaTruckMoving className='mr-2' /> Free Shipping</span>
                        </div>

                        <button onClick={() => addToCart(product)} className="w-full bg-blue-600 text-white py-2 rounded-full px-6 hover:bg-blue-800 transition duration-300">
                            Add to Cart
                        </button>

                        <div className="mt-4">
                            <p className='font-semibold mb-3'>Delivery Information </p>
                            {/* Delivery Information */}
                            <ul className="space-y-2 ">
                                {deliveryParts.map((part, index) => (
                                    <li key={index} className="text-sm text-gray-500">
                                        🚚 {part.trim()}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;