import React from 'react';
import Image1 from '../../assets/category/earphone.png';
import Image2 from '../../assets/category/watch.png';
import Image3 from '../../assets/category/macbook.png';
import Button from '../Shared/Button';

const Category = () => {
  return (
    <div className='py-8 bg-gray-900 overflow-hidden'> {/* Added overflow-hidden safety */}
      <div className='container mx-auto px-4'> {/* Added mx-auto and px-4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* first col - Earphone */}
          <div className='py-10 pl-5 bg-linear-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-80 flex items-end overflow-hidden'>
            <div className='relative z-10'>
              <div className='mb-4'>
                <p className='mb-0.5 text-gray-400'>Enjoy</p>
                <p className='text-2xl font-semibold mb-0.5'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                <Button text="Browse" bgColor="bg-red-600" textColor="text-white" />
              </div>
            </div>
            <img src={Image1} alt="" className='w-62.5 absolute bottom-0 -right-4' />
          </div>

          {/* second col - Watch */}
          <div className='py-10 pl-5 bg-linear-to-br from-yellow-400/90 to-yellow-500 text-white rounded-3xl relative h-80 flex items-end overflow-hidden'>
            <div className='relative z-10'>
              <div className='mb-4'>
                <p className='mb-0.5 text-white'>Enjoy</p>
                <p className='text-2xl font-semibold mb-0.5'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Gadget</p>
                <Button text="Browse" bgColor="bg-white" textColor="text-yellow-500" />
              </div>
            </div>
            <img src={Image2} alt="" className='w-[320px] absolute -right-4 lg:top-10' />
          </div>

          {/* third col - Macbook (Spans 2 columns) */}
          <div className='sm:col-span-2 py-10 pl-5 bg-linear-to-br from-red-500 to-red-600 text-white rounded-3xl relative h-80 flex items-end overflow-hidden'>
            <div className='relative z-10'>
              <div className='mb-4'>
                <p className='mb-0.5 text-white'>Enjoy</p>
                <p className='text-2xl font-semibold mb-0.5'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Laptop</p>
                <Button text="Browse" bgColor="bg-white" textColor="text-red-600" />
              </div>
            </div>
            <img src={Image3} alt="" className='w-62.5 sm:w-[320px] absolute -right-4 top-1/2 -translate-y-1/2' />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Category;