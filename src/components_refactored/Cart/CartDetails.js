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
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import Button from '@material-ui/core/Button';
import ModalSelector from '../ModalSelector/ModalSelector'
import {useToggleButtons} from '../../context/toggleButtons/context'

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
    const [open, setOpen] = React.useState(false);
    const {state: toggleButtonsState} = useToggleButtons()

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
      <>
        <ModalSelector open={open} setOpen={setOpen}/>
        <Paper className={classes.paper}>
             <Box display='flex' flexDirection='column' justifyContent='space-between' className={classes.paper}>
                <Box>
                    

                    <ToggleButtons/>

                    <Box ml={2} mt={2} mr={1} display='flex' alignItems='center'  justifyContent="center"  >
                            {/* <Button variant="outlined" startIcon={<InfoIcon />}  endIcon={<ChevronRightIcon />}  color="dark" >{more ? "Hide" : "Contact info"}</Button>     */}
                            <InfoOutlined />
                          
                            {toggleButtonsState.selected === 'left' && 
                              <Typography variant="h6">
                                The delivery will reach you in 10 min
                              </Typography>
                            }

                            {toggleButtonsState.selected === 'center' && 
                              <Typography variant="h6">
                                You can pick up your order in 10 min
                              </Typography>
                            }

                            {toggleButtonsState.selected === 'right' && 
                              <Typography variant="h6">
                                Your reservation is schedule for 10 o'clock
                              </Typography>
                            }
                            
                            <Box flexGrow={1}></Box> 
                            <Button onClick={() => {
                                setOpen(true)
                            }} color="secondary">Schimba</Button>
                        </Box>


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
                        color="danger"
                        expand="full">
                            Plateste
                    </IonButton>
                </Box>
            
            </Box>
        </Paper>
        </>
    );
}
