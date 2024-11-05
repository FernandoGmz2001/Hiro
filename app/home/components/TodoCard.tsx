import BottomCard from "./BottomCard";

export default function TodoCard(){
  return (<div className="flex flex-col leading-loose gap-2 border border-gray-200 rounded-md shadow-sm p-4">
    <div>
    <b>UX Adjustments</b>
    <p>It just need to adapt de UX from what you did before</p>
    </div>
    <div className="flex">
      <div className="px-2 rounded-md bg-red-100 text-red-500">
        Research
      </div>
    </div>
    <BottomCard/>
  </div>)
}
