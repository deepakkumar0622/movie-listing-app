import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

export const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(0);

  const fetchData = async () => {
    try {
      const res = await axios.get(`/search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: 1,
        },
      });
      setData((prev) => {
        return [...prev, ...res.data.results];
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchData();
  }, [location?.search]);

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  console.log();
  return (
    <div className="pt-16">
      <div className="mx-2 my-2  md:hidden sticky top-16 z-30 ">
        <input
          className="placeholder-gray-400 text-gray-700 shadow-xl shadow-black justify-center w-full px-4 py-1 bg-white rounded-full "
          type="text"
          placeholder="search..."
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
        />
      </div>

      <div className="container mx-auto px-2">
        <h2 className="capitalize text-xl text-center md:text-start  md:text-2xl font-bold my-3">
          Search results...
        </h2>
        <div className="grid md:grid-cols-[repeat(auto-fit,230px)] justify-center grid-cols-[repeat(auto-fit,150px)]  gap-6">
          {data.map((v) => {
            return (
              <Card data={v} key={v.id + "search"} media_type={v.media_type} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
