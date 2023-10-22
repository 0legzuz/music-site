import React from 'react';
import * as TrackListStyles from '../../styles/TrackListStyles';
import * as NavMenuStyles from '../../styles/NavMenuStyles';
import * as SideBarStyles from '../../styles/SideBarStyles';
import * as SkeletonModuleStyles from '../../styles/SkeletonStyles';
import * as AudioPlayerStyles from '../../styles/AudioPlayerStyles';
import * as AppStyles from '../../styles/AppStyles.jsx';
const UserIcon = '/img/icon/exit.svg';

const S = {
  ...TrackListStyles,
  ...NavMenuStyles,
  ...SideBarStyles,
  ...SkeletonModuleStyles,
  ...AudioPlayerStyles,
  ...AppStyles
};

export default function Skeleton() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <S.MainNav>
            <S.NavLogo>
              <S.LogoImage src="img/icon/exit.svg" alt="logo" />
            </S.NavLogo>
            <S.NavBurger>
              <S.BurgerLine></S.BurgerLine>
              <S.BurgerLine></S.BurgerLine>
              <S.BurgerLine></S.BurgerLine>
            </S.NavBurger>
            <S.NavMenu>
              <S.MenuList>
                <S.MenuItem>
                  <S.MenuLink href="#" className="menu__link">
                    Главное
                  </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink href="#" className="menu__link">
                    Мой плейлист
                  </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink href="#">Войти</S.MenuLink>
                </S.MenuItem>
              </S.MenuList>
            </S.NavMenu>
          </S.MainNav>
          <S.MainCenterblock>
            <S.CenterblockSearch>
              <S.SearchSvg>
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
              </S.SearchSvg>
              <S.SearchText type="search" placeholder="Поиск" name="search" />
            </S.CenterblockSearch>

            <S.CenterblockH2>Треки</S.CenterblockH2>
            <S.CenterblockFilter>
              <S.FilterTitle>Искать по:</S.FilterTitle>

              <S.FilterButton className="button-author _btn-text">
                исполнителю
              </S.FilterButton>

              <S.FilterButton className="button-year _btn-text">
                году выпуска
              </S.FilterButton>

              <S.FilterButton className="filter__button button-genre _btn-text">
                жанру
              </S.FilterButton>
            </S.CenterblockFilter>
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
                        <S.TrackTitleLinkSkeleton href="#">
                          <S.TrackTitleSpan></S.TrackTitleSpan>
                        </S.TrackTitleLinkSkeleton>
                      </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                      <S.TrackAuthorLinkSkeleton href="#"></S.TrackAuthorLinkSkeleton>
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                      <S.TrackAlbumLinkSkeleton href="#"></S.TrackAlbumLinkSkeleton>
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
              <S.SidebarIcon>
                <img src={UserIcon} alt="User Icon" />
              </S.SidebarIcon>
            </S.SidebarPersonal>
            <S.SidebarBlock>
              <S.SidebarList>
                <S.SidebarItemSkeleton>
                  <S.SidebarLink href="#"></S.SidebarLink>
                </S.SidebarItemSkeleton>
                <S.SidebarItemSkeleton>
                  <S.SidebarLink href="#"></S.SidebarLink>
                </S.SidebarItemSkeleton>
                <S.SidebarItemSkeleton>
                  <S.SidebarLink href="#"></S.SidebarLink>
                </S.SidebarItemSkeleton>
              </S.SidebarList>
            </S.SidebarBlock>
          </S.MainSidebar>
        </S.Main>
        <S.Bar>
          <S.BarContent>
            <S.BarPlayerProgress></S.BarPlayerProgress>
            <S.BarPlayerBlock>
              <S.BarPlayer>
                <S.PlayerControls>
                  <S.PlayerBtnPrev>
                    <S.PlayerBtnPrevSvg className="_btn" alt="prev">
                      <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                    </S.PlayerBtnPrevSvg>
                  </S.PlayerBtnPrev>
                  <S.PlayerBtnPlay className="_btn">
                    <S.PlayerBtnPlaySvg alt="play">
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlay>
                  <S.PlayerBtnNext className="_btn">
                    <S.PlayerBtnNextSvg alt="next">
                      <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                    </S.PlayerBtnNextSvg>
                  </S.PlayerBtnNext>
                  <S.PlayerBtnRepeat className="_btn">
                    <S.PlayerBtnPrevSvg alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerBtnPrevSvg>
                  </S.PlayerBtnRepeat>
                  <S.PlayerBtnShuffle className="_btn">
                    <S.PlayerBtnShuffleSvg alt="shuffle">
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                    </S.PlayerBtnShuffleSvg>
                  </S.PlayerBtnShuffle>
                </S.PlayerControls>

                <S.PlayerTrackPlay>
                  <S.TrackPlayContain>
                    <S.TrackPlayImage>
                      <S.TrackPlaySvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </S.TrackPlaySvg>
                    </S.TrackPlayImage>
                    <S.TrackPlayAuthorSkeleton></S.TrackPlayAuthorSkeleton>
                    <S.TrackPlayAlbumSkeleton></S.TrackPlayAlbumSkeleton>
                  </S.TrackPlayContain>

                  <S.TrackPlayLikeDis>
                    <S.TrackPlayLike className="_btn-icon">
                      <S.TrackPlayLikeSvg alt="like">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </S.TrackPlayLikeSvg>
                    </S.TrackPlayLike>
                    <S.TrackPlayDislike className="_btn-icon">
                      <S.TrackPlayDislikeSvg alt="dislike">
                        <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                      </S.TrackPlayDislikeSvg>
                    </S.TrackPlayDislike>
                  </S.TrackPlayLikeDis>
                </S.PlayerTrackPlay>
              </S.BarPlayer>
              <S.BarVolumeBlock>
                <S.VolumeContent>
                  <S.VolumeImage>
                    <S.VolumeSvg alt="volume">
                      <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                    </S.VolumeSvg>
                  </S.VolumeImage>
                  <S.VolumeProgress className="_btn">
                    <S.VolumeProgressLine
                      className="_btn"
                      type="range"
                      name="range"
                    />
                  </S.VolumeProgress>
                </S.VolumeContent>
              </S.BarVolumeBlock>
            </S.BarPlayerBlock>
          </S.BarContent>
        </S.Bar>
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
}
