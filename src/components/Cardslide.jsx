import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./Card";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
const Cardslide = ({ data = [], heading, trending, media }) => {
  const swiperRef = useRef(null);

  return (
    <div className="relative">
      <div className="container mx-auto px-10 my-5">
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-1 capitalize">
            {heading}
          </h2>
        </div>

        <Swiper
          ref={swiperRef}
          slidesPerView={5}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            "@0.75": {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          grabCursor={true}
          speed={2000}
          className="m-5 "
        >
          {data.map((v, i) => (
            <SwiperSlide key={i}>
              <Card
                data={v}
                trending={trending}
                index={i + 1}
                media_type={media}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute top-0 hidden md:flex  w-full h-full items-center justify-between  opacity-75 px-2">
        <button
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="cursor-pointer "
        >
          <FaCircleChevronLeft size={28} />
        </button>
        <button
          onClick={() => swiperRef.current.swiper.slideNext()}
          className="cursor-pointer"
        >
          <FaCircleChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default Cardslide;
