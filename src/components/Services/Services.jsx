import React from 'react'
import{
    FaTruck,
   FaHeadphonesAlt,
    FaWallet,
    FaCheckCircle,

} from 'react-icons/fa'

const ServiceData = [
    {
        id: 1,
        icon: <FaTruck className='text-4xl md:text-5xl text-red-600' />,
        title: 'Free Shipping',
        description: 'Free Shipping On All Order'
        
    },
    {
        id:2,
        icon: <FaCheckCircle className='text-4xl md:text-5xl text-red-600' />,
        title: 'Safe Money',
        description: '30 Days Money Back'
    },
    {
        id: 3,
        icon: <FaWallet className='text-4xl md:text-5xl text-red-600 ' />,
        title: 'Secure Payment',
        description: 'All Payment Secure'
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-red-600' />,
        title: 'Online Support 24/7',
        description: 'Technical Support 24/7'
    }
    ]

const Services = () => {
  return (
    <div className='bg-gray-900'>
      <div className="container items-center justify-between px-15 py-10 ">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
            {
                ServiceData.map((data) => (
                    <div className='flex flex-col items-start sm:flex-row gap-4'>
                        {data.icon}
                        <div>
                    <h1 className='text-white lg:text-xl font-bold'>{data.title}</h1>
                    <h1 className='text-white text-sm'>{data.description}</h1>
                    </div>
                    </div>

                ))
            }
            
        </div>
      </div>
    </div>
  )
}

export default Services
