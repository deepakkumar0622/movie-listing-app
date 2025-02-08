import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";

import useFetchDetails from "../hooks/useFetchDetial";
import Divider from "../components/Divider";
import useFetch from "../hooks/useFetch";
import Cardslide from "../components/Cardslide";
import { FaRegCirclePlay } from "react-icons/fa6";
import { useState } from "react";
import VideoPlay from "../components/VideoPlay";

export const DetailsPage = () => {
  const imageUrldata = useSelector((state) => state.movieslice.imageUrl);
  const params = useParams();
  console.log(params);

  const [playVideo, setPlayVideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState(" ");

  const { data } = useFetchDetails(`/${params.explore}/${params.id}`);
  const { data: castData } = useFetchDetails(
    `/${params.explore}/${params.id}/credits`
  );
  const { data: similarData } = useFetch(
    `/${params.explore}/${params.id}/similar`
  );
  const { data: reccData } = useFetch(
    `/${params.explore}/${params.id}/recommendations`
  );
  console.log("similar", similarData);

  const duration = (Number(data?.runtime) / 60).toFixed(2).split(".");
  const director = castData?.crew
    ?.filter((e) => e?.job === "Director")
    ?.map((e) => e?.name)
    .join(" , ");

  const writer = castData?.crew
    ?.filter((e) => e?.job === "Writer")
    ?.map((e) => e?.name)
    .join(" , ");

  const handleClick = (v) => {
    setPlayVideoId(v);
    setPlayVideo(true);
  };

  return (
    <div>
      <div className="w-full h-[350px]  lg:block hidden overflow-hidden relative">
        <div className="w-full h-full">
          <img
            className="h-full w-full  object-cover"
            src={imageUrldata + data?.backdrop_path}
            alt=""
          />
        </div>
        <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-5 md:px-10 md:py-0 py-16 flex flex-col md:flex-row">
        <div className="lg:-mt-28 mt-0 relative mx-auto md:mx-8 w-fit">
          <img
            className="h-80 max-w-50 object-cover rounded"
            src={imageUrldata + data?.poster_path}
            alt=""
          />
          <button
            onClick={() => handleClick(data)}
            className="relative my-5  mx-auto flex max-w-[200px] active:scale-75 cursor-pointer text-white group
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

        <div className=" my-2">
          <h2 className="text-xl md:text-3xl font-bold text-white ">
            {data?.title || data?.name}
          </h2>
          <p className="text-gray-300 my-1 italic font-medium text-xs">
            &quot;{data?.tagline}&quot;
          </p>
          <Divider />
          <div className="flex my-2 md:text-sm text-xs gap-3">
            <p>Rating: {Number(data?.vote_average).toFixed(2)} +</p>|
            <p>Views : {Number(data?.vote_count)}</p>|
            <p>
              Duration:{duration[0]}h {duration[1]}m
            </p>
          </div>
          <Divider />
          <div>
            <h2 className="text-xl font-bold text-white mb-1 ">Overview</h2>
            <p className="text-sm ">{data?.overview}</p>
            <Divider />
            <div className="text-sm my-2 space-y-1">
              <p>Status: {data?.status}</p>
              <p>
                Release Date:{" "}
                {moment(data?.release_date).format("MMMM Do YYYY")}
              </p>
              <p>Revenue: {Number(data?.revenue)}</p>
            </div>
            <Divider />
          </div>
          <div>
            <p>
              <span className="text-white">Director</span> : {director}
            </p>
            <p>
              <span className="text-white">Writer</span> : {writer}
            </p>
          </div>
          <Divider />
          <h2 className="text-2xl md:xl font-bold my-2">Cast:</h2>
          <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5">
            {castData?.cast
              .filter((e) => e.profile_path)
              .map((v, i) => {
                return (
                  <div key={i}>
                    <div>
                      <img
                        className="w-24 h-24 object-cover rounded-full"
                        src={imageUrldata + v?.profile_path}
                      />
                    </div>
                    <p className=" my-1 text-center font-semibold text-sm">
                      {v?.name}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div>
        <div>
          <Cardslide
            data={similarData}
            heading={"Similar" + " " + params.explore}
            media={params.explore}
          />
          <Cardslide
            data={reccData}
            heading={"Recommended" + " " + params.explore}
            media={params.explore}
          />
        </div>
        {playVideo && (
          <VideoPlay
            data={playVideoId}
            close={() => setPlayVideo(false)}
            media_type={params.explore}
          />
        )}
      </div>
    </div>
  );
};
