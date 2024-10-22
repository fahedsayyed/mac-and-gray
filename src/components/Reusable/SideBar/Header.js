import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import languages from "../../../constants/language";
import {IconButton, Box, ListItemText} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SideMenuItems from "../../../constants/SideMenuitem";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import useMobile from "../../../hooks/useMobile";
import {
  getAccountSettings,
  saveAccountSettings,
} from "../../../store/reducers/settings";

// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
// import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export const Header = ({drawerWidth, handleDrawerToggle}) => {
  let location = useLocation();
  const {t} = useTranslation();
  const isMobile = useMobile();
  const dispatch = useDispatch();

  const account_settings = useSelector(
    (state) => state.settings.account_settings
  );
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [language, setLanguage] = useState("");

  const title = React.useMemo(() => {
    const titles = SideMenuItems.filter((item) => {
      if (location.pathname.includes(item.path)) {
        return t(item.label);
      }
      return false;
    });

    if (titles.length) {
      return (
        (titles[titles.length - 1].headerComponent &&
          titles[titles.length - 1]) ||
        t(titles[titles.length - 1].label)
      );
    }
    return false;
  }, [location, t]);

  React.useEffect(() => {
    setLanguage(account_settings.language);
  }, [account_settings]);

  React.useEffect(() => {
    if (isAuthenticated) {
      if (account_settings.save_lng_to_server) {
        dispatch(
          saveAccountSettings({
            language: account_settings.language,
            time_zone: account_settings.time_zone,
          })
        ).then((res) => {
          dispatch(getAccountSettings(true));
        });
      } else {
        dispatch(getAccountSettings());
      }
    }
  }, [dispatch, isAuthenticated]);

  const handleLangChange = (e) => {
    const language = e.target.value;
    dispatch(
      saveAccountSettings({
        language,
        time_zone: account_settings.time_zone,
      })
    );
  };

  return (
    <AppBar
      id="header-bar"
      position="fixed"
      className="HeaderNew"
      sx={{
        width: isMobile ? "100%" : `calc(100% - ${drawerWidth}px)`,
        ml: isMobile ? "0" : `${drawerWidth}px`,
      }}
    >
      <Toolbar sx={{justifyContent: "space-between"}}>
        {typeof title === "string" ? (
          <Typography id="title" variant="h6" noWrap component="div">
            {title}
          </Typography>
        ) : title.headerComponent ? (
          title.headerComponent
        ) : (
          <Typography component={"h1"}></Typography>
        )}

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ml: 2, display: {sm: "none"}}}
        >
          <MenuIcon sx={{fill: "#9292AB"}} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
