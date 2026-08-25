import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Itinerary from "./components/Itinerary";
import TravelTips from "./components/TravelTips";
import Foods from "./components/Foods";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero/>
    <Destinations/>
    <Itinerary/>
    <TravelTips/>
    <Foods />
    </div>
  );
}

export default App;