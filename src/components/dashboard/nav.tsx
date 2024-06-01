import { Bell, ChevronDown, Home } from "lucide-react";
import React from "react";
import { Separator } from "../ui/separator";

export const Navbar = () => {
  return (
    <div className="py-3">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <img src="/image 2.png" alt="" />
          <div className="flex items-center text-smspace-x-1.5 bg-[#f1f1f1] ">
            <span>&#x25;</span>
            <span>People</span>
            <ChevronDown />
          </div>

          <div></div>
        </div>

        <div className="flex items-center space-x-5">
          <div>
            <Home />
          </div>

          <div>
            <img src="/Frame 30.png" alt="" />
          </div>

          <div>i</div>

          <div>
            <Bell />
          </div>

          <Separator orientation="vertical" />

          <div>
            <span>W</span>
          </div>
        </div>
      </div>
    </div>
  );
};
