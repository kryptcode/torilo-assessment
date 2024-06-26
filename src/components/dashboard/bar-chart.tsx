import { useState } from "react";
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
import { Skeleton } from "../ui/skeleton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [activeTab, setActiveTab] = useState("birthdays");

  const data = {
    labels: [
      "Tech",
      "Admin",
      "Customer Support",
      "Operations",
      "Frontdesk",
      "Backend",
    ],
    datasets: [
      {
        label: "Male",
        data: [0, 0, 7, 2, 0, 1],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Female",
        data: [0, 0, 0, 1, 10, 1],
        backgroundColor: "rgba(255, 206, 86, 0.5)",
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Staff Distribution by Department and Gender",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 2,
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md border p-3  rounded-lg">
      <div className=" mb-4 bg-[#f2f2f2] border p-1.5 px-2 items-center font-medium justify-between rounded-xl inline-flex space-x-4 text-sm ">
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

      <div className="mb-4"></div>

      {activeTab === "birthdays" ? (
        <div className="mt-5">
          <Bar data={data} options={options} />
        </div>
      ) : (
        <div>
          <Skeleton className="w-[40px] h-[20px] mb-3 rounded-full" />
          <Skeleton className="w-full h-[20px] mb-3 rounded-md" />
          <Skeleton className="w-full h-[70px] mb-3 rounded-md" />
        </div>
      )}
    </div>
  );
};

export default BarChart;
