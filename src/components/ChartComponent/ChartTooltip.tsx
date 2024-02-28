import LineImage from "../../assets/Line 3.png";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import lightline from "../../assets/lightline.svg";

export const ChartTooltip = ({ active, payload, coordinate, data }: any) => {
  if (active && payload && payload.length && data && data.length >= 2) {
    const tooltipStyle = {
      left: coordinate.x,
      top: coordinate.y,
    };

    const currentMonthData = payload[0].payload;
    const currentIndex = data.findIndex(
      (item: any) => item.date === currentMonthData.date
    );

    if (currentIndex > 0) {
      const previousMonthData = data[currentIndex - 1];

      const percentageChange: number =
        ((currentMonthData.pv - previousMonthData.pv) / previousMonthData.pv) *
        100;
      const absPercentageChange = Math.abs(Math.round(percentageChange));

      return (
        <div
          className="p-1 py-2 px-4 flex flex-col drop-shadow-md bg-white justify-center items-start  rounded-lg"
          style={tooltipStyle}
        >
          <p className="Previous text-xs py-1 flex items-center gap-2">
            <img className="m-1 p-1" src={LineImage} alt="Line" />
            {`${currentMonthData.date} `}
            <span className="p-1  flex flex-row gap-3 font-semibold">
              {currentMonthData.pv}
              <span className="flex flex-row gap-2">
                {previousMonthData.pv > currentMonthData.pv ? (
                  <FaArrowTrendDown className="text-lg font-bold text-[#7a7a7a]" />
                ) : (
                  <FaArrowTrendUp className="text-lg font-bold text-[#7a7a7a]" />
                )}
                {absPercentageChange}%
              </span>
            </span>
          </p>

          <p className="text-xs py-1 flex items-center gap-2">
            <img className="m-1 p-1" src={lightline} alt="Line" />
            {`${previousMonthData.date} `}
            <span className="p-1 font-semibold">{previousMonthData.pv}</span>
          </p>
        </div>
      );
    }
  }

  return null;
};
