import NavbarRight from "./NavbarRight";
import SelectedSection from "./SelectedSection";

export default function Navbar(){
  return(<>
    <nav className="flex justify-between items-center p-6">
      <div><SelectedSection /></div>
      <div><NavbarRight /></div>
    </nav>
  </>)
}
