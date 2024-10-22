import { BsViewList } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
export default function SelectedSection({selectedName}:{selectedName: string}){
  return <div className="flex gap-12 p-6">
    <div className="flex gap-2 items-center">
      <BsViewList />
      <p>List</p>
    </div>
    <div className="flex gap-2 items-center">
      <MdOutlineSpaceDashboard />
      <p>Board</p>
    </div>
    <div className="flex gap-2 items-center">
      <FaRegCalendarAlt />
      <p>Calendar</p>
    </div>
  </div>

}
