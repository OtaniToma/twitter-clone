import "./App.css";
import Timeline from "./components/timeline/Timeline";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Timeline />
    </div>
  );
}

export default App;
