import { useState } from "react";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js';
import { Skeleton } from "../ui/skeleton";

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);


export const LineChart = () => {
  const [activeTab, setActiveTab] = useState("birthdays");

  const data = {
    labels: ['Tech', 'Admin', 'Customer Support', 'Operations', 'Frontdesk', 'Logistics'],
    datasets: [
      {
        label: 'Male',
        data: [30, 10, 5, 15, 10, 0],
        borderColor: 'rgba(54, 162, 235, 0.7)',
        backgroundColor: 'rgba(54, 162, 235, 0.3)',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Female',
        data: [25, 5, 0, 10, 15, 5],
        borderColor: 'rgba(255, 99, 132, 0.7)',
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Staff Distribution by Department and Gender',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md border p-3  rounded-lg">
      <div className=" mb-4 bg-[#f2f2f2] border p-1.5 text-sm px-2 items-center font-medium justify-between rounded-xl inline-flex space-x-4 ">
        <div
          className={`${
            activeTab === "birthdays"
              ? "bg-white text-black font-semibold"
              : "text-[#878787]"
          } p-1.5 px-1.5 rounded-lg cursor-pointer transition-all ease-in-out duration-500`}
          onClick={() => setActiveTab("birthdays")}
        >
          People per department
        </div>
        <div
          className={`${
            activeTab === "ani"
              ? "bg-white text-black font-semibold"
              : "text-[#878787]"
          } p-1.5 px-1.5 rounded-lg cursor-pointer transition-all ease-in-out duration-500`}
          onClick={() => setActiveTab("ani")}
        >
          Turn Over
        </div>
      </div>

      <div className="mb-3"></div>

      {activeTab === "birthdays" ? (
        <div className="mt-5">
          <Line data={data} options={options} />
        </div>
      ) : (
        <div>
          <Skeleton className="w-[40px] h-[20px] mb-3 rounded-full" />
          <Skeleton className="w-full h-[20px] mb-3 rounded-md" />
          <Skeleton className="w-full h-[70px] mb-3 rounded-md" />
        </div>
      )}
    </div>
  )
}