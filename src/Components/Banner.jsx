import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

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
          <div className="relative bg-[url('https://i.ibb.co/ZRPg2XVX/group-running.jpg')] bg-cover bg-center mx-auto flex lg:justify-between justify-center items-center px-16 min-h-[70vh]">
            <div className="absolute inset-0 bg-black/50 lg:hidden z-0"></div>
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-0"></div>
            <div className="text-center lg:text-left pt-7 lg:pt-0 space-y-4 lg:space-y-9 relative z-10 w-11/12 mx-auto">
              <h1 className="text-4xl md:text-6xl text-white">
                Discover Your Passion
              </h1>

              <p
                className="text-2xl md:text-3xl text-primary
              "
              >
                Find like-minded people, explore new hobbies, and build lasting
                friendships!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-[url('https://i.ibb.co/XrdWFQFy/group-boating.jpg')] bg-cover bg-center flex lg:justify-between justify-center items-center px-16 min-h-[70vh]">
            <div className="absolute inset-0 bg-black/50 lg:hidden z-0"></div>
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-0"></div>
            <div className="relative z-10 text-center lg:text-left pt-7 lg:pt-0 space-y-4 lg:space-y-9 w-11/12 mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-white">
                Create & Grow Your Own Group
              </h1>
              <p className="text-2xl md:text-3xl text-primary">
                Start your own hobby group and invite people who share your
                interests!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-[url('https://i.ibb.co/9H75DwDw/group-hike.jpg')] bg-cover bg-center flex lg:justify-between justify-center items-center px-16 min-h-[70vh]">
            <div className="absolute inset-0 bg-black/50 lg:hidden z-0"></div>
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-0"></div>
            <div className="relative z-10 text-center lg:text-left pt-5 lg:pt-0 space-y-4 lg:space-y-9 w-11/12 mx-auto">
              <h1 className="text-4xl md:text-6xl text-white">
                Join Exciting Local Events
              </h1>
              <p className="text-2xl md:text-3xl text-primary">
                Engage in fun activities and local meet-ups with fellow hobby
                enthusiasts!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
