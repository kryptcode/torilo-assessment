

export const AttendanceCard = () => {
  return (
    <div className='bg-white shadow-md border p-3 text-[#545454] rounded-lg'>
        <h6 className='text-xs text-center font-medium text-[#545454]'>27, Monday January, 2021 </h6>
        <h4 className='text-center font-semibold text-lg mt-2 mb-4'>Today&apos;s Attendance</h4>

        <div className='w-full h-[12px] relative mb-4'>
            <div className='w-1/2 rounded-l-md absolute top-0 z-[4] left-0 bottom-0 rounded-r-md bg-[#c2d4ff] h-full ' />
            <div className='w-2/3 rounded-l-md z-[3] absolute top-0 left-0 bottom-0 bg-[#ffe7e7] rounded-r-md' />
            <div className='w-full rounded-l-md absolute top-0 left-0 bottom-0 bg-[#fce2af] rounded-r-md' />
        </div>

        <div className='flex justify-center items-center border-b pb-4 space-x-4 mb-2'>
            <div className='text-xs font-medium flex space-x-1.5 items-center'>
                <div className='h-4 w-4 bg-[#c2d4ff] rounded-sm ' />
                <span>Present</span>
            </div>
            <div className='text-xs font-medium flex space-x-1.5 items-center'>
                <div className='h-4 w-4 bg-[#ffe7e7] rounded-sm ' />
                <span>Absent</span>
            </div>
            <div className='text-xs font-medium flex space-x-1.5 items-center'>
                <div className='h-4 w-4 bg-[#fce2af] rounded-sm ' />
                <span>Out of Work</span>
            </div>
        </div>

        <div className='text-center'>
            <a href="#" className='text-[#2898a4]  hover:underline text-xs font-medium'>View in Time & Attendance</a>
        </div>
    </div>
  )
}
