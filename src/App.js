import "./App.css";
import Banner from "./components/Baneer";
import PerritoLaika from "./components/PerritoLaika";
import NavBar from "./components/navBar";
import SectionOne from "./components/SectionOne";
import SectionInfoCorreo from "./components/SectionInfoCorreo";
import SlidesProducts from "./components/SlidesProducts";

function App() {
  return (
    <>
      <NavBar />
      <SectionOne />
      <Banner />
      <SlidesProducts />
      <PerritoLaika />
      <SectionInfoCorreo />
    </>
  );
}

export default App;
