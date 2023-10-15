import styled from 'styled-components';

export const MainCenterblock = styled.div`
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 20px 20px 20px;
`;
export const CenterblockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 25px;
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
`;

export const CenterblockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 65px;
  letter-spacing: -0.8px;
  margin-bottom: 25px;
`;
export const CenterblockFilter = styled.div`
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
  margin-bottom: 25px;
`;

export const CenterblockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const SearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #fff;
  fill: transparent;
`;
export const SearchText = styled.input`
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #fff;
  &::placeholder {
    background-color: transparent;
    color: #fff;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
`;

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-right: 15px;
`;

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  border: 1px solid #fff;
  border-radius: 60px;
  padding: 4px 15px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const AuthorFilter = styled.div`
  position: absolute;
  width: 200px;
  height: 257px;
  margin-top: 310px;
  margin-left: 90px;
  background-color: #313131;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 24px;
  gap: 24px;
  color: #fff;
  overflow-y: scroll;
  border-width: 24px;
  border-color: #313131;
  border-style: solid;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    height: 65px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #4b4949;
    border-radius: 10px;
  }
`;
export const YearFilter = styled.div`
  position: absolute;
  width: 200px;
  height: 257px;
  margin-top: 310px;
  margin-left: 240px;
  background-color: #313131;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 24px;
  gap: 24px;
  color: #fff;
  overflow-y: scroll;
  border-width: 24px;
  border-color: #313131;
  border-style: solid;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    height: 65px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #4b4949;
    border-radius: 10px;
  }
`;
export const GenreFilter = styled.div`
  position: absolute;
  width: 200px;
  height: 257px;
  margin-top: 310px;
  margin-left: 385px;
  background-color: #313131;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 24px;
  gap: 24px;
  color: #fff;
  overflow-y: scroll;
  border-width: 24px;
  border-color: #313131;
  border-style: solid;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    height: 65px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #4b4949;
    border-radius: 10px;
  }
`;
export const FilterDropdown = styled.div`
  &:hover {
    color: #b672ff;
    cursor: pointer;
  }
`;

export const ContentTitle = styled.div`
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
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0fr;
`;

export const ContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 800px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #4b4949;
    border-radius: 10px;
    height: 20px;
  }
`;

export const PlaylistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`;
export const PlaylistTitleColTrack = styled(PlaylistTitleCol)`
  max-width: 400px;
`;
export const PlaylistTitleColAuthor = styled(PlaylistTitleCol)`
  max-width: 300px;
`;
export const PlaylistTitleColAlbum = styled(PlaylistTitleCol)`
  max-width: 180px;
`;
export const PlaylistTitleColTimeLike = styled(PlaylistTitleCol)`
  max-width: 65px;
  text-align: end;
  margin-right: 25px;
  margin-left: 40px;
  display: flex;
  
`;

export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;
export const PlaylistTrack = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0fr;
`;
export const TrackTitle = styled.div`
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
  max-width: 400px;
`;
export const TrackTitleImage = styled.div`
  width: 40px;
  height: 40px;
  padding: 12px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`;
export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;
export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #fff;
`;
export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #4e4e4e;
`;

export const TrackAuthor = styled.div`
  max-width: 300px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #fff;
  text-align: left;
`;

export const TrackAlbum = styled.div`
  max-width: 180px;
`;

export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #696969;
`;

export const TrackTime = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-right: 20px;
`;

export const TrackTimeSvg = styled.svg`
  width: 12px;
  height: 12px;
  margin-right: 14px;
  margin-top: 3px;
  fill: transparent;
  stroke: #696969;
`;

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: right;
  color: #696969;
`;
