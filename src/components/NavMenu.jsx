import React, { useState } from 'react';
import * as S from '../styles/NavMenuStyles';

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((oldState) => !oldState);
  return (
    <S.MainNav $isOpen={isOpen}>
      <S.NavLogo to="/">
        <S.LogoImage src="/img/icon/logo.svg" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggleMenu}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      <S.NavMenu $isOpen={isOpen}>
        <S.MenuList>
          <S.MenuItem>
            <S.MenuLink to="/" className="menu__link">
              Главное
            </S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/favorites" className="menu__link">
              Мой плейлист
            </S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/signin">Войти</S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>
    </S.MainNav>
  );
}
