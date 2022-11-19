import "./App.css";
import AboutUs from "./components/AboutUs";
import Body from "./components/Body";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Latest from "./components/Latest";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Heading name="Featured" />
      <Features margin="auto 10%"/>
      <Heading name="Latest" />
      <Latest />
      <Heading name="Trending" />
      <Latest />
      <Heading name="Bagpacking" />
      <Latest />
      <Heading name="HoneyMoon" />
      <Latest />
      <Footer />
      <AboutUs/>
    </div>
  );
}

export default App;
