import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import Headphone from './assets/hero/headphone.png'
import Products from './components/Products/Products'
import smartwatch2 from './assets/category/smartwatch2.png'
import Blogs from './components/Blogs/Blogs'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import AOS from 'aos';
import 'aos/dist/aos.css';




const BannerData = { 
  discount: '30% OFF',
  title: 'Fine Smile',
  date: '18 April to 28 April',
  image: Headphone,
  title2: 'Air Solo Bass',
  title3: 'Winter Sale',
  title4: 'Experience the Chill Beat works exceptionally well because it plays on the "Winter" theme',
  bgColor: '#f42c37'

}
const BannerData2 = { 
  discount: '30% OFF',
  title: 'Happy Hours',
  date: '18 April to 28 April',
  image: smartwatch2,
  title2: 'Smart Solo',
  title3: 'Winter Sale',
  title4: 'Elevate your daily routine with a timepiece that does more than just tell time',
  bgColor: '#2dcc6f'

}

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  React.useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
        offset: 100,
      }
    );
    AOS.refresh();
  }, [])



  return (
 <div className='bg-gray-900 text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup}  />
      <Category />
      <Category2 />
      <Services/>
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer  />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
    </div>
  )
}

export default App