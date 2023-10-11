import React, { useState, useEffect } from 'react';
import NavMenu from './pages/NavMenu.js';
import TrackList from './pages/TrackList.js';
import SideBar from './pages/SideBar.js';
import AudioPlayer from './pages/AudioPlayer.js';
import Skeleton from './pages/Skeleton.js';
import SignIn from './pages/SignIn.js';
// import SignUp from './pages/SignUp.js';
import '../src/styles/App.css';
import * as G from './styles/global.js';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [isLogged, setLogged] = useState(false);
  window.innerWidth = screen.width;
  window.innerHeight = screen.height;
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <G.GlobalStyle />
      {!isLogged ? (
        isLoading ? (
          <Skeleton />
        ) : (
          <div className="wrapper">
            <div className="container">
              <main className="main">
                <NavMenu />
                <TrackList />
                <SideBar />
                <AudioPlayer />
              </main>
            </div>
          </div>
        )
      ) : (
        <SignIn setLogged={setLogged} />
      )}
    </div>
  );
}

export default App;
