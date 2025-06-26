import React from "react";
import hs1 from "./../assets/hs-1.png";
import hs2 from "./../assets/hs-2.png";
import hs3 from "./../assets/hs-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        direction="horizontal"
      >
        <SwiperSlide>
          <div className="bg-[url('assets/bb-1.png')] bg-cover bg-center mx-auto lg:flex lg:justify-between justify-center items-center px-16 h-[28rem] md:h-[36rem]">
            <div className="text-center lg:text-left pt-7 lg:pt-0 space-y-4 lg:space-y-9">
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-base-100">
                Discover Your Passion
              </h1>

              <p className="text-2xl text-gray-600">
                Find like-minded people, explore new hobbies, and build lasting
                friendships!
              </p>
            </div>
            <img
              src={hs1}
              className="max-w-5/12 mx-auto lg:mx-0 max-h-[36rem]"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('assets/bb-2.png')] bg-cover bg-center lg:flex lg:justify-between justify-center items-center px-16 h-[28rem] md:h-[36rem]">
            <div className="text-center lg:text-left pt-7 lg:pt-0 space-y-4 lg:space-y-9">
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-base-100">
                Create & Grow Your Own Group
              </h1>
              <p className="text-2xl text-gray-600 lg:mr-22">
                Start your own hobby group and invite people who share your
                interests!
              </p>
            </div>
            <img
              src={hs2}
              className="max-w-5/12 mx-auto lg:mx-0 max-h-[36rem]"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('assets/bb-3.png')] bg-cover bg-center lg:flex lg:justify-between justify-center items-center px-16 h-[28rem] md:h-[36rem]">
            <div className="text-center lg:text-left pt-5 lg:pt-0 space-y-4 lg:space-y-9">
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-base-100">
                Join Exciting Local Events
              </h1>
              <p className="text-2xl text-gray-600">
                Engage in fun activities and local meet-ups with fellow hobby
                enthusiasts!
              </p>
            </div>
            <img
              src={hs3}
              className="lg:max-w-8/12 mx-auto lg:mx-0 max-h-[36rem]"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
