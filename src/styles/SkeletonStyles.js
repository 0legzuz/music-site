import styled from 'styled-components';
import { SidebarItem } from './SideBarStyles';
import {
  TrackAlbumLink,
  TrackAuthorLink,
  TrackTitleLink
} from './TrackListStyles';
import { TrackPlayAlbum, TrackPlayAuthor } from './AudioPlayerStyles';

export const SidebarItemSkeleton = styled(SidebarItem)`
  background-color: #313131;
`;

export const TrackTitleLinkSkeleton = styled(TrackTitleLink)`
  background-color: #313131;
  width: 100px;
  height: 19px;
  display: inline-block;
`;

export const TrackAuthorLinkSkeleton = styled(TrackAuthorLink)`
  width: 100px;
  height: 19px;
  background-color: #313131;
  display: inline-block;
`;

export const TrackAlbumLinkSkeleton = styled(TrackAlbumLink)`
  width: 100px;
  height: 19px;
  background-color: #313131;
  display: inline-block;
`;

export const TrackPlayAuthorSkeleton = styled(TrackPlayAuthor)`
  background-color: #313131;
  height: 15px;
  width: 49px;
`;

export const TrackPlayAlbumSkeleton = styled(TrackPlayAlbum)`
  background-color: #313131;
  height: 15px;
`;
