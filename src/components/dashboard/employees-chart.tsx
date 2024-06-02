

export const EmployeesChart = () => {
  return (
    <div className="relative h-[8rem] overflow-hidden flex flex-col justify-between rounded-lg shadow-md border bg-[#f8f8f8] items-start ">
      <h6 className="px-3 pt-1.5 font-medium text-lg z-10 text-[#545454] ">Total Employees</h6>

      <div className="px-3 flex justify-between z-10 w-full items-center">
        <a
          href="#"
          className="text-[#2898a4]  hover:underline text-xs font-medium"
        >
          View all employees
        </a>

        <h2 className="text-[#545454] font-semibold text-2xl ">36</h2>
      </div>
      <div className="h-full -rotate-[5deg] w-[110%] -bottom-[4.4rem] -right-[1rem] rounded-3xl bg-[#ededed] absolute" />
    </div>
  );
};
