import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoList from './components/VideoCard';
import './styles/App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="contents">
       <Sidebar />
        <div className="main-content">
         <VideoList />
        </div>
      </div>
    </div>
  );
}

export default App;