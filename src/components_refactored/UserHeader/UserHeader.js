import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Paper, Avatar, Icon, Typography, ButtonGroup } from '@material-ui/core';
import React, { useRef, useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import ContactInfo from '../../components/User/ContactInfo';
import useFetch from 'use-http'
import AvatarGroup from '@material-ui/lab/AvatarGroup';

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



export default function UserHeader() {
    const classes = useStyles();
    const [user, setUser] = useState()
    const [follow, setFollow] = useState(false)
    const [showComment, setShowComment] = useState(false)
    

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


    return (
        <>
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
                        <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
                        <Avatar alt="Travis Howard" src="https://source.unsplash.com/random" />
                        <Avatar alt="Cindy Baker" src="https://source.unsplash.com/random" />
                    </AvatarGroup>
                </Box>
                <Typography variant="body1" >
                    si alti 12 urmaresc asta
                     </Typography>
            </Box>
            <Box >
                <ContactInfo more user={user} />
                
            </Box>
        </>
    )
}