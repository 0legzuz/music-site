import React, { useState } from 'react';
import * as S from '../../styles/AppStyles.jsx';
import NavMenu from '../../components/NavMenu.jsx';
import TrackList from '../../components/TrackList.jsx';
import SideBar from '../../components/SideBar.jsx';
import AudioPlayer from '../../components/AudioPlayer.jsx';

export default function MainPage() {
  const [playerVisible, setPlayerVisible] = useState(false);
  const showPlayer = () => setPlayerVisible(true);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <TrackList onTrackClick={showPlayer} />
          <SideBar />
          {playerVisible && <AudioPlayer />}
        </S.Main>
      </S.Container>
    </S.Wrapper>
  );
}
