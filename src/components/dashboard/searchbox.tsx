import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// interface Item {
//   name: String;
//   role: String;
// }

const items = [
  { name: "John Michael", role: "Lead Designer" },
  { name: "John Boyega", role: "Actor" },
  { name: "Jane Doe", role: "Designer" },
  { name: "GI Joe", role: "Pill" },
];

export const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<any>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setFilteredItems(
      items.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-[14rem] outline-none placeholder:text-[#a8a8a8]  text-black lg:w-[32rem] border bg-[#f2f2f2] rounded-lg p-1.5 px-3 "
          value={query}
          onChange={handleChange}
        />

        {query && (
          <ul className="absolute w-full mt-1 p-4 bg-white z-30 border border-gray-300 rounded shadow-lg">
            <h4 className="text-sm font-medium text-[#a1a1a1] ">
              Search results
            </h4>
            <div
              className={`${
                filteredItems.length > 3 &&
                "h-[30vh] overflow-y-scroll scrollbar-thin"
              } `}
            >
              {filteredItems.map((item: any, index: number) => (
                <li
                  key={index}
                  className="p-2 rounded-md mb-3 border-b-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setQuery(item.name);
                    setFilteredItems([]);
                  }}
                >
                  <div className="flex space-x-5 items-center">
                    <div className="h-6 w-6 bg-black rounded-full " />
                    <div>
                      <h6 className="font-medium">{item.name}</h6>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </div>
          </ul>
        )}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center h-[40px] text-white text-sm font-medium cursor-pointer hover:opacity-75 transition-opacity duration-300 ease-in-out ">
            <div className="h-full flex justify-center items-center px-3 lg:px-8 rounded-l-lg bg-[#2898a4]">
              <span className="hidden lg:inline-block">Add New</span>
              <span className="lg:hidden">+</span>
            </div>
            <div className="h-full w-[2.5px] bg-white " />
            <div className="bg-[#2898a4] flex  justify-center items-center h-full pl-2 pr-2 lg:pr-4 rounded-r-lg">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <span>Add People</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Import People List</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Add Timeoff</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Add Benefit</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Add Training</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Upload Document</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Create Task</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Add Department</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
