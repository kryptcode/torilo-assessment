import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const GenderDistribution = () => {
  const data = {
    labels: ["Male", "Female", "Not Specified"],
    datasets: [
      {
        data: [20, 10, 6],
        backgroundColor: [
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(255, 99, 132, 0.5)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.label || "";

            if (label) {
              label += ": ";
            }
            if (context.raw !== null) {
              label += context.raw;
            }
            return label;
          },
        },
      },
    },
    cutout: "40%",
  };
  return (
    <div className="bg-white shadow-md border p-3  rounded-lg">
      <h4 className="text-xl font-medium mb-1">Employee Gender Distribution</h4>
      <p className="text-xs text-[#878787] mb-3">
        Here is a breakdown of gender distribution
      </p>
      <div className="mb-3"></div>

      <div className="relative lg:w-[18rem] lg:h-[18rem]   ">
        <Doughnut data={data} options={options} />
        <div
          className="absolute left-1/2 top-1/2  -translate-x-1/2  -translate-y-[70%] text-center"
        >
          <h2>36</h2>
        </div>
      </div>
    </div>
  );
};
