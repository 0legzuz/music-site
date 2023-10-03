import React from 'react';
import NavMenu from './pages/NavMenu.js';
import TrackList from './pages/TrackList.js';
import SlideBar from './pages/SlideBar.js';
import AudioPlayer from './pages/AudioPlayer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <NavMenu />
            
            <TrackList />
            
            <SlideBar />
            <AudioPlayer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
