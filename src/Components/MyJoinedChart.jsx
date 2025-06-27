import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const MyJoinedChart = ({ totalGroups, myJoinedGroups }) => {
  const remaining = totalGroups - myJoinedGroups;
  const chartData = [
    { name: "Joined Groups", value: myJoinedGroups },
    { name: "Total Groups", value: remaining < 0 ? 0 : remaining },
  ];

  const COLORS = ["#10b981", "#d1d5db"];

  return (
    <div className="bg-base-100 p-6 w-full rounded-2xl my-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Joined Groups</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            dataKey="value"
            label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
          >
            {chartData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyJoinedChart;
