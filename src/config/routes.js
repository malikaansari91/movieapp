import {
  Airplay,
  FavoriteBorderOutlined,
  FormatListBulleted,
  LiveTv,
  LogoutOutlined,
  PlaylistPlay,
  Search,
  SettingsOutlined,
  UpdateOutlined,
} from "@mui/icons-material";

const routes = [
  {
    key: "router-discover",
    title: "Discover",
    component: <div>malia</div>,
    path: "/discover",
    isEnabled: true,
    icon: Search,
    appendDivider: false,
  },
  {
    key: "router-playlist",
    title: "Playlist",
    component: <div>Playlist</div>,
    path: "/playlist",
    isEnabled: true,
    icon: PlaylistPlay,
    appendDivider: false,
  },
  {
    key: "router-movie",
    title: "Movie",
    component: <div>Playlist</div>,
    path: "/movie",
    isEnabled: true,
    icon: LiveTv,
    appendDivider: false,
  },
  {
    key: "router-tv-show",
    title: "TV SHow",
    component: <div>Playlist</div>,
    path: "/tv-show",
    isEnabled: true,
    icon: Airplay,
    appendDivider: false,
  },
  {
    key: "router-my-list",
    title: "My List",
    component: <div>Playlist</div>,
    path: "/my-list",
    isEnabled: true,
    icon: FormatListBulleted,
    appendDivider: true,
  },
  {
    key: "router-watch-later",
    title: "Watch Later",
    component: <div>Playlist</div>,
    path: "/watch-later",
    isEnabled: true,
    icon: UpdateOutlined,
    appendDivider: false,
  },
  {
    key: "router-recomended",
    title: "Recomended",
    component: <div>Playlist</div>,
    path: "/recomended",
    isEnabled: true,
    icon: FavoriteBorderOutlined,
    appendDivider: true,
  },
  {
    key: "router-settings",
    title: "Settings",
    component: <div>Playlist</div>,
    path: "/settings",
    isEnabled: true,
    icon: SettingsOutlined,
    appendDivider: false,
  },
  {
    key: "router-Logout",
    title: "Logout",
    component: <div>Playlist</div>,
    path: "/logout",
    isEnabled: true,
    icon: LogoutOutlined,
    appendDivider: false,
  },
];

export default routes;