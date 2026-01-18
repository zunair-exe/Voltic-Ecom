import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FooterLinks = [
    {
        title: "home",
        link: '/#',
    },
    {
        title: 'About',
        link: '/#about',
    },
    {
        title: 'Contact',
        link: '/#contact',
    },
    {
        title: 'Blog',
        link: '/#blog',
    },
];

const Footer = () => {
  return (
    <div className='bg-gray-950 '>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5 ">
            {/* company details */}
            <div className='py-8 px-4'>
             <a href="#"
                className='text-red-600 font-semibold tracking-widest text-2xl uppercase 
                sm:text-3xl px-6'>
                    Voltic
                </a>
                <p className='text-gray-300/60 lg:pr-24 pt-3 '>
                     Redefining your tech experience with premium electronics built for the modern world. 
                </p>
                <button className='inline-block bg-red-500 text-white py-2 px-4 mt-4 text-sm rounded-full hover:bg-red-400'>Contact Us</button>
            </div>

            {/* Footer links */}
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10  '>
                <div className='py-8 px-4'>
                    <h className='text-xl font-bold sm:text-left mb-3'>Important Links</h>
                    <ul className='space-y-3 py-4 '>
                        {
                            FooterLinks.map(
                                (data,index) => (
                                    <li key={index}>
                                        <a href={data.link} 
                                        className='text-gray-600 hover:text-white duration-200 '>
                                            {data.title}
                                        </a>
                                    </li>
                                ))
                        }
                    </ul>
                </div>
                {/* second col links */}

                <div className='py-8 px-4'>
                    <h className='text-xl font-bold sm:text-left mb-3'>Quick Links</h>
                    <ul className='space-y-3 py-4 '>
                        {
                            FooterLinks.map(
                                (data,index) => (
                                    <li key={index}>
                                        <a href={data.link} 
                                        className='text-gray-600 hover:text-white duration-200'>
                                            {data.title}
                                        </a>
                                    </li>
                                ))
                        }
                    </ul>
                </div>
                  {/* company address */}
                  <div className='py-8 px-4 col-span-2 sm:col-auto'>
                    <h className='text-xl font-bold sm:text-left mb-3'>Address</h>
                    <div>
                        <div className='flex items-center gap-3 py-4'>
                            <FaLocationArrow />
                            <p>HYD, Pakistan</p>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                                <FaMobileAlt />
                                <p>+92 3331234567</p>
                            </div>

                            {/* social links */}
                            <div className='flex items-center gap-3 mt-6'>
                                <a href="#">
                                    <FaInstagram className='text-3xl hover:text-red-500 duration-300' />
                                </a>
                                 <a href="#">
                                    <FaFacebook  className='text-3xl hover:text-red-500 duration-300' />
                                </a>
                                 <a href="#">
                                    <FaTwitter className='text-3xl hover:text-red-500 duration-300' />
                                </a>
                            </div>
                            
                    </div>

                  </div>

            </div>
           
        </div>
      </div>
    </div>
  )
}

export default Footer
