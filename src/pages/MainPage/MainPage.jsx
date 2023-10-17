import React from 'react';
import * as S from '../../styles/AppStyles.jsx';
import NavMenu from '../../components/NavMenu.jsx';
import TrackList from '../../components/TrackList.jsx';
import SideBar from '../../components/SideBar.jsx';
import AudioPlayer from '../../components/AudioPlayer.jsx';

export default function MainPage() {
  return (
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
  );
}
