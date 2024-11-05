import ColumnHeader from "./ColumnHeader";
import ColumnBody from "./ColumnBody"

export default function Column() {
  return (<div className="flex flex-col gap-4">
    <ColumnHeader header="Todo"/>
    <ColumnBody />
  </div>)
}
