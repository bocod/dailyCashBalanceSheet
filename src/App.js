import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Navbar /> */}
        <MainContent />
        <Footer />

      </header>
    </div>
  );
}

export default App;
