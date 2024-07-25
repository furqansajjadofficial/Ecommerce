import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/Header';
import { storeData } from '../../assets/data/dummyData';
import { addToCart } from '../../features/cartSlice';

const Productpage = () => {
  const productId = useSelector((state) => state.product.id);
  const product = storeData.find((item) => item.id === productId);
  const dispatch = useDispatch();
  const paymentVerified = useSelector((state) => state.auth.userData.paymentData?.verified);
  const isLoggedIn = useSelector((state) => state.auth.logined);

  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleBought = () => {
    if (paymentVerified) {
      const orderData = {
        productName: product.name,
        productId: product.id,
        productDescription: product.text,
        selectedColor: color,
        selectedSize: size,
      };

    } else {
      alert('Payment not verified.');
    }
  };

  return (
    <>
      <Header />
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="Product"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-white text-3xl title-font font-medium mb-1">{product.name}</h1>
              <p className="leading-relaxed">{product.text}</p>
              <div className="flex flex-wrap mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                <div className="flex ml-6 items-center my-2">
                  <span className="mr-3">Colour</span>
                  <div className="relative">
                    <select
                      id='color'
                      className="rounded border border-gray-700 focus:ring-2 focus:ring-red-900 dark:bg-gray-800 bg-white appearance-none py-2 focus:outline-none focus:border-red-500 dark:text-white text-red-600 pl-3 pr-10"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    >
                      {product.color.map((color, index) => (
                        <option key={index}>{color}</option>
                      ))}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="flex ml-6 items-center my-2">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      id='size'
                      className="rounded border border-gray-700 focus:ring-2 focus:ring-red-900 dark:bg-gray-800 bg-white appearance-none py-2 focus:outline-none focus:border-red-500 dark:text-white text-red-600 pl-3 pr-10"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    >
                      {product.size.map((size, index) => (
                        <option key={index}>{size}</option>
                      ))}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-white">${product.price}</span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={handleBought}>Buy Now</button>
                {isLoggedIn ? (
                  <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Productpage;
