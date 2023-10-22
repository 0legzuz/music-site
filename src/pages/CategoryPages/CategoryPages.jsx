import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import NavMenu from '../../components/NavMenu.jsx';
import TrackList from '../../components/TrackList.jsx';
import AudioPlayer from '../../components/AudioPlayer.jsx';
import PlaylistOfTheDay from '../../components/PlaylistOfTheDay.jsx';
import IndieCharge from '../../components/IndieCharge.jsx';
import Top100Hits from '../../components/Top100Hits.jsx';

import * as AppStyles from '../../styles/AppStyles.jsx';
import * as SideBarStyles from '../../styles/SideBarStyles.jsx';
const S = {
  ...SideBarStyles,
  ...AppStyles
};

const UserIcon = '/img/icon/exit.svg';

export default function CategoryPages() {
  const params = useParams();
  const id = params.id;
  const [playerVisible, setPlayerVisible] = useState(false);
  const showPlayer = () => setPlayerVisible(true);

  let SpecificComponent;
  switch (id) {
    case '1':
      SpecificComponent = PlaylistOfTheDay;
      break;
    case '2':
      SpecificComponent = Top100Hits;
      break;
    case '3':
      SpecificComponent = IndieCharge;
      break;
    default:
      break;
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          {SpecificComponent ? (
            <SpecificComponent onTrackClick={showPlayer} />
          ) : (
            <TrackList onTrackClick={showPlayer} />
          )}
          <S.MainSidebar>
            <S.SidebarPersonal>
              <S.SidebarPersonalName>0legzuz</S.SidebarPersonalName>
              <S.SignInLink to="/signin">
                <S.SidebarIcon>
                  <img src={UserIcon} alt="User Icon" />
                </S.SidebarIcon>
              </S.SignInLink>
            </S.SidebarPersonal>
          </S.MainSidebar>
          {playerVisible && <AudioPlayer />}
        </S.Main>
      </S.Container>
    </S.Wrapper>
  );
}
