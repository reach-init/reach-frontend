import Dish from '../Dish/Dish'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Avatar, Typography } from '@material-ui/core';
import React, { useRef, useEffect, useState } from "react";
import "./RestaurantMenuContent.css";
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
import InfoIcon from '@material-ui/icons/Info';
import  Divider  from '@material-ui/core/Divider';
import ToggleButtons from './ToggleButtons';
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



export default function RestaurantMenuContent({ value, setValue, headerRef, sectionRefs , showTabs}) {
    const classes = useStyles();
    const [user, setUser] = useState()
    const [more, setMore] = useState(false)
    const [follow, setFollow] = useState(false)
    const [goToMenu, setGoToMenu] = useState(false)
    
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
        scrollTo(sectionRefs[newValue].ref.current, headerRef.current);
        setValue(newValue);
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
                <Box >
                    <div style={{ margin: 10 }}>
                        <Button onClick={() => setFollow(!follow)} color="primary" variant={follow ? "contained" : "outlined"}>Follow</Button>
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
            <Box margin={1}>
                <Box  onClick={() => setMore(!more)} justifyContent="space-between"  display='flex'>
                    <Button  startIcon={<InfoIcon />}  endIcon={<ChevronRightIcon />}  color="dark" >{more ? "Hide" : "Contact info"}</Button>    
                    {goToMenu &&  <Button variant="outlined"  color="primary" >Rezerva masa rapid</Button>   }
              
                </Box>

                <ContactInfo more={more} user={user} /> 


                  </Box>

                  {  <Box > <IonButton  
              fill="solid"
               onClick={() => setGoToMenu(!goToMenu)} color="secondary" expand="full">{!goToMenu ? "Mergi la meniu" : "Mergi la Postari"}</IonButton></Box> }
      {goToMenu && <ToggleButtons/>}
            <div className="sticky">
                <div ref={headerRef}>
                    {
                        goToMenu ? showTabs && <ScrollableTabsButtonForce value={value} handleChange={handleChange} /> :
                            <MenuTabs />

                    }


                </div>
            </div>
            {!goToMenu && <Posts />}
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



