/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { FaStarHalfAlt } from "react-icons/fa";

const Card = ({ data, trending, index, media_type }) => {
  const imageUrldata = useSelector((state) => state.movieslice.imageUrl);
  const mediaType = data.media_type ?? media_type;
  return (
    <div>
      <Link
        to={"/" + mediaType + "/" + data.id}
        className="relative w-full hover:scale-105 transition-all  md:max-w-[250px] max-w-[250px]  block  rounded h-72 md:h-90
    "
      >
        {data?.poster_path ? (
          <img src={imageUrldata + data?.poster_path} />
        ) : (
          <div className="font-bold flex items-center h-full justify-center">
            No Image Found
          </div>
        )}

        <div className="absolute top-4">
          {trending && (
            <div className="py-1 px-4 backdrop-blur-3xl bg-black/50 overflow-hidden rounded-r-full">
              #{index} Trending
            </div>
          )}
        </div>
        <div className="absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/50 p-2">
          <h2 className="line-clamp-1 text-sm md:text-md font-semibold">
            {data?.title || data?.name}
          </h2>
          <div className="md:text-xs text-[10px] text-neutral-400 flex items-center justify-between">
            <p>{moment(data.release_date).format("MMMM Do YYYY")}</p>
            <p className="flex items-center  md:items-baseline gap-2 bg-black/25 p-1 rounded text-white">
              <FaStarHalfAlt size={16} />
              <span className="mt-1">
                {" "}
                {Number(data.vote_average).toFixed(2)}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
