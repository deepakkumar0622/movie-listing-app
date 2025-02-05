import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import useFetchDetails from "../hooks/useFetchDetial";

export const DetailsPage = () => {
  const imageUrldata = useSelector((state) => state.movieslice.imageUrl);
  const params = useParams();
  console.log(params);

  const { data } = useFetchDetails(`/${params.explore}/${params.id}`);
  const { data: castData } = useFetchDetails(
    `/${params.explore}/${params.id}/credits`
  );
  console.log(data);
  console.log(castData);
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

      <div className="container mx-auto px-5 md:px-10 md:py-0 py-16">
        <div className="lg:-mt-28 mt-0 relative mx-auto md:ml-0 w-fit">
          <img
            className="h-80 w-60 object-cover rounded"
            src={imageUrldata + data?.poster_path}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
