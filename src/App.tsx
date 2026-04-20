import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MentalHealth from "./components/MentalHealth";
import SelfCheck from "./components/SelfCheck";
import Clinics from "./components/Clinics";
import "./index.css";
import HowToSeek from "./components/HowToSeek";
import MythsVsReality from "./components/Mythsvsreality";
import Volunteers from "./components/Volunteers";
import Crisis from "./components/Crisis";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: "68px" }}>
        <Hero />
        <MentalHealth />
        <SelfCheck />
        <Clinics />
        <HowToSeek/>
        <MythsVsReality/>
        <Volunteers/>
        <Crisis/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;