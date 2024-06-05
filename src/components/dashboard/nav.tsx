import { Bell, ChevronDown, Grid2X2, Home, MenuIcon } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="py-3 border-b">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <img src="/image 2.png" alt="" />
          <div className="flex items-center cursor-pointer hover:opacity-90 transition-opacity ease-linear duration-300 text-xs font-medium space-x-1.5 rounded-lg py-1 px-3 bg-[#f1f1f1] ">
            <div className=" text-[#2faad0] text-xs p-1 bg-[#ccf3ff] flex justify-center items-center h-4 w-4 ">
                <span>&#x25;</span>
            </div>
            <span className="text-[#878787] ">People</span>
            <ChevronDown className="h-4 w-4" color="#878787" />
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          <div className="cursor-pointer">
            {/* <img className="w-8 h-6 object-contain " src="/Union.png" alt="" /> */}
            <Home className="opacity-90 " />
          </div>

          <div className="cursor-pointer">
            {/* <img className="w-8 h-6 object-contain " src="/Frame 30.png" alt="" /> */}
            <Grid2X2 className="text-[#2898a4]" />
          </div>


          <div className="cursor-pointer">
            <img className="w-8 h-6 object-contain " src="Vector.png" alt="" />
          </div>

          <div className="cursor-pointer">
            <Bell />
          </div>

          <div className="h-[25px] w-[1px] bg-black/25 " />

          <div className="cursor-pointer">
            <img className="w-8 h-6 object-contain " src="/Group 1547.png" alt="" />
          </div>
        </div>

        <div className="lg:hidden">
            <MenuIcon />
        </div>
      </div>
    </div>
  );
};
