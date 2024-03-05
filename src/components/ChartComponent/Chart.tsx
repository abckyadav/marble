import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data } from "../../data/index";
import { ChartTooltip } from "./ChartTooltip";
import { CustomYAxisTick } from "./CustomYAxisTick";
import { CustomLegend } from "./CutstomLegend";
import { DataItem } from "../../interfaces";
import CustomDateRangePicker from "./CustomDateRangePicker";

const Chart: React.FC = () => {
  const initialData: DataItem[] = [...data].sort((a: DataItem, b: DataItem) => {
    const [aMonth, aYear] = a.date.split(" ");
    const [bMonth, bYear] = b.date.split(" ");
    const aDate = new Date(`${aYear} ${aMonth}`);
    const bDate = new Date(`${bYear} ${bMonth}`);
    return aDate.getTime() - bDate.getTime();
  });
  const [selectedData, setSelectedData] = useState<DataItem[]>(initialData);

  return (
    <div>
      <div>
        <CustomDateRangePicker />
      </div>
      <ResponsiveContainer height={300}>
        <LineChart
          height={400}
          data={selectedData}
          margin={{
            top: 20,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 0" vertical={false} />
          <XAxis
            dataKey="date"
            tickCount={selectedData?.length ?? 0}
            tick={{
              stroke: "#7a7a7a",
              strokeWidth: 0.4,
              fontSize: ".9rem",
            }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tick={<CustomYAxisTick />}
            interval="preserveStartEnd"
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            content={
              <ChartTooltip
                data={selectedData}
                colors={{
                  stroke: "rgb(65, 179, 255)",
                  fill: "rgba(54, 163, 235, 0.301)",
                }}
              />
            }
            wrapperStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.459)",
              border: "0 solid #000000a4",
              borderRadius: "10px",
            }}
          />
          <Legend content={<CustomLegend data={selectedData} />} />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#53baff"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#73cafc"
            strokeDasharray="3 4 5 2"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
