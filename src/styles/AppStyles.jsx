import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #383838;
  min-height: 100%;
  overflow: hidden;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1920px;
  background-color: #181818;
  height: 100vh;
  margin: 0 auto;
  position: relative;
`;

export const Main = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
