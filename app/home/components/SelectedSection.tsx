'use client'
import { BsViewList } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import { useState } from 'react'

export default function SelectedSection(){
  const [selectedName, setSelectedName] = useState('Board')

  return (
    <div className="flex gap-12 p-6">
      <div className={`flex gap-2 items-center cursor-pointer ${selectedName === 'List' ? 'text-primaryBlue font-bold border-b-2 border-b-primaryBlue transition-colors	duration-300' : 'text-gray-400'}`} onClick={()=>setSelectedName('List')}>
        <BsViewList />
        <p>List</p>
      </div>
      <div className={`flex gap-2 items-center cursor-pointer ${selectedName === 'Board' ? 'text-primaryBlue font-bold border-b-2 border-b-primaryBlue transition-colors	duration-300' : 'text-gray-400'}`} onClick={()=>setSelectedName('Board')}>
        {selectedName === 'Board'?  <MdSpaceDashboard /> : <MdOutlineSpaceDashboard />}
        <p>Board</p>
      </div>
      <div className={`flex gap-2 items-center cursor-pointer ${selectedName === 'Calendar' ? 'text-primaryBlue font-bold border-b-2 border-b-primaryBlue transition-colors	duration-300' : 'text-gray-400'}`} onClick={()=>setSelectedName('Calendar')}>
        { selectedName === 'Calendar' ? <FaRegCalendarAlt /> : <FaCalendarDays /> }
        <p>Calendar</p>
      </div>
  </div>
  )

}
