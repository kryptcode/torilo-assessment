import { useState } from "react";
import { Navbar } from "./components/dashboard/nav";
import { SearchBox } from "./components/dashboard/searchbox";

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
          <div className="w-[90%] lg:w-[70%] mx-auto ">
            <SearchBox />
          </div>
        </div>


      </main>
    </>
  );
}

export default App;
