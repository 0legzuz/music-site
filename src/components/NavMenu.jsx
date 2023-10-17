import React, { useState } from 'react';
import * as S from '../styles/NavMenuStyles';

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((oldState) => !oldState);
  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.svg" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggleMenu}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      <S.NavMenu $isOpen={isOpen}>
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
  );
}
