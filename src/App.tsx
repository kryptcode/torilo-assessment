import { useState } from "react";
import { Navbar } from "./components/dashboard/nav";
import { SearchBox } from "./components/dashboard/searchbox";
import { EmployeesChart } from "./components/dashboard/employees-chart";
import { AttendanceCard } from "./components/dashboard/attendance-card";
import { CelebrationsCard } from "./components/dashboard/celebrations-card";
import { Leave } from "./components/dashboard/leave";

const tabs = [
  "Overview",
  "People",
  "Timeoff",
  "Holidays",
  "Benefits",
  "Trainings",
  "Onboarding",
  "Documents",
  "Reports",
  "Tasks",
  "Settings",
];

function App() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <main>
        <Navbar />

        {/* tabs */}
        <div className="border-b my-3">
          <div className="w-[90%] overflow-y-scroll lg:overflow-y-hidden  flex justify-between items-end mx-auto text-sm ">
            {tabs.map((tab, index) => (
              <div
                className={
                  `${activeTab === tab.toLowerCase() ? "border-[#2898a4] bg-[#eaf8fa] text-[#2898a4] font-medium" : "text-[#545454]"} group hover:bg-[#eaf8fa] hover:font-medium border-b-2 border-transparent hover:border-[#2898a4]  cursor-pointer transition-all ease-in-out duration-300  rounded-t-lg hover:text-[#2898a4] `
                }
                key={index}
                onClick={() => setActiveTab(tab.toLowerCase())}
              >
                <h6 className="p-1.5 px-5 ">{tab}</h6>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="w-[90%] lg:w-[75%] mx-auto ">
            <SearchBox />

            <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 mt-5">
                {/* Left Container */}
              <div className="flex-1 space-y-6">
                <EmployeesChart />
                <AttendanceCard />
                <CelebrationsCard />

                <div></div>
              </div>

              <div className="flex-[2] ">
                <Leave />
              </div>
            </div>
          </div>
        </div>


      </main>
    </>
  );
}

export default App;
