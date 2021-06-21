import Dish from '../../components_refactored/Dish/Dish'
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
import Box from '@material-ui/core/Box';
import { Paper, Avatar, Icon, Typography, ButtonGroup } from '@material-ui/core';
import React, { useRef, useEffect, useState } from "react";
import "./RestaurantMenu.css";
import PageHOC from '../PageHOC';
import Button from '@material-ui/core/Button';
import ContactInfo from '../../components/User/ContactInfo';
import useFetch from 'use-http'
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import SocialActions from '../../components_refactored/commons/SocialActions';
import Posts from '../../components_refactored/Posts/Posts';
import MenuTabs from './MenuTabs'
import { IonButton, IonIcon, IonContent } from '@ionic/react';
import { star } from 'ionicons/icons';

import { IonToolbar, IonTitle, IonButtons, IonBackButton, IonMenuButton, IonSearchbar, IonSegment, IonSegmentButton } from '@ionic/react';
import { personCircle, search, helpCircle, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

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

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}
function ScrollableTabsButtonForce({ value, handleChange }) {
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





const getDimensions = ele => {
    const appbarrm = document.getElementById("appbarrm")
    const { height, y } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
        height,
        offsetTop,
        offsetBottom,
        y
    };
};

const scrollTo = (ele, header) => {

    const { height } = header.getBoundingClientRect()
    console.log(ele.offsetTop - height)
    // window.scrollTo({
    //     top: ele.offsetTop - height,
    //     // behavior: 'smooth' 
    //   } );
    let content = document.getElementById("content-restaurant-page")
    console.log(content)
    content.scrollToPoint(0, ele.offsetTop - (height + 56));
};

