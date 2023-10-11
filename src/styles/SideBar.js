import styled from 'styled-components';


export const MainSidebar = styled.div`
  max-width: 418px;
  padding: 20px 150px 20px 20px;
`

export const SidebarPersonal = styled.div`
  align-items: center;
  -webkit-box-align: center;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: end;
  display: -webkit-box;
  display: flexbox;
  display: flex;
  -ms-flex-align: center;
  flex-direction: row;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 12px 0 15px;
`

export const SidebarPersonalName = styled.p`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-right: 16px;
`

export const SidebarIcon = styled.div`
  cursor: pointer;
  height: 43px;
  width: 43px;
`
export const SidebarBlock = styled.div`
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  -webkit-box-pack: start;
  display: -webkit-box;
  display: flexbox;
  display: flex;
  flex-direction: column;
  -ms-flex-pack: start;
  height: 100%;
  justify-content: flex-start;
  padding: 150px 0 0;
`

export const SidebarList = styled.div`
  align-items: center;
  -webkit-box-align: center;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  display: flexbox;
  display: flex;
  -ms-flex-align: center;
  flex-direction: column;
`

export const SidebarItem = styled.div`
  height: 150px;
  width: 210px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const  SidebarLink = styled.a `
  height: 100%;
  width: 100%;
`;

export const SidebarImg = styled.img`
  height: auto;
  width: 100%;
`;
