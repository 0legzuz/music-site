import React from 'react';
const UserIcon = '/img/logo.svg';
const Playlist01 = '/img/playlist01.png';
const Playlist02 = '/img/playlist02.png';
const Playlist03 = '/img/playlist03.png';

export default function Slidebar() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">0legzuz</p>
        <div className="sidebar__icon">
          <img src={UserIcon} alt="User Icon" />
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src={Playlist01}
                alt="Playlist 01"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src={Playlist02}
                alt="Playlist 02"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src={Playlist03}
                alt="Playlist 03"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
