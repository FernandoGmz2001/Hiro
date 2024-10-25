import { AiOutlineMessage } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { LuSearch } from "react-icons/lu";

export default function NavbarRight() {
  return <div className="flex gap-4 items-center">
    <div className="flex gap-4 items-center border-gray-200 border-2 rounded-full px-4 py-2 w-[200px]">
      <LuSearch className="text-gray-500 text-2xl" />
      <input placeholder="Search..." className="focus:outline-none w-full placeholder:text-sm" />
    </div>
    <div className="flex gap-4 items-center ">
      <AiOutlineMessage className="text-xl text-gray-500" />
      <GoBell className="text-xl text-gray-500" />
      <div className="rounded-full w-[30px] h-[30px] bg-red-300 flex items-center justify-center">
        P
      </div>
    </div>
  </div>
}
