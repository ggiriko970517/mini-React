import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoCard from './components/VideoCard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <VideoCard />
      </div>
    </div>
  );
}

export default App;