import React, { useState } from 'react';
import * as S from '../styles/TrackListStyles';

export default function TrackList() {
  const [showAuthor, setShowAuthor] = useState(false);
  const [showYear, setShowYear] = useState(false);
  const [showGenre, setShowGenre] = useState(false);

  const toggleAuthor = () => {
    setShowAuthor(!showAuthor);
    setShowYear(false);
    setShowGenre(false);
  };

  const toggleYear = () => {
    setShowYear(!showYear);
    setShowAuthor(false);
    setShowGenre(false);
  };

  const toggleGenre = () => {
    setShowGenre(!showGenre);
    setShowAuthor(false);
    setShowYear(false);
  };

  return (
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

        <S.FilterButton
          className="button-author _btn-text"
          onClick={toggleAuthor}
        >
          исполнителю
        </S.FilterButton>
        {showAuthor && (
          <S.AuthorFilter>
            <S.FilterDropdown>1</S.FilterDropdown>
            <S.FilterDropdown>1</S.FilterDropdown>
            <S.FilterDropdown>1</S.FilterDropdown>
            <S.FilterDropdown>1</S.FilterDropdown>
            <S.FilterDropdown>1</S.FilterDropdown>
            <S.FilterDropdown>1</S.FilterDropdown>
            <S.FilterDropdown>1</S.FilterDropdown>
          </S.AuthorFilter>
        )}

        <S.FilterButton className="button-year _btn-text" onClick={toggleYear}>
          году выпуска
        </S.FilterButton>
        {showYear && (
          <S.YearFilter>
            <S.FilterDropdown>1</S.FilterDropdown>
            <S.FilterDropdown>1</S.FilterDropdown>
            <S.FilterDropdown>1</S.FilterDropdown>
            <S.FilterDropdown>1</S.FilterDropdown>
            <S.FilterDropdown>1</S.FilterDropdown>
            <S.FilterDropdown>1</S.FilterDropdown>
            <S.FilterDropdown>1</S.FilterDropdown>
          </S.YearFilter>
        )}

        <S.FilterButton
          className="filter__button button-genre _btn-text"
          onClick={toggleGenre}
        >
          жанру
        </S.FilterButton>
        {showGenre && (
          <S.GenreFilter>
            <S.FilterDropdown>1</S.FilterDropdown>
            <S.FilterDropdown>1</S.FilterDropdown>
            <S.FilterDropdown>1</S.FilterDropdown>
            <S.FilterDropdown>1</S.FilterDropdown>
            <S.FilterDropdown>1</S.FilterDropdown>
            <S.FilterDropdown>1</S.FilterDropdown>
            <S.FilterDropdown>1</S.FilterDropdown>
          </S.GenreFilter>
        )}
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
                  <S.TrackTitleLink href="http://">
                    Название трека <S.TrackTitleSpan></S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </div>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="http://">
                  Исполнитель
                </S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="http://">Альбом</S.TrackAlbumLink>
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
  );
}
