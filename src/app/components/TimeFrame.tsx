import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import taskData from "../dashboard/task-data.json";
import graph from "/images/graph.png";
import Image from "next/image";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TimeFrame = () => {
  const chartData = {
    labels: taskData.activity.monthly.map((item) => item.month),
    datasets: [
      {
        label: "Monthly Activity",
        data: taskData.activity.monthly.map((item) => item.value),
        backgroundColor: "#3b82f6",
        borderRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { display: true }, beginAtZero: true },
    },
  };

  return (
    <div className="p-4 bg-gray-50 h-30%">
      {/* Main Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Metrics Section */}
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
            <div className="bg-white-100 rounded-lg p-4 shadow">
              <h4 className="text-gray-500 text-sm text-center">Active Users</h4>
              <p className="text-xl text-black text-center font-bold">
                {taskData.metrics.active_users.current}/
                {taskData.metrics.active_users.total}
              </p>
            </div>
            <div className="bg-white-100 rounded-lg p-4 shadow">
              <h4 className="text-gray-500 text-sm text-center">Questions Answered</h4>
              <p className="text-xl text-black text-center font-bold">
                {taskData.metrics.questions_answered}
              </p>
            </div>
            <div className="bg-white-100 rounded-lg p-4 shadow">
              <h4 className="text-gray-500 text-sm text-center">Av. Session Length</h4>
              <p className="text-xl text-black font-bold text-center">
                {Math.floor(
                  taskData.metrics.average_session_length_seconds / 60
                )}
                m {taskData.metrics.average_session_length_seconds % 60}s
              </p>
            </div>
            <div className="bg-white-100 rounded-lg  shadow flex flex-col pl-4 items-center">
              <h4 className="text-gray-500 text-sm mb-2">Starting Knowledge</h4>
              <p className="text-xl text-black font-bold mb-4">
                {taskData.metrics.starting_knowledge_percentage}%
              </p>
              <div className="w-full h-20 relative">
                <Image
                  src={graph}
                  alt="Knowledge Graph"
                  className="object-contain"
                  layout="fill"
                />
              </div>
            </div>
            <div className="bg-white-100 rounded-lg  shadow flex flex-col pl-4 items-center">
              <h4 className="text-gray-500 text-sm mb-2">Current Knowledge</h4>
              <p className="text-xl text-black font-bold mb-4">
                {taskData.metrics.current_knowledge_percentage}%
              </p>
              <div className="w-full h-20 relative">
                <Image
                  src={graph}
                  alt="Knowledge Graph"
                  className="object-contain"
                  layout="fill"
                />
              </div>
            </div>

            <div className="bg-white-100 rounded-lg  shadow flex flex-col p-4 items-center">
              <h4 className="text-gray-500 text-sm mb-2">Current Knowledge</h4>
              <p className="text-xl text-black font-bold mb-4">
                +
                {taskData.metrics.current_knowledge_percentage -
                  taskData.metrics.starting_knowledge_percentage}
                %
              </p>
              <div className="w-full h-20 relative">
                <Image
                  src={graph}
                  alt="Knowledge Graph"
                  className="object-contain"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-lg p-4 shadow">
          <h4 className="text-gray-500 text-sm mb-4">Activity</h4>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default TimeFrame;
