import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Navbar /> */}
        <h1>Your personal budget <br></br> ...on the go</h1>
        <MainContent />
      </header>
        <Footer />
    </div>
  );
}

export default App;
