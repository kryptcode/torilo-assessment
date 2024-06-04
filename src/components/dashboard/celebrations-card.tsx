import { Cake } from "lucide-react";
import { useState } from "react";

export const CelebrationsCard = () => {
  const [activeTab, setActiveTab] = useState("birthdays");

  const items = [
    { name: "John Michael", role: "Lead Designer" },
    { name: "John Boyega", role: "Actor" },
    { name: "Jane Doe", role: "Designer" },
    { name: "GI Joe", role: "Pill" },
  ];

  return (
    <div className="bg-white shadow-md border p-3  rounded-lg">
      <h4 className="text-xl font-medium mb-2">Celebrations</h4>
      <div className="flex mb-4 bg-[#f2f2f2] border p-1.5 px-2 text-xs items-center font-medium justify-between rounded-xl ">
        <div
          className={`${
            activeTab === "birthdays"
              ? "bg-white text-black font-semibold"
              : "text-[#878787]"
          } p-1.5 px-1.5 rounded-lg cursor-pointer transition-all ease-in-out duration-500`}
          onClick={() => setActiveTab("birthdays")}
        >
          Birthdays
        </div>
        <div
          className={`${
            activeTab === "ani"
              ? "bg-white text-black font-semibold"
              : "text-[#878787]"
          } p-1.5 px-1.5 rounded-lg cursor-pointer transition-all ease-in-out duration-500`}
          onClick={() => setActiveTab("ani")}
        >
          Job Anniversary
        </div>
        <div
          className={`${
            activeTab === "new"
              ? "bg-white text-black font-semibold"
              : "text-[#878787]"
          } p-1.5 px-1.5 rounded-lg cursor-pointer transition-all ease-in-out duration-500`}
          onClick={() => setActiveTab("new")}
        >
          New Hire
        </div>
      </div>

      <div className="h-[10rem] overflow-y-scroll pr-2 scrollbar-thin ">
        <h6 className="text-sm font-medium text-[#a1a1a1]  mb-4">Today</h6>
        <ul className="">
          {items.map((item, index) => (
            <li
              key={index}
              className="p-2 rounded-md mb-3 flex justify-between items-center bg-[#ebeffa] cursor-pointer hover:opacity-90 transition-all duration-200 ease-in"
            >
              <div className="flex space-x-5 items-center">
                <div className="h-6 w-6 bg-black rounded-full" />
                <div>
                  <h5 className="font-semibold text-[#545454] " >{item.name}</h5>
                  <h6 className="text-sm text-gray-500">{item.role}</h6>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <Cake className="h-8 w-8" color="#545454" />
                <p className="text-sm">Jan 23</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
