import '../styles/App.css';

import Routes from "../routes/index";
import Navbar from '../components/navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes/>
    </div>
  );
}

export default App;
