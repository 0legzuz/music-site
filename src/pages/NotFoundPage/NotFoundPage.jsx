import React from 'react';
const UserIcon = '/img/icon/exit.svg';
import * as TrackListStyles from '../../styles/TrackListStyles';
import * as NotFoundPageStyles from '../../styles/NotFoundPageStyes';
import * as NavMenuStyles from '../../styles/NavMenuStyles';
import * as SideBarStyles from '../../styles/SideBarStyles';
import * as SkeletonModuleStyles from '../../styles/SkeletonStyles';
import * as AudioPlayerStyles from '../../styles/AudioPlayerStyles';
import * as AppStyles from '../../styles/AppStyles.jsx';

const S = {
  ...TrackListStyles,
  ...NavMenuStyles,
  ...SideBarStyles,
  ...SkeletonModuleStyles,
  ...AudioPlayerStyles,
  ...AppStyles,
  ...NotFoundPageStyles
};

export default function NotFoundPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <S.MainNav>
            <S.NavLogo to="/">
              <S.LogoImage src="/img/icon/logo.svg" alt="logo" />
            </S.NavLogo>
            <S.NavBurger>
              <S.BurgerLine></S.BurgerLine>
              <S.BurgerLine></S.BurgerLine>
              <S.BurgerLine></S.BurgerLine>
            </S.NavBurger>
          </S.MainNav>
          <S.MainCenterblockErrorPage>
            <S.CenterblockSearch>
              <S.SearchSvg>
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
              </S.SearchSvg>
              <S.SearchText type="search" placeholder="Поиск" name="search" />
            </S.CenterblockSearch>
            <S.CenterblockError>
              <S.ErrorCode>404</S.ErrorCode>
              <S.ErrorBlock>
                <S.ErrorText>Страница не найдена</S.ErrorText>
                <img src="/img/crying.png" alt="smile" />
              </S.ErrorBlock>
              <S.ErrorHelp>
                Возможно, она была удалена или перенесена на другой адрес
              </S.ErrorHelp>
              <S.MainBackButton>
                <S.MainBackLink to="/">Вернуться на главную</S.MainBackLink>
              </S.MainBackButton>
            </S.CenterblockError>
          </S.MainCenterblockErrorPage>
          <S.MainSidebar>
            <S.SidebarPersonal>
              <S.SidebarIcon>
                <img src={UserIcon} alt="User Icon" />
              </S.SidebarIcon>
            </S.SidebarPersonal>
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
                      <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                    </S.PlayerBtnPrevSvg>
                  </S.PlayerBtnPrev>
                  <S.PlayerBtnPlay className="_btn">
                    <S.PlayerBtnPlaySvg alt="play">
                      <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlay>
                  <S.PlayerBtnNext className="_btn">
                    <S.PlayerBtnNextSvg alt="next">
                      <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                    </S.PlayerBtnNextSvg>
                  </S.PlayerBtnNext>
                  <S.PlayerBtnRepeat className="_btn">
                    <S.PlayerBtnPrevSvg alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerBtnPrevSvg>
                  </S.PlayerBtnRepeat>
                  <S.PlayerBtnShuffle className="_btn">
                    <S.PlayerBtnShuffleSvg alt="shuffle">
                      <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                    </S.PlayerBtnShuffleSvg>
                  </S.PlayerBtnShuffle>
                </S.PlayerControls>

                <S.PlayerTrackPlay>
                  <S.TrackPlayContain>
                    <S.TrackPlayImage>
                      <S.TrackPlaySvg alt="music">
                        <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                      </S.TrackPlaySvg>
                    </S.TrackPlayImage>
                    <S.TrackPlayAuthorSkeleton></S.TrackPlayAuthorSkeleton>
                    <S.TrackPlayAlbumSkeleton></S.TrackPlayAlbumSkeleton>
                  </S.TrackPlayContain>

                  <S.TrackPlayLikeDis>
                    <S.TrackPlayLike className="_btn-icon">
                      <S.TrackPlayLikeSvg alt="like">
                        <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                      </S.TrackPlayLikeSvg>
                    </S.TrackPlayLike>
                    <S.TrackPlayDislike className="_btn-icon">
                      <S.TrackPlayDislikeSvg alt="dislike">
                        <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
                      </S.TrackPlayDislikeSvg>
                    </S.TrackPlayDislike>
                  </S.TrackPlayLikeDis>
                </S.PlayerTrackPlay>
              </S.BarPlayer>
              <S.BarVolumeBlock>
                <S.VolumeContent>
                  <S.VolumeImage>
                    <S.VolumeSvg alt="volume">
                      <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
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
