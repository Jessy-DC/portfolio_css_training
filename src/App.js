import './styles/style.css';
import Navbar from './components/navbar'
import Home from "./components/home";
import SectionTxtImage from "./components/sectionTxtImage";

function App() {
  return (
      <div>
          <Navbar />
          <Home />
          <h2 className="titleSec1">Lorem ipsum dolor sit amet.</h2>
          <SectionTxtImage />
      </div>
  );
}

export default App;
