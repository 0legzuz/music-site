import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainNav = styled.nav`
  width: auto;
  background-color: #181818;
  ${(props) =>
    props.$isOpen &&
    `
    background-color: #1C1C1C;
  `}
  padding: 20px 20px 20px 20px;
`;

export const NavLogo = styled(NavLink)`
  height: 43px;
  padding: 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;
export const LogoImage = styled.img`
  height: 17px;
  color: #181818;
`;

export const NavBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const NavMenu = styled.div`
  display: block;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.5s,
    visibility 0.5s;
  ${(props) =>
    props.$isOpen &&
    `
    opacity: 1;
    visibility: visible;
  `}
`;

export const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`;

export const MenuList = styled.ul`
  padding: 18px 0 10px;
`;
export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`;

export const MenuLink = styled(NavLink)`
  cursor: pointer;
  font-family: StratosSkyeng, sans-serif;
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;
