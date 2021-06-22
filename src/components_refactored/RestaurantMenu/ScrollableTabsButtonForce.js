import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import React, { useRef, useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({

    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    medium: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    cover: {
        width: '100%',
        height: '200px',
        // borderRight: 100,
        backgroundColor: theme.palette.grey[200],
        // boxShadow: '0 2px 8px 0 #c1c9d7, 0 -2px 8px 0 #cce1e9',
    },
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },

}));

export default function ScrollableTabsButtonForce({ value, handleChange}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar id="appbarrm" position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Item One" icon={<PhoneIcon />} {...a11yProps(0)} />
                    <Tab label="Item Two" icon={<FavoriteIcon />} {...a11yProps(1)} />
                    <Tab label="Item Three" icon={<PersonPinIcon />} {...a11yProps(2)} />
                    <Tab label="Item Four" icon={<HelpIcon />} {...a11yProps(3)} />
                    <Tab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
                    <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
                    <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} />
                </Tabs>
            </AppBar>
        </div>
    );
}
function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}