function RestaurantMenuContent({ visibleSection, value, setValue, headerRef, sectionRefs }) {
    const classes = useStyles();
    const [user, setUser] = useState()
    const [menuValue, setMenuValue] = useState(0)

    const [more, setMore] = useState(false)
    const [follow, setFollow] = useState(false)
    const [showComment, setShowComment] = useState(false)
    const [goToMenu, setGoToMenu] = useState(false)
    const onChange = () => {
        setShowComment(!showComment)
    }

    const userFetch = useFetch('https://reach-network.herokuapp.com/api/v1/user')

    async function loadUser() {
        // const { id } = match.params
        const user = await userFetch.get(`t3k3dx7zDMAKjCEeXl9Q`)

        console.log('User')
        console.log(Object.values(user)[0])
        if (userFetch.response.ok) setUser(Object.values(user)[0])
    }

    useEffect(() => {
        loadUser()
    }, [])
    const dishes = [1, 2, 3, 4, 5].map((dish, i) => (
        <Box mt={2} key={i}>
            <Dish image="https://source.unsplash.com/random/?food" />

        </Box>))


    const handleChange = (event, newValue) => {
        console.log("adf")
        scrollTo(sectionRefs[newValue].ref.current, headerRef.current);
        setValue(newValue);
    };
    const handleChangeMenuMic = (event, newValue) => {
        console.log("adf")
        // scrollTo(sectionRefs[newValue].ref.current, headerRef.current);
        setMenuValue(newValue);
    };

    if (!user) return <div>Loading</div>
    return (
        <>
            <div />
            <Avatar
                variant="square"
                className={classes.cover} src="https://source.unsplash.com/random/?food">
            </Avatar>
            <Box position="absolute" top="210px">
                <Avatar
                    style={{ width: '100px', height: '100px', border: '5px solid white' }}
                    // className={classes.cover}
                    src="https://source.unsplash.com/random/?food">
                </Avatar>
            </Box>
            <Box display="flex" justifyContent="flex-end">
                {/* <Box ml={2}>

<SocialActions onChange={onChange} />

</Box> */}
                <Box >
                    <div style={{ margin: 10 }}>
                        {/* <ButtonGroup
                        // variant="text"
                        color="primary" 
                        aria-label="full-width outlined primary button group"
                    > */}

                        <Button onClick={() => setFollow(!follow)} color="primary" variant={follow ? "contained" : "outlined"}>Follow</Button>
                        {/* </ButtonGroup> */}
                    </div>
                </Box>
            </Box>



            <Box ml="10px" >
                <Typography variant="h5" >
                    Nume Smecher
                </Typography>
                <Typography variant="body2" >
                    Descriere smechera Descriere smechera Descriere smechera Descriere smechera Descriere smechera Descriere smechera Descriere smechera Descriere smechera
                </Typography>
            </Box>
            <Box display="flex" justifyContent="flex-start">
                <Box mr={1}>
                    <AvatarGroup spacing="small" max={3}>
                        <Avatar  alt="Remy Sharp" src="https://source.unsplash.com/random" />
                        <Avatar alt="Travis Howard" src="https://source.unsplash.com/random" />
                        <Avatar alt="Cindy Baker" src="https://source.unsplash.com/random" />
                    </AvatarGroup>
                </Box>
                <Typography variant="body1" >
                    si alti 12 urmaresc asta              </Typography>
            </Box>
            <Box onClick={() => setMore(!more)}>
                <ContactInfo more user={user} />











  

              {  <Box > <IonButton  
              fill="solid"
               onClick={() => setGoToMenu(!goToMenu)} color="secondary" expand="full">{!goToMenu ? "Mergi la meniu" : "Mergi la Postari"}</IonButton></Box> }
               {/* { goToMenu && (<Paper square>
                        <Tabs
                        centered
                            value={menuValue}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={handleChangeMenuMic}
                            aria-label="disabled tabs example"
                        >
                            <Tab label="Livrare" />
                            <Tab label="Preluare"  />
                            <Tab label="Rezerva Masa" />
                        </Tabs>
                    </Paper>)} */}
           
            </Box>



            <div className="sticky">
                <div ref={headerRef}>
                    {
                        goToMenu ? <ScrollableTabsButtonForce value={value} handleChange={handleChange} /> :
                            <MenuTabs />

                    }


                </div>
            </div>
            {!goToMenu && <Posts />}
            {/* <Box mt={2} justifyContent="center" display="flex">
                    <ButtonGroup
                        variant="text"
                        color="secondary" 
                        aria-label="full-width outlined primary button group"
                    >
                        <Button onClick={() => setFollow(!follow)}   >Follow</Button>
                        <Button onClick={() => setFollow(!follow)}    >Follow</Button>
                       
                        <Button onClick={() => setFollow(!follow)}  >Follow</Button>
                    </ButtonGroup>
                  
                </Box> */}
            <div>
                {sectionRefs.map(x => (
                    <div key={x.value} ref={x.ref}>
                        <h1>{x.section}</h1>
                        {dishes}
                    </div>))}

            </div>
        </>

    );
}


const RestaurantMenu = () => {
    const sectionRefs = [
        { section: "s1", ref: useRef(null), value: 0 },
        { section: "s2", ref: useRef(null), value: 1 },
        { section: "s3", ref: useRef(null), value: 2 },
        { section: "s4", ref: useRef(null), value: 3 },
        { section: "s5", ref: useRef(null), value: 4 },

    ];
    const [visibleSection, setVisibleSection] = useState();
    const [value, setValue] = React.useState(0);
    const headerRef = useRef(null);

    const handleScroll = (e) => {
        const { height: headerHeight, y } = getDimensions(headerRef.current);
        console.log(y)
        const scrollPosition = e.detail.scrollTop + headerHeight + y;
        const selected = sectionRefs.find(({ section, ref, value }) => {
            const ele = ref.current;
            if (ele) {
                const { offsetBottom, offsetTop } = getDimensions(ele);
                return scrollPosition > offsetTop && scrollPosition < offsetBottom;
            }
        });
        if (selected && selected.section !== visibleSection) {
            setVisibleSection(selected.section);
            setValue(selected.value)
        } else if (!selected && visibleSection) {
            setVisibleSection(undefined);
        }
        console.log(value)
    };

    return (
        <PageHOC scrollEvents handleScroll={handleScroll} id="restaurant-page" name="Restaurant" component={
            <RestaurantMenuContent sectionRefs={sectionRefs} headerRef={headerRef} value={value} visibleSection={visibleSection} setValue={setValue} />
        } />

        // <IonContent >



    )
}
export default RestaurantMenu
