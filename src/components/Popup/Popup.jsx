import React, { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";

const Popup = ({ orderPopup, handleOrderPopup }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    handleOrderPopup();
  };

  return (
    <>
      {orderPopup && (
        <div>
          <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
            <div className='w-75 bg-gray-900 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md  duration-200 rounded-xl'>
              {/* Header section */}
              <div className='flex items-center justify-between mb-4'>
                <h1 className='text-xl font-semibold text-gray-300'>Order Now</h1>
                <div>
                  <IoMdCloseCircleOutline 
                    onClick={handleOrderPopup}
                    className='text-2xl cursor-pointer text-gray-300 hover:text-red-500 transition'
                  />
                </div>
              </div>

              {/* Form section */}
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-900 bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-900 bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-gray-900 bg-white"
                    required
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


export default Popup
  