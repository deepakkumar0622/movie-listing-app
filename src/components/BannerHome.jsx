import { useSelector } from "react-redux";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export const BannerHome = () => {
  const bannerdata = useSelector((state) => state.movieslice.bannerdata);
  const imageUrldata = useSelector((state) => state.movieslice.imageUrl);

  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[100vh]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{
            dynamicBullets: true,
          }}
          speed={3000}
          loop={true}
        >
          {bannerdata.map((v, i) => {
            return (
              <SwiperSlide key={i}>
                <div className=" min-w-full h-[100vh] lg:min-h-full relative ">
                  <div>
                    <img
                      src={imageUrldata + v.backdrop_path}
                      className="md:h-full h-[40rem]  w-full object-cover"
                    />
                  </div>
                  <div className="absolute  top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
                  <div className="container absolute top-1/2 md:top-1/3 mx-auto md:px-10 px-5  max-w-xl">
                    <h2 className="font-bold text-2xl md:text-4xl ">
                      {v.title || v.name}
                    </h2>
                    <p className="line-clamp-3 my-3">{v.overview}</p>
                    <div className="flex items-center gap-4">
                      <p>Rating : {Number(v.vote_average).toFixed(1)}+</p>
                      <span>|</span>
                      <p>Views : {Number(v.popularity).toFixed(0)} </p>
                    </div>
                    <button
                      className="relative my-5 flex max-w-[200px] active:scale-75 cursor-pointer text-white group
                     md:text-base text-sm items-center justify-center font-semibold bg-gradient-to-r from-gray-800 to-black md:px-6 px-5 md:py-2 py-2 rounded-full border border-gray-600  duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
                    >
                      <FaRegCirclePlay
                        size={20}
                        className="absolute left-0 flex items-center justify-center transform group-hover:translate-x-0 group-hover:scale-150 translate-x-7 group-hover:w-full transition-all duration-500"
                      />
                      <span className="text-gray-200 font-semibold ml-8 transform group-hover:opacity-0 group-hover:-translate-x-10 transition-all duration-500">
                        Play Trailer{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
