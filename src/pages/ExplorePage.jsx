/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalpages, settotalpages] = useState(0);

  const fetchData = async () => {
    try {
      const res = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });
      setData((prev) => {
        return [...prev, ...res.data.results];
      });
      settotalpages(res.data.total_pages);
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
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchData();
  }, [params.explore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-16">
      <div className="container mx-auto px-2">
        <h3 className="capitalize text-xl text-center md:text-start  md:text-2xl font-bold my-3">
          Popular {params.explore} Shows
        </h3>

        <div className="grid md:grid-cols-[repeat(auto-fit,230px)] justify-center grid-cols-[repeat(auto-fit,150px)] gap-6">
          {data.map((v, i) => {
            return (
              <Card
                data={v}
                key={v.id + "exploreSection"}
                media_type={params.explore}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
