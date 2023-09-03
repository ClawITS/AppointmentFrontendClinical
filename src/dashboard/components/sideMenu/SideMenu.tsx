import { CSSObject } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Person2Icon from "@mui/icons-material/Person2";
import HomeIcon from "@mui/icons-material/Home";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import scss from "./SideMenu.module.css";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Theme,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const menuRouteList = ["home", "appointments", "doctor", "patients", "disponibilities", "specialities", ""];
const menuListTranslations = ["Home", "Appointments", "Doctors", "Patient", "Disponibilities", "Specialities", "Sign Out"];
const menuListIcons = [
    <HomeIcon />,
    <BookOnlineIcon />,
    <Person2Icon />,
    <EmojiPeopleIcon />,
    <QueryBuilderIcon />,
    <WbTwilightIcon />,
    <ExitToAppIcon />,
];


export const SideMenu = () => {

    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const mobileCheck = useMediaQuery("(min-width: 600px)");

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const handleListItemButtonClick = (text: string) => {
        text === "Sign Out" ? 'signOut()' : null;
        setOpen(false);
    };

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            open={open}
            className={scss.sideMenu}
            sx={{
                width: drawerWidth,
                [`& .MuiDrawer-paper`]: {
                    left: 0,
                    top: mobileCheck ? 64 : 57,
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                    boxSizing: "border-box",
                    ...(open && {
                        ...openedMixin(theme),
                        "& .MuiDrawer-paper": openedMixin(theme),
                    }),
                    ...(!open && {
                        ...closedMixin(theme),
                        "& .MuiDrawer-paper": closedMixin(theme),
                    }),
                },
            }}
        >
            <div className={scss.drawerHeader}>
                <IconButton onClick={handleDrawerToggle}>
                    {open ? (
                        <ChevronLeftIcon />
                    ) : (
                        <ChevronRightIcon />
                    )}
                </IconButton>
            </div>
            <Divider />
            <Divider />
            <List>
                {menuListTranslations.map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: "block" }}>
                        <Link
                            className={scss.link}
                            to={`/${menuRouteList[index]}`}
                        >
                            <ListItemButton
                                onClick={() => handleListItemButtonClick(text)}
                                title={text}
                                aria-label={text}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {menuListIcons[index]}
                                </ListItemIcon>
                                <ListItemText
                                    primary={text}
                                    sx={{
                                        color: theme.palette.text.primary,
                                        opacity: open ? 1 : 0,
                                    }}
                                />{" "}
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}
