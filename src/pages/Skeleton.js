import React from 'react';

export default function Skeleton() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <nav className="main__nav nav">
            <div className="nav__logo logo">
              <img className="logo__image" src="img/logo.png" alt="logo" />
            </div>
            <div className="nav__burger burger">
              <span className="burger__line"></span>
              <span className="burger__line"></span>
              <span className="burger__line"></span>
            </div>
            <div className="nav__menu menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Главное
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Мой плейлист
                  </a>
                </li>
                <li className="menu__item">
                  <a href="../signin.html" className="menu__link">
                    Войти
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="main__centerblock centerblock">
            <div className="centerblock__search search">
              <svg className="search__svg">
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
              </svg>
              <input
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
            <h2 className="centerblock__h2">Треки</h2>
            <div className="centerblock__filter filter">
              <div className="filter__title">Искать по:</div>
              <div className="filter__button button-author _btn-text">
                исполнителю
              </div>
              <div className="filter__button button-year _btn-text">
                году выпуска
              </div>
              <div className="filter__button button-genre _btn-text">жанру</div>
            </div>
            <div className="centerblock__content">
              <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div className="playlist-title__col col03">АЛЬБОМ</div>
                <div className="playlist-title__col col04">
                  <svg className="playlist-title__svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                  </svg>
                </div>
              </div>
              <div className="content__playlist playlist">
                <div className="playlist__item">
                  <div className="playlist__track_skeleton">
                    <div className="track__title">
                      <div className="track__title-image_skeleton"></div>
                      <div className="track__title-text_skeleton"></div>
                    </div>
                    <div className="track__author_skeleton"></div>
                    <div className="track__album_skeleton"></div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track_skeleton track">
                    <div className="track__title">
                      <div className="track__title-image_skeleton"></div>
                      <div className="track__title-text_skeleton"></div>
                    </div>
                    <div className="track__author_skeleton"></div>
                    <div className="track__album_skeleton"></div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track_skeleton track">
                    <div className="track__title">
                      <div className="track__title-image_skeleton"></div>
                      <div className="track__title-text_skeleton"></div>
                    </div>
                    <div className="track__author_skeleton"></div>
                    <div className="track__album_skeleton"></div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track_skeleton track">
                    <div className="track__title">
                      <div className="track__title-image_skeleton"></div>
                      <div className="track__title-text_skeleton"></div>
                    </div>
                    <div className="track__author_skeleton"></div>
                    <div className="track__album_skeleton"></div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track_skeleton track">
                    <div className="track__title">
                      <div className="track__title-image_skeleton"></div>
                      <div className="track__title-text_skeleton"></div>
                    </div>
                    <div className="track__author_skeleton"></div>
                    <div className="track__album_skeleton"></div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track_skeleton track">
                    <div className="track__title">
                      <div className="track__title-image_skeleton"></div>
                      <div className="track__title-text_skeleton"></div>
                    </div>
                    <div className="track__author_skeleton"></div>
                    <div className="track__album_skeleton"></div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track_skeleton track">
                    <div className="track__title">
                      <div className="track__title-image_skeleton"></div>
                      <div className="track__title-text_skeleton"></div>
                    </div>
                    <div className="track__author_skeleton"></div>
                    <div className="track__album_skeleton"></div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track_skeleton track">
                    <div className="track__title">
                      <div className="track__title-image_skeleton"></div>
                      <div className="track__title-text_skeleton"></div>
                    </div>
                    <div className="track__author_skeleton"></div>
                    <div className="track__album_skeleton"></div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track_skeleton track">
                    <div className="track__title">
                      <div className="track__title-image_skeleton"></div>
                      <div className="track__title-text_skeleton"></div>
                    </div>
                    <div className="track__author_skeleton"></div>
                    <div className="track__album_skeleton"></div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track_skeleton track">
                    <div className="track__title">
                      <div className="track__title-image_skeleton"></div>
                      <div className="track__title-text_skeleton"></div>
                    </div>
                    <div className="track__author_skeleton"></div>
                    <div className="track__album_skeleton"></div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track_skeleton track">
                    <div className="track__title">
                      <div className="track__title-image_skeleton"></div>
                      <div className="track__title-text_skeleton"></div>
                    </div>
                    <div className="track__author_skeleton"></div>
                    <div className="track__album_skeleton"></div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track_skeleton track">
                    <div className="track__title">
                      <div className="track__title-image_skeleton"></div>
                      <div className="track__title-text_skeleton"></div>
                    </div>
                    <div className="track__author_skeleton"></div>
                    <div className="track__album_skeleton"></div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track_skeleton track">
                    <div className="track__title">
                      <div className="track__title-image_skeleton"></div>
                      <div className="track__title-text_skeleton"></div>
                    </div>
                    <div className="track__author_skeleton"></div>
                    <div className="track__album_skeleton"></div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track_skeleton track">
                    <div className="track__title">
                      <div className="track__title-image_skeleton"></div>
                      <div className="track__title-text_skeleton"></div>
                    </div>
                    <div className="track__author_skeleton"></div>
                    <div className="track__album_skeleton"></div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track_skeleton track">
                    <div className="track__title">
                      <div className="track__title-image_skeleton"></div>
                      <div className="track__title-text_skeleton"></div>
                    </div>
                    <div className="track__author_skeleton"></div>
                    <div className="track__album_skeleton"></div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track_skeleton track">
                    <div className="track__title">
                      <div className="track__title-image_skeleton"></div>
                      <div className="track__title-text_skeleton"></div>
                    </div>
                    <div className="track__author_skeleton"></div>
                    <div className="track__album_skeleton"></div>
                  </div>
                </div>
                <div className="playlist__item">
                  <div className="playlist__track_skeleton track">
                    <div className="track__title">
                      <div className="track__title-image_skeleton"></div>
                      <div className="track__title-text_skeleton"></div>
                    </div>
                    <div className="track__author_skeleton"></div>
                    <div className="track__album_skeleton"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main__sidebar sidebar">
            <div className="sidebar__personal">
              <p className="sidebar__personal-name"></p>
              <div className="sidebar__icon">
                <svg alt="logout">
                  <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
              </div>
            </div>
            <div className="sidebar__block">
              <div className="sidebar__list">
                <div className="sidebar__item_skeleton"></div>
                <div className="sidebar__item_skeleton"></div>
                <div className="sidebar__item_skeleton"></div>
              </div>
            </div>
          </div>
        </main>
        <div className="bar">
          <div className="bar__content">
            <div className="bar__player-progress"></div>
            <div className="bar__player-block">
              <div className="bar__player player">
                <div className="player__controls">
                  <div className="player__btn-prev">
                    <svg className="player__btn-prev-svg" alt="prev">
                      <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                    </svg>
                  </div>
                  <div className="player__btn-play _btn">
                    <svg className="player__btn-play-svg" alt="play">
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    </svg>
                  </div>
                  <div className="player__btn-next">
                    <svg className="player__btn-next-svg" alt="next">
                      <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                    </svg>
                  </div>
                  <div className="player__btn-repeat _btn-icon">
                    <svg className="player__btn-repeat-svg" alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </svg>
                  </div>
                  <div className="player__btn-shuffle _btn-icon">
                    <svg className="player__btn-shuffle-svg" alt="shuffle">
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                    </svg>
                  </div>
                </div>

                <div className="player__track-play track-play">
                  <div className="track-play__contain">
                    <div className="track-play__image"></div>
                    <div className="track-play__author_skeleton"></div>
                    <div className="track-play__album_skeleton"></div>
                  </div>

                  <div className="track-play__like-dis">
                    <div className="track-play__like _btn-icon">
                      <svg className="track-play__like-svg" alt="like">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                    </div>
                    <div className="track-play__dislike _btn-icon">
                      <svg className="track-play__dislike-svg" alt="dislike">
                        <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bar__volume-block volume">
                <div className="volume__content">
                  <div className="volume__image">
                    <svg className="volume__svg" alt="volume">
                      <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                    </svg>
                  </div>
                  <div className="volume__progress _btn">
                    <input
                      className="volume__progress-line _btn"
                      type="range"
                      name="range"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
