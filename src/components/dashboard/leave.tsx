export const Leave = () => {
  return (
    <div className="bg-white shadow-md border p-3  rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-xl font-medium mb-1">People on Leave</h4>
          <p className="text-xs text-[#878787] mb-3">
            View people on leave at a glance
          </p>
        </div>
        <div>
          <button className="bg-[#f2f2f2] py-1.5 px-4 text-sm rounded-lg hover:opacity-80 transition-opacity duration-300 ease-linear font-medium text-[#545454]  ">
            View All
          </button>
        </div>
      </div>

      <div className="flex justify-between flex-col lg:flex-row  space-y-5 lg:space-y-0 lg:space-x-4 rounded-xl ">
        <div className="flex flex-col items-center  text-center bg-[#fef6e6] px-1 rounded-lg p-2">
          {/* <div className px-3='h-8  w-8 bg-black rounded-full mbflex-1 /> */}
          <img src="/unsplash.png" alt="" className="" />
          <h3 className="font-semibold  leading-none mt-3">
            John <br /> Michael
          </h3>
          <h6 className="text-[#878787] text-sm mb-3">Lead Designer</h6>
          <div className="flex flex-col justify-between items-center">
            <div className="p-1 px-3 rounded-lg bg-[#fcdc9c] text-[#a17318] font-medium text-xs mb-2 ">
              Sick Leave
            </div>
            <div className="text-xs">
              Start date: <b>Jan 23</b>
            </div>
            <div className="text-xs my-1.5">
              Resumption date: <b>Jan 24</b>
            </div>
            <div className="text-xs">1 Day(s) </div>
          </div>
        </div>
        <div className="flex px-3 flex-col items-center  text-center bg-[#fef6e6] flex-1 rounded-lg p-2">
          <img src="/unsplash.png" alt="" className="" />
          <h3 className="font-semibold  leading-none mt-3">
            Godwin <br /> Folorunke
          </h3>
          <h6 className="text-[#878787] text-sm mb-3">Lead Marketer</h6>

          <div className="flex flex-col justify-between items-center">
            <div className="flex flex-col justify-between items-center">
              <div className="p-1 px-3 rounded-lg bg-[#fcdc9c] text-[#a17318] font-medium text-xs mb-2 ">
                Sick Leave
              </div>
              <div className="text-xs">
                Start date: <b>Jan 23</b>
              </div>
              <div className="text-xs my-1.5">
                Resumption date: <b>Jan 26</b>
              </div>
              <div className="text-xs">2 Day(s) </div>
            </div>
          </div>
        </div>
        <div className="flex px-3 flex-col items-center  text-center bg-[#eaf8fa] flex-1 rounded-lg p-2">
          <img src="/unsplash.png" alt="" className="" />
          <h3 className="font-semibold  leading-none mt-3">
            Ebunoluwa <br /> Taniwo
          </h3>
          <h6 className="text-[#878787] text-sm mb-3">Designer</h6>

          <div className="flex flex-col justify-between items-center">
            <div className="p-1 px-3 rounded-lg bg-[#d6f2f5] text-[#2898a4] font-medium text-xs mb-2 ">
              Travel Leave
            </div>
            <div className="text-xs">
              <b>Jun 23 - Jun 23, 2022</b>
            </div>
            <div className="text-xs">7 Day(s) </div>
          </div>
        </div>
        <div className="flex px-3 flex-col items-center  text-center bg-[#ebeffa] flex-1 rounded-lg p-2">
          <img src="/unsplash.png" alt="" className="" />
          <h3 className="font-semibold  leading-none mt-3">
            Godwin <br /> Folorunke
          </h3>
          <h6 className="text-[#878787] text-sm mb-3">Designer</h6>

          <div className="p-1 px-3 rounded-lg bg-[#d6dff5] text-[#4069d0] font-medium text-xs mb-2 ">
            Maternal Leave
          </div>
          <div className="text-xs">
            <b>Jan 23 - Jun 25, 2022</b>
          </div>
          <div className="text-xs">90 Day(s) </div>
        </div>
      </div>
    </div>
  );
};
