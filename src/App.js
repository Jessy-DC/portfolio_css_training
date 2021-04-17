import './styles/style.css';
import Navbar from './components/navbar'
import Home from "./components/home";
import SectionTxtImage from "./components/sectionTxtImage";
import H2 from "./components/H2";
import Creations from "./components/creations";

function App() {
  return (
      <div>
          <Navbar />
          <Home />
          <H2 class="titleSec1">Lorem ipsum dolor sit amet.</H2>
          <SectionTxtImage />
          <H2 class="titlePortfolio">Lorem ipsum dolor sit amet.</H2>
          <hr className="divPort" />
          <Creations />
      </div>
  );
}

export default App;
