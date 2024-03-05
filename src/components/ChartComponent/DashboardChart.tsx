import { useEffect, useState } from "react";
import Chart from "./Chart";
import HeadingCard from "./HeadingCard";
import Skeleton from "../Skelton/Skeleton";

const DashboardChart = () => {
  const [active, SetActive] = useState(true);
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      SetLoading(true);
    }, 1500);
  }, []);

  return (
    <>
      <div className="py-4 bg-[#FFFFFF]">
        {loading ? (
          <div
            className=" drop-shadow-md rounded-2xl bg-[#FFFFFF] mt-5
      px-4 py-4 w-[95%] m-auto  border-red-700"
          >
            <HeadingCard SetActive={SetActive} active={active} />

            {active && <Chart />}
          </div>
        ) : (
          <Skeleton />
        )}
      </div>
    </>
  );
};

export default DashboardChart;
