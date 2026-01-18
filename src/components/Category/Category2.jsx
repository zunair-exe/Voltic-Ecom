import React from 'react';
import Image1 from '../../assets/category/gaming.png';
import Image2 from '../../assets/category/vr.png';
import Image3 from '../../assets/category/speaker.png';
import Button from '../Shared/Button';

const Category = () => {
  return (
    <div className='py-8 bg-gray-900 overflow-hidden'> {/* Added overflow-hidden safety */}
      <div className='container mx-auto px-4'> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* first col */}

           <div className='sm:col-span-2 py-10 pl-5 bg-linear-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-80 flex items-end overflow-hidden'>
            <div className='relative z-10'>
              <div className='mb-4'>
                <p className='mb-0.5 text-white'>Enjoy</p>
                <p className='text-2xl font-semibold mb-0.5'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Console</p>
                <Button text="Browse" bgColor="bg-red-600" textColor="text-white" />
              </div>
            </div>
            <img src={Image1} alt="" className='w-62.5 sm:w-[320px] absolute -right-4 top-1/2 -translate-y-1/2' />
          </div>
          
          {/* second col  */}
          <div className='py-10 pl-5 bg-linear-to-br from-[#2dcc6f]/90 to-[#2dcc6f]/90 text-white rounded-3xl relative h-80 flex items-start'>
            <div className='relative z-10'>
              <div className='mb-4'>
                <p className='mb-0.5 text-white'>Enjoy</p>
                <p className='text-2xl font-semibold mb-0.5'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>VR</p>
                <Button text="Browse" bgColor="bg-white" textColor="text-[#2dcc6f]" />
              </div>
            </div>
            <img src={Image2} alt="" className='w-62.5 absolute bottom-0 -right-4' />
          </div>

          {/* third col  */}
          <div className='py-10 pl-5 bg-linear-to-br from-[#1376f4] to-[#1376f4]/90 text-white rounded-3xl relative h-80 flex items-start '>
            <div className='relative z-10'>
              <div className='mb-4'>
                <p className='mb-0.5 text-white'>Enjoy</p>
                <p className='text-2xl font-semibold mb-0.5'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Speaker</p>
                <Button text="Browse" bgColor="bg-white" textColor="text-[#1376f4]" />
              </div>
            </div>
            <img src={Image3} alt="" className='w-[320px] absolute -right-4 lg:top-10' />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Category;