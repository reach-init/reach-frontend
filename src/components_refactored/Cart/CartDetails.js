import React, { useState } from 'react';
import { Paper } from '@material-ui/core';

import { RouteComponentProps, withRouter, useLocation } from 'react-router';

import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonToggle } from '@ionic/react';
import { calendarOutline, hammer, moonOutline, help, informationCircleOutline, logIn, logOut, mapOutline, peopleOutline, person, personAdd } from 'ionicons/icons';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { useAuth0 } from '../../auth/react-auth'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ToggleButtons from '../RestaurantMenu/ToggleButtons';
import { makeStyles } from '@material-ui/core/styles';
import { IonButton } from '@ionic/react';
import {useCart} from '../../context/cart/context'

const useStyles = makeStyles({
    root: {
      padding: '8px',
      height: '100vh',
    },
    paper: {
      width: '100%',
      height: '100%',
    },
    card: {
      backgroundColor: 'blue',
    },
  });

export default function CartDetails() {
    const classes = useStyles();
    const {state} = useCart()
      const location = useLocation();
      function renderlistItems(list) {
        return list
          .map(p => (
            <ListItem>
                <Box display='flex' justifyContent='space-around'>
                    <Typography>{p.quantity} x {p.title}</Typography>
                    <ListItemSecondaryAction>
                        <Typography>{p.price} {p.currency}</Typography>
                    </ListItemSecondaryAction>
                    
                </Box>
            </ListItem>
          ));
      }
    return (
        <Paper className={classes.paper}>
             <Box display='flex' flexDirection='column' justifyContent='space-between' className={classes.paper}>
                <Box>
                    

                    <ToggleButtons/>
                    <Box ml={2} mt={2} >
                            <Typography variant='h4'>Restaurant Name</Typography>
                    </Box>
                    <List>
                    
                        {renderlistItems(state.items)}
                        <Divider/>

                        <ListItem>
                        <Box variant='h6' display='flex' justifyContent='space-around' >
                            <Typography>
                                <Box fontWeight="fontWeightBold">Total price</Box>
                            </Typography>
                            <ListItemSecondaryAction>
                            <Box fontWeight="fontWeightBold">47$</Box>
                            </ListItemSecondaryAction>   
                        </Box>
                        
                    </ListItem>
                    </List>

                
                </Box>

                <Box>
                    <IonButton  
                        fill="solid"
                        color="secondary"
                        expand="full">
                            Plateste
                    </IonButton>
                </Box>
            
            </Box>
        </Paper>
    );
}
