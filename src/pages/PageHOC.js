import React, { useState, useRef , useEffect} from 'react';
import { IonToolbar, IonContent, IonPage, IonButtons, IonTitle, IonMenuButton, IonSegment, IonSegmentButton, IonButton, IonIcon, IonSearchbar, IonRefresher, IonRefresherContent, IonToast, IonModal, IonHeader, getConfig , IonBackButton} from '@ionic/react';
import { search } from 'ionicons/icons';
import { connect } from '../data/connect';
import { setSearchText } from '../data/sessions/sessions.actions';
import { useAuth0 } from '../auth/react-auth'
import {   IonFooter } from '@ionic/react';
import {useCart} from '../context/cart/context'
import {usePreferences} from '../context/preferences/context'

import { useHistory } from "react-router-dom";

const PageHOC = ({ setSearchText , component, id, name , handleScroll = () => {} , scrollEvents= false , setShowTabs = () => {}, tabsLimit, showCartButton = true, showBack = false, showHeader = true}) => {
    const [showSearchbar, setShowSearchbar] = useState(false);
    const {state: cart} = useCart()
    const {state : preferences} = usePreferences()

    const ionRefresherRef = useRef(null);
    const [showCompleteToast, setShowCompleteToast] = useState(false);
    const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0()
    const mobileMenuId = 'primary-search-account-menu-mobile'
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
    const history = useHistory();

    const isMenuOpen = Boolean(anchorEl)
    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget)
    }
    
    const handleOnClick = () => {
      history.replace("/cart");
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

 { !preferences.setting1 && showHeader && <IonHeader translucent={true}>
      <IonToolbar>
     {showBack &&  <IonButtons slot="start">
              <IonBackButton defaultHref="/home" />
            </IonButtons>}
        { !showBack && !showSearchbar &&
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
      

    </IonHeader> }


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
    {
      cart.items.length > 0 && showCartButton && 
      <IonFooter className="ion-no-border">
      <IonToolbar>

      <IonButton  routerLink="/cart"
      // onClick={handleOnClick}
              fill="solid"
                color="dark" expand="full">Cart - {cart.items.length} items</IonButton>
      </IonToolbar>
    </IonFooter>
    }
    

  
  </IonPage>
)
}
export default connect({
   
    mapDispatchToProps: {
      setSearchText
    },
    component: PageHOC
  });
