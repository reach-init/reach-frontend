import React, { useState, useRef , useEffect} from 'react';
import { IonToolbar, IonContent, IonPage, IonButtons, IonTitle, IonMenuButton, IonSegment, IonSegmentButton, IonButton, IonIcon, IonSearchbar, IonRefresher, IonRefresherContent, IonToast, IonModal, IonHeader, getConfig } from '@ionic/react';
import { search } from 'ionicons/icons';
import { connect } from '../data/connect';
import { setSearchText } from '../data/sessions/sessions.actions';
import {HideOn} from 'react-hide-on-scroll'
import { useAuth0 } from '../auth/react-auth'
import { Grid, Hidden } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { Link, useHistory } from 'react-router-dom'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Badge from '@material-ui/core/Badge'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'


const PageHOC = ({ setSearchText , component, id, name , handleScroll = () => {} , scrollEvents= false , setShowTabs = () => {}, tabsLimit}) => {
    const [showSearchbar, setShowSearchbar] = useState(false);
    const ionRefresherRef = useRef(null);
    const [showCompleteToast, setShowCompleteToast] = useState(false);
    const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0()
    const mobileMenuId = 'primary-search-account-menu-mobile'
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

    const isMenuOpen = Boolean(anchorEl)
    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget)
    }
    
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget)
    }

    const doRefresh = () => {
        setTimeout(() => {
          ionRefresherRef.current.complete();
          setShowCompleteToast(true);
        }, 2500)
      };

    const handleMenuClose = () => {
      setAnchorEl(null)
      handleMobileMenuClose()
    }

    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null)
    }

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
      
    useEffect(() => console.log(scrollEvents))
    const pageRef = useRef(null);

    const menuId = 'primary-search-account-menu'

    return (
    <IonPage ref={pageRef} id={id}>

 <IonHeader translucent={true}>
      <IonToolbar>
        {!showSearchbar &&
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        }
       
        {  !showSearchbar &&
          <IonTitle>{name}</IonTitle>
        }
        {showSearchbar &&
          <IonSearchbar showCancelButton="always" placeholder="Search" onIonChange={(e ) => setSearchText(e.detail.value)} onIonCancel={() => setShowSearchbar(false)}></IonSearchbar>
        }

        <IonButtons slot="end">
          { !showSearchbar &&
            <IonButton onClick={() => setShowSearchbar(true)}>
              <IonIcon slot="icon-only" icon={search}></IonIcon>
            </IonButton>
          }

          {!isAuthenticated && (
                  // <Grid item lg={2} md={2} sm={2} xs={3}>
                    <IonButton
                      onClick={() => loginWithRedirect({})}
                      variant="contained"
                      color="default"
                    >
                      Login
                    </IonButton>
                  // </Grid>
                )}

          {/* {isAuthenticated && (
                  <Hidden smUp>
                      <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="black"
                      >
                        <MoreIcon />
                      </IconButton>
                  </Hidden>
                )} */}


        </IonButtons>

      </IonToolbar>
      

    </IonHeader>


    <IonContent id={"content-"+id} scrollEvents={scrollEvents}   onIonScroll={(e) => {
      if (e.detail.currentY > tabsLimit) {
        setShowTabs(true)
      } else {
        setShowTabs(false)

      }
      handleScroll(e)
    }
      } fullscreen={true}>

      <IonRefresher slot="fixed" ref={ionRefresherRef} onIonRefresh={doRefresh}>
        <IonRefresherContent />
      </IonRefresher>

      <IonToast
        isOpen={showCompleteToast}
        message="Refresh complete"
        duration={2000}
        onDidDismiss={() => setShowCompleteToast(false)}
      />


      {component}



    </IonContent>
  </IonPage>
)
}
export default connect({
   
    mapDispatchToProps: {
      setSearchText
    },
    component: PageHOC
  });
