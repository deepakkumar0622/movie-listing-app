import { IoCloseSharp } from "react-icons/io5";
import useFetchDetails from "../hooks/useFetchDetial";

// eslint-disable-next-line react/prop-types
const VideoPlay = ({ data, close, media_type }) => {
  const { data: videoData } = useFetchDetails(
    `/${media_type}/${data?.id}/videos`
  );
  console.log(data);
  return (
    <section className="fixed bg-neutral-700/50 top-0 right-0 bottom-0 left-0 z-40 flex justify-center items-center ">
      <div className="bg-black w-full  max-h-[80vh] max-w-screen-lg aspect-video rounded  relative">
        <button
          onClick={close}
          className="absolute -top-7  cursor-pointer -right-2"
        >
          <IoCloseSharp size={30} />
        </button>

        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}
        />
      </div>
    </section>
  );
};

export default VideoPlay;
