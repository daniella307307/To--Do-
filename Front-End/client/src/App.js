import "./App.css";
import Body from "./Components/Middle/Body";
import Navbar from "./Components/Navbar/Navbar";
import LeftSidebar from "./Components/Sidebar/LeftSidebar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div>
       <div className="w-full h-[10vh]">
        <Navbar/>
       </div>
       <div className="flex justify-between p-2">
        <Sidebar/>
        <Body/>
        <LeftSidebar/>
       </div>
    </div>
  )
}

export default App;
