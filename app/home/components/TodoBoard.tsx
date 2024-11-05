import Column from "./Column";

export default function TodoBoard() {
  return (<>
    <div className="grid grid-cols-4 gap-2">
      <Column />
      <Column />
      <Column />
      <Column />
    </div></>)
}
