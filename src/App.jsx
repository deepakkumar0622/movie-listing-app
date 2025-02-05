import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData, setImgaeUrl } from "./slices/movieHubSlice";

const App = () => {
  const dispatch = useDispatch();

  const fetchTreadingData = async () => {
    try {
      const response = await axios.get(`/trending/all/day`);
      dispatch(setBannerData(response.data.results));
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchConfigData = async () => {
    try {
      const response = await axios.get(`/configuration`);
      dispatch(setImgaeUrl(response.data.images.secure_base_url + "original"));
      console.log();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTreadingData();
    fetchConfigData();
  }, []);

  return (
    <div className="md:mb-0 mb-14">
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default App;
