import React, { useState } from 'react';
import NavMenu from '../../components/NavMenu.jsx';

import AudioPlayer from '../../components/AudioPlayer.jsx';
const UserIcon = '/img/icon/exit.svg';

import * as AppStyles from '../../styles/AppStyles.jsx';
import * as TrackListStyles from '../../styles/TrackListStyles';
import * as SideBarStyles from '../../styles/SideBarStyles.jsx';
const S = { ...SideBarStyles, ...TrackListStyles, ...AppStyles };

export default function MyTracks() {
  const [playerVisible, setPlayerVisible] = useState(false);
  const showPlayer = () => setPlayerVisible(true);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <S.MainCenterblock>
            <S.CenterblockSearch>
              <S.SearchSvg>
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
              </S.SearchSvg>
              <S.SearchText type="search" placeholder="Поиск" name="search" />
            </S.CenterblockSearch>

            <S.CenterblockH2>Мои треки</S.CenterblockH2>
            <S.CenterblockContent>
              <S.ContentTitle className="playlist-title">
                <S.PlaylistTitleColTrack>ТРЕК</S.PlaylistTitleColTrack>
                <S.PlaylistTitleColAuthor>ИСПОЛНИТЕЛЬ</S.PlaylistTitleColAuthor>
                <S.PlaylistTitleColAlbum>АЛЬБОМ</S.PlaylistTitleColAlbum>
                <S.PlaylistTitleColTimeLike>
                  <S.PlaylistTitleSvg alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                  </S.PlaylistTitleSvg>
                </S.PlaylistTitleColTimeLike>
              </S.ContentTitle>
              <S.ContentPlaylist className="playlist">
                <S.PlaylistItem>
                  <S.PlaylistTrack className="track">
                    <S.TrackTitle>
                      <S.TrackTitleImage>
                        <S.TrackTitleSvg alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </S.TrackTitleSvg>
                      </S.TrackTitleImage>
                      <div className="track__title-text">
                        <S.TrackTitleLink onClick={showPlayer} href="#">
                          Название трека <S.TrackTitleSpan></S.TrackTitleSpan>
                        </S.TrackTitleLink>
                      </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                      <S.TrackAuthorLink href="#">
                        Исполнитель
                      </S.TrackAuthorLink>
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                      <S.TrackAlbumLink href="#">Альбом</S.TrackAlbumLink>
                    </S.TrackAlbum>
                    <S.TrackTime>
                      <S.TrackTimeSvg alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </S.TrackTimeSvg>
                      <S.TrackTimeText>4:44</S.TrackTimeText>
                    </S.TrackTime>
                  </S.PlaylistTrack>
                </S.PlaylistItem>
              </S.ContentPlaylist>
            </S.CenterblockContent>
          </S.MainCenterblock>
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
