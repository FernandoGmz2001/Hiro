import { LuSearch } from "react-icons/lu";

export default function NavbarRight() {
  return <>
    <div className="flex gap-4 items-center border-gray-300 border-2 rounded-full px-4 py-2 w-[200px]">
      <LuSearch className="text-gray-600 text-xl"/>
      <input placeholder="Search..." className="focus:outline-none w-full"/>
    </div>
  </>
}
