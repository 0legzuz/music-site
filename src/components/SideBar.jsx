import React from 'react';
const UserIcon = '/img/icon/exit.svg';
const Playlist01 = '/img/playlist01.png';
const Playlist02 = '/img/playlist02.png';
const Playlist03 = '/img/playlist03.png';
import * as S from '../styles/SideBarStyles';

export default function Sidebar() {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>0legzuz</S.SidebarPersonalName>
        <S.SignInLink to="/signin">
          <S.SidebarIcon>
            <img src={UserIcon} alt="User Icon" />
          </S.SidebarIcon>
        </S.SignInLink>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <S.SidebarLink to="/category/1">
              <S.SidebarImg
                className="sidebar__img"
                src={Playlist01}
                alt="Playlist 01"
              />
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink to="/favorites/2">
              <S.SidebarImg
                className="sidebar__img"
                src={Playlist02}
                alt="Playlist 02"
              />
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink to="/favorites/3">
              <S.SidebarImg src={Playlist03} alt="Playlist 03" />
            </S.SidebarLink>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
