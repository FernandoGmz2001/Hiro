import SelectedSection from "./SelectedSection";

export default function Navbar(){
  return(<>
    <nav className="flex">
      <div><SelectedSection selectedName="Board"/></div>
      <div></div>
    </nav>
  </>)
}
