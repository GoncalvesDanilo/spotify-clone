import { Filter } from '../FilterArray/helper';

export const playlists: Array<{ name: string; type: string; image: string; detail: string }> = [
  {
    name: 'Liked Songs',
    type: 'Playlist',
    image: 'https://misc.scdn.co/liked-songs/liked-songs-300.png',
    detail: '685 songs',
  },
  {
    name: 'Coding Beats',
    type: 'Playlist',
    image: 'https://i.scdn.co/image/ab67706c0000f8e4342809642bbd75495079fc41',
    detail: 'The Sound Sieve',
  },
  {
    name: 'An Evening With Silk Sonic',
    type: 'Album',
    image: 'https://i.scdn.co/image/ab67616d00001a9dd0bbd3ea2ec554f17a6603cc',
    detail: 'Bruno Mars',
  },
  {
    name: 'N O S T A L G I A',
    type: 'Playlist',
    image: 'https://i.scdn.co/image/ab67706c0000f8e4c022408984752312bba52d88',
    detail: 'Danilo Gonçalves',
  },
  {
    name: 'Liked Songs',
    type: 'Playlist',
    image: 'https://misc.scdn.co/liked-songs/liked-songs-300.png',
    detail: '685 songs',
  },
  {
    name: 'Coding Beats',
    type: 'Playlist',
    image: 'https://i.scdn.co/image/ab67706c0000f8e4342809642bbd75495079fc41',
    detail: 'The Sound Sieve',
  },
  {
    name: 'An Evening With Silk Sonic',
    type: 'Album',
    image: 'https://i.scdn.co/image/ab67616d00001a9dd0bbd3ea2ec554f17a6603cc',
    detail: 'Bruno Mars',
  },
  {
    name: 'N O S T A L G I A',
    type: 'Playlist',
    image: 'https://i.scdn.co/image/ab67706c0000f8e4c022408984752312bba52d88',
    detail: 'Danilo Gonçalves',
  },
  {
    name: 'Liked Songs',
    type: 'Playlist',
    image: 'https://misc.scdn.co/liked-songs/liked-songs-300.png',
    detail: '685 songs',
  },
  {
    name: 'Coding Beats',
    type: 'Playlist',
    image: 'https://i.scdn.co/image/ab67706c0000f8e4342809642bbd75495079fc41',
    detail: 'The Sound Sieve',
  },
  {
    name: 'An Evening With Silk Sonic',
    type: 'Album',
    image: 'https://i.scdn.co/image/ab67616d00001a9dd0bbd3ea2ec554f17a6603cc',
    detail: 'Bruno Mars',
  },
  {
    name: 'N O S T A L G I A',
    type: 'Playlist',
    image: 'https://i.scdn.co/image/ab67706c0000f8e4c022408984752312bba52d88',
    detail: 'Danilo Gonçalves',
  },
];

export const filters: Array<Filter> = [
  { label: 'Playlists', value: 'playlists' },
  { label: 'Artists', value: 'artists' },
  { label: 'Albums', value: 'albums' },
  { label: 'Podcasts & Shows', value: 'podcasts' },
];

export const secondaryFilters: { parent: string; filters: Array<Filter> } = {
  parent: 'playlists',
  filters: [
    { label: 'By Spotify', value: 'by-spotify' },
    { label: 'By you', value: 'you' },
  ],
};

export const sortDropdownOptions: Array<{ label: string; value: string }> = [
  { label: 'Recents', value: 'recents' },
  { label: 'Recently Added', value: 'recently-added' },
  { label: 'Alphabetical', value: 'alphabetical' },
  { label: 'Creators', value: 'creators' },
];
