import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
          speed={4000}
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
                    <Link
                      to={"/" + v.media_type + "/" + v.id}
                      className="group/button my-5 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-500/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-white/50 border border-white/20"
                    >
                      <span className="text-lg">Details</span>
                      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                        <div className="relative h-full w-10 bg-white/30"></div>
                      </div>
                    </Link>
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
