import React from 'react'
import Heading from '../Shared/Heading';
import Img1 from '../../assets/blogs/blog-1.jpg'
import Img2 from '../../assets/blogs/blog-2.jpg'
import Img3 from '../../assets/blogs/blog-3.jpg'

const BlogData = [
    {
        title: 'How to choose perfect smartwatch',
        subtitle: 'Your Guide to Style, Health, and Technology — This highlights the three main reasons people buy smartwatches',
        published: 'April 10, 2025 by Zunair',
        image: Img1,
        aosDelay: '0'
    },
    {
        title: 'How to choose perfect gadget',
        subtitle: 'From health tracking to seamless connectivity, discover the essential features you need to find the perfect companion for your wrist and lifestyle',
        published: 'April 10, 2025 by John',
        image: Img2,
        aosDelay: '200',
    },
    {
        title: 'How to choose perfect VR headset',
        subtitle: 'Step into a new dimension of entertainment with cutting-edge optics and immersive sound that blur the lines between reality and the digital world',
        image: Img3,
        published: "April 10, 2025 by Scorates",
        aosDelay: '400'
    }
]

const Blogs = () => {
  return (
    <div className='my-12'>
      <div className="container">
          {/* Header Section */}
            <Heading  title="Recent News" subtitle={"Explore Our Blogs"} />

            {/* blog section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4
             md:gap-7'>

                {/* blog card */}
               {
                 BlogData.map((data) => (
                    <div data-aos='fade-up'
                    data-aos-delay={data.aosDelay}
                    key={data.title} className='bg-gray-900'>
                        {/* image section */}
                        <div className='overflow-hidden rounded-2xl mb-2 '>
                            <img src={data.image} alt=""
                            className='w-full h-55 object-cover rounded-2xl hover:scale-105 duration-500' />
                        </div>
                        {/* content section */}
                        <div className='space-y-2'>
                            <p className='text-xs text-gray-500 py-2'>{data.published}</p>
                            <p className='font-bold line-clamp-1'>{data.title}</p>
                            <p className='line-clamp-2 text-sm text-gray-400'>{data.subtitle}</p>
                        </div>
                    </div>
                 ))
               }

            </div>
      </div>
    </div>
  )
}

export default Blogs
