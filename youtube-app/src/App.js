import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoList from './components/VideoList';
import './styles/App.scss';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Header toggleSidebar={toggleSidebar} />
      <div className="main-content">
        {isSidebarOpen && <Sidebar />}
        <VideoList />
      </div>
    </div>
  );
}

export default App;
