import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: '/#',
    },
    {
        id: 2,
        name: 'Shop',
        link: '/#shop',
    },
    {
        id: 3,
        name: 'About',
        link: '/#about'
    },
    {
        id: 4,
        name: "Blogs",
        link: '/#blogs',
    },
]

const DropdownLinks = [
    {
        id: 1,
        name: 'Trending Products',
        link: '/#'
    },
    {
        id: 2,
        name: 'Best Selling',
        link: '/#',
    },
    {
        id: 3,
        name: 'Top Rated',
        link: '/#'
    },
]

const Navbar = ({handleOrderPopup}) => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className='container flex justify-between items-center'>
            {/* Logo and Links section */}
            <div className='flex items-center gap-4'>
                <a href="#"
                className='text-red-600 font-semibold tracking-widest text-2xl uppercase
                sm:text-3xl px-6'>
                    Voltic
                </a>
                {/* Menu items */}
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-4 '>
                        {
                            MenuLinks.map((data, index)  => (
                                <li key={index}>
                                    <a href={data.link} 
                                    className='inline-block px-4 font-semibold text-gray-300 hover:text-red-500'>
                                        {" "}
                                        {data.name}
                                        </a>
                                </li>
                            )
                        )
                        }
                        {/* dropdown */}
                        <li className='relative cursor-pointer group '>
                            <a href="#" className='flex items-center gap-0.5 font-semibold py-2 text-gray-300 hover:text-red-500 '>
                                Quick Links
                                <span>
                                <FaCaretDown className='group-hover:rotate-180 duration-300' />
                            </span>
                            </a >
                            {/* dropdown links */}
                            <div className='absolute z-9999 hidden group-hover:block w-45 rounded-md bg-gray-900 shadow-md p-2 text- ' >
                                <ul className='space-y-2'>
                                    {
                                        DropdownLinks.map((data, index) => (
                                            <li>
                                                <a className='inline-block w-full rounded-md p-2 font-semibold hover:text-white hover:bg-[#f42c37] duration-200' 
                                                href={data.link}> {data.name}</a>
                                            </li>

                                        ))
                                    }
                                </ul>

                            </div>
                            
                            
                        </li>
                    </ul>
                </div>
            </div>
            {/* Navbar Right section */}
            <div className='flex justify-between items-center gap-4  '>
                {/* search bar section */}
                <div className='relative group hidden sm:block'>
                    <input type="text" placeholder='Search'
                    className='search-bar '/>
                    <IoMdSearch className='text-xl text-white group-hover:text-[#f42c37] absolute top-1/2 -translate-y-1/2
                    right-3 duration-200  ' />
                </div>
                {/* order-button section */}
                <button className='relative p-3' onClick={handleOrderPopup}>
                   <IoCart className='text-xl  ' />
                   <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex
                   items-center justify-center text-xs  '>
                    4
                   </div>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
