import "./App.css";
import Timeline from "./components/timeline/Timeline";
import Sidebar from "./components/sidebar/Sidebar";
import Widgets from "./components/widget/Widgets";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Timeline />
      <Widgets />
    </div>
  );
}

export default App;
