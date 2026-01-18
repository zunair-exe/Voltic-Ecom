import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Button";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Branded",
    title: "Macbook",
    title2: "Laptops",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <section className="relative w-full bg-gray-900 py-10 ">
      <div className="container mx-auto px-4">
        <div className="relative min-h-[550px] sm:min-h-[650px] rounded-3xl hero-bg-color  flex items-center">

          <Slider {...settings} className="w-full">
            {HeroData.map((data) => (
              <div key={data.id} className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center">

                  {/* TEXT */}
                  <div className="flex flex-col gap-4 pt-12 sm:pt-0 sm:pl-3 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                    <h1 data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                     className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                      {data.subtitle}
                    </h1>

                    <h1 
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>

                    <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                     className="uppercase font-bold text-white/5 text-5xl sm:text-[80px] md:text-[100px] xl:text-[150px] whitespace-nowrap ">
                      {data.title2}
                    </h1>

                    <div 
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    >
                      <Button
                        text="Shop By Category"
                        bgColor="bg-red-600"
                        textColor="text-white"
                        handleOrderPopup={handleOrderPopup}
                      />
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div className="order-1 sm:order-2 ">
                    <div data-aos='zoom-in' data-aos-once='true' className="relative z-10"
                    >
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)]"
                    />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </Slider>

        </div>
      </div>
    </section>
  );
};

export default Hero;
