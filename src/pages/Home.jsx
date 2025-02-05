import { useSelector } from "react-redux";
import { BannerHome } from "../components/BannerHome";
import Cardslide from "../components/Cardslide";
import useFetch from "../hooks/useFetch";

export const Home = () => {
  const trendingData = useSelector((state) => state.movieslice.bannerdata);

  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: topRatedData } = useFetch("/movie/top_rated");
  const { data: upcomingData } = useFetch("/movie/upcoming");
  const { data: popularData } = useFetch("/tv/popular");
  const { data: OnAir } = useFetch("/tv/airing_today");

  return (
    <div>
      <BannerHome />
      <Cardslide data={trendingData} heading={"Trending"} trending={true} />
      <Cardslide
        data={nowPlayingData}
        heading={"Now playing"}
        media={"movie"}
      />
      <Cardslide
        data={upcomingData}
        heading={"Upcoming Movies"}
        media={"movie"}
      />
      <Cardslide
        data={topRatedData}
        heading={"Top-Rated Movies"}
        media={"movie"}
      />
      <Cardslide data={popularData} heading={"Popular TV Shows"} media={"tv"} />
      <Cardslide data={OnAir} heading={"Upcoming TV Shows"} media={"tv"} />
    </div>
  );
};
