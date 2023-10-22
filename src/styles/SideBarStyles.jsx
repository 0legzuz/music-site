import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainSidebar = styled.div`
  max-width: 418px;
  padding: 20px 60px 20px 20px;
`;

export const SidebarPersonal = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 12px 0 15px;
`;

export const SidebarPersonalName = styled.p`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-right: 16px;
`;

export const SignInLink = styled(NavLink)`
  cursor: pointer;
`;

export const SidebarIcon = styled.div`
  cursor: pointer;
  height: 43px;
  width: 43px;
`;
export const SidebarBlock = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  height: 100%;
  justify-content: flex-start;
  padding: 150px 0 0;
`;

export const SidebarList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const SidebarItem = styled.div`
  height: 150px;
  width: 210px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const SidebarLink = styled(NavLink)`
  height: 100%;
  width: 100%;
`;

export const SidebarImg = styled.img`
  height: auto;
  width: 100%;
`;
