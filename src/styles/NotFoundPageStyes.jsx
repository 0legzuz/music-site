import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MainCenterblock } from './TrackListStyles';

export const MainCenterblockErrorPage = styled(MainCenterblock)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const CenterblockError = styled.div`
  display: flex;
  flex-direction: column;
  width: 431px;
  height: 366px;
  align-items: center;
  margin-top: calc(((100vh - 431px) / 2) - 63px);
`;

export const ErrorCode = styled.div`
  font-weight: 400;
  line-height: 168px;
  font-size: 160px;
`;

export const ErrorBlock = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
`;

export const ErrorText = styled.div`
  font-weight: 400;
  line-height: 40px;
  font-size: 32px;
`;
export const ErrorHelp = styled.div`
  margin-top: 5px;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #4e4e4e;
`;

export const MainBackButton = styled.div`
  width: 278px;
  height: 52px;
  background-color: #580ea2;
  border-radius: 6px;
  border: none;
  margin-top: 46px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  &:hover {
    background-color: #3f007d;
  }
  &:active {
    background-color: #271a58;
  }
`;

export const MainBackLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;
