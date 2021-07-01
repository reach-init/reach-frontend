import Dish from '../Dish/Dish'
import Box from '@material-ui/core/Box';
import { Avatar, Typography } from '@material-ui/core';
import React, { useRef, useEffect, useState } from "react";
import "./RestaurantMenuContent.scss";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ContactInfo from '../../components/User/ContactInfo';
import useFetch from 'use-http'
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Posts from '../Posts/Posts';
import MenuTabs from './MenuTabs'
import { IonButton } from '@ionic/react';
import ScrollableTabsButtonForce from './ScrollableTabsButtonForce'
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import  Divider  from '@material-ui/core/Divider';
import ToggleButtons from './ToggleButtons';
import { fade, makeStyles } from "@material-ui/core/styles";
import { IonToolbar, IonContent, IonPage, IonButtons, IonTitle, IonMenuButton, IonSegment, IonSegmentButton, IonIcon, IonSearchbar, IonRefresher, IonRefresherContent, IonToast, IonModal, IonHeader, getConfig , IonBackButton} from '@ionic/react';
import { callOutline, searchOutline,searchSharp, callSharp, logoTwitter, logoGithub, logoInstagram, shareOutline, shareSharp } from 'ionicons/icons';

const useStyles = makeStyles((theme) => ({
    divider: {
        margin: theme.spacing(1, 0),
      },
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
    box: {
        backgroundColor: fade(theme.palette.common.black, 0.05)
    }

}));



export default function RestaurantMenuContent({restaurant, value, setValue, headerRef, sectionRefs , showTabs}) {
    const classes = useStyles();
    const [user, setUser] = useState()
    const [more, setMore] = useState(false)
    const [follow, setFollow] = useState(false)
    const [goToMenu, setGoToMenu] = useState(restaurant)
    
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
    const userFetch = useFetch('https://reach-network.herokuapp.com/api/v1/user')

    async function loadUser() {
        // const { id } = match.params
        const user = await userFetch.get(`t3k3dx7zDMAKjCEeXl9Q`)
        if (userFetch.response.ok) setUser(Object.values(user)[0])
    }

    useEffect(() => {
        loadUser()
    }, [])
    const dishes = [1, 2, 3, 4, 5].map((dish, i) => (
        <Box className={classes.box}  mt={1} key={i}>
            <Dish image="https://source.unsplash.com/random/?food" />

        </Box>))


    const handleChange = (event, newValue) => {
        scrollTo(sectionRefs[newValue].ref.current, headerRef.current);
        setValue(newValue);
    };

    if (!user) return <div>Loading</div>
    return (
        <>
            <div />
            <IonHeader id="menu-comp" className="ion-no-border">
          <IonToolbar>
            <IonButtons  slot="start">
              <IonBackButton style={{ borderRadius: "50%", backgroundColor: "white"}} defaultHref="/speakers" />
            </IonButtons>

            <IonButtons slot="end">
              <IonButton style={{ borderRadius: "50%", backgroundColor: "white"}} onClick={() => {}}>
              <IonIcon slot="icon-only" ios={searchSharp} md={searchSharp}></IonIcon>
              </IonButton>
              {/* <IonButton style={{ borderRadius: "50%", backgroundColor: "white"}}  onClick={() => {}}>
              <IonIcon slot="icon-only" ios={shareOutline} md={shareSharp}></IonIcon>
              </IonButton> */}
            </IonButtons>
          </IonToolbar>
        </IonHeader>
            <Avatar
                variant="square"
                className={classes.cover} src="https://source.unsplash.com/random/?food">
            </Avatar>
            <Box position="absolute" top="150px">
                <Avatar
                    style={{ width: '100px', height: '100px', border: '5px solid white' }}
                    // className={classes.cover}
                    src="https://source.unsplash.com/random/?food">
                </Avatar>
            </Box>
            <Box display="flex" justifyContent="flex-end">
                
                <Box >
                    <div style={{ margin: 10 }}>
                        <ButtonGroup color="secondary">
                        <Button onClick={() => setFollow(!follow)}  variant={follow ? "contained" : "outlined"}>Follow</Button>
                  
                        </ButtonGroup>
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
                <Box ml={1} mr="2px">
                    <AvatarGroup spacing="small" max={3}>
                        <Avatar  alt="Remy Sharp" src="https://source.unsplash.com/random" />
                        <Avatar alt="Travis Howard" src="https://source.unsplash.com/random" />
                        <Avatar alt="Cindy Baker" src="https://source.unsplash.com/random" />
                    </AvatarGroup>
                </Box>
                <Box mt={1}>
                <Typography variant="body1" >
                    si alti 12 urmaresc asta              </Typography></Box>
            </Box>
            { goToMenu && (  <Box margin={1}>
            {/* {goToMenu &&  <Button color="primary"  size="large" >Rezerva masa rapid</Button>   } */}

            <Divider className={classes.divider}/>
            <Box alignItems='center'   justifyContent="space-around"  display='flex'>
                    {/* <Button variant="outlined" startIcon={<InfoIcon />}  endIcon={<ChevronRightIcon />}  color="dark" >{more ? "Hide" : "Contact info"}</Button>     */}
                    <InfoOutlined />
                   
                    <Typography variant="h6">
                        
                    Rezerva masa rapid</Typography>
                    <Box flexGrow={1}></Box> 
                    <ChevronRightIcon />
                </Box>

             
                <Divider className={classes.divider}/>
                <Box alignItems='center'  justifyContent="space-around"  display='flex'>
                    {/* <Button variant="outlined" startIcon={<InfoIcon />}  endIcon={<ChevronRightIcon />}  color="dark" >{more ? "Hide" : "Contact info"}</Button>     */}
                    <InfoOutlined />
                   
                    <Typography variant="h6">
                        
                        Se livreaza in 10 min</Typography>
                    <Box flexGrow={1}></Box> 
                    <Button  color="secondary">Schimba</Button>
                </Box>
                <Divider className={classes.divider}/>

<Box alignItems='center'  onClick={() => setMore(!more)} justifyContent="space-around"  display='flex'>
    {/* <Button variant="outlined" startIcon={<InfoIcon />}  endIcon={<ChevronRightIcon />}  color="dark" >{more ? "Hide" : "Contact info"}</Button>     */}
    <InfoOutlined />
   
    <Typography variant="h6">
        
        Restaurant info</Typography>
    <Box flexGrow={1}></Box> 
    <ChevronRightIcon />
</Box>
                <Divider className={classes.divider}/>




                <ContactInfo more={more} user={user} /> 


                  </Box>) }

                  {  <Box > <IonButton  
              fill="solid"
               onClick={() => setGoToMenu(!goToMenu)} color="success" expand="full">{!goToMenu ? "Mergi la meniu" : "Mergi la Postari"}</IonButton></Box> }
      {/* {goToMenu && <ToggleButtons/>} */}
            <div className="sticky">
                <div ref={headerRef}>
                    {
                        goToMenu ? showTabs && <ScrollableTabsButtonForce value={value} handleChange={handleChange} /> :
                            <MenuTabs />

                    }


                </div>
            </div>
            {!goToMenu && <Posts />}
            <Box className={classes.box}>
            <div>
                {sectionRefs.map(x => (
                    <div key={x.value} ref={x.ref}>
                        <h1>{x.section}</h1>
                        {dishes}
                    </div>))}

            </div>
            </Box>
        </>

    );
}



