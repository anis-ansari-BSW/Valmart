import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegHeart } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
      <div
          className={className}
          style={{ ...style, display: "block", background: "white", fontSize: "36px" }}
          onClick={onClick}
      />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <div
          className={className}
          style={{ ...style, display: "block", background: "white" }}
          onClick={onClick}
      />
  );
}

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch product data from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

  return (

    <div className='container mx-auto px-10 mt-5'>
      <h1 className={'text-2xl font-bold'}>Save on toys & games</h1>
      <div className="slider-container my-8">
        <Slider {...settings}>
          {products.map((product) => (
            <div className='px-2 cursor-pointer relative' key={product.id}>
              <div>
                <img src={product.image} alt='image' className='w-full h-40' />
              </div>
              <div>
                <h2 className='my-1'>
                  <span className='text-green-800 text-lg font-bold'>Now ${product.price} </span>
                  <span className='pl-5 text-sm text-gray-600 line-through'>${(product.price * 0.9).toFixed(2)}</span>
                </h2>
                <p className='text-gray-600 text-wrap text-sm'>{product.description.substring(0, 50)}...</p>
                <button className='bg-white border-2 border-gray-500 hover:border-gray-800 rounded-full px-4 p-1 text-sm font-semibold my-2 text-gray-500'>Options</button>
              </div>
              <div className='absolute right-8 top-3'>
                <FaRegHeart className='text-2xl' />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductList;
