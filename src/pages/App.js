import React, { useState, useEffect } from 'react';
import NavMenu from './NavMenu.js';
import TrackList from './TrackList.js';
import SideBar from './SideBar.js';
import AudioPlayer from './AudioPlayer.js';
import Skeleton from './Skeleton.js';
import SignIn from './SignIn.js';
// import SignUp from './pages/SignUp.js';
import * as G from '../styles/global.js';
import * as S from '../styles/AppStyles.js';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [isLogged, setLogged] = useState(false);
  window.innerWidth = screen.width;
  window.innerHeight = screen.height;
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <G.GlobalStyle />
      {!isLogged ? (
        isLoading ? (
          <Skeleton />
        ) : (
          <S.Wrapper>
            <S.Container>
              <S.Main>
                <NavMenu />
                <TrackList />
                <SideBar />
                <AudioPlayer />
              </S.Main>
            </S.Container>
          </S.Wrapper>
        )
      ) : (
        <SignIn setLogged={setLogged} />
      )}
    </div>
  );
}

export default App;
