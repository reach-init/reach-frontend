import Dish from '../Dish/Dish'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Tag from '../Tag/Tag'
import PropTypes from 'prop-types';
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
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper, Avatar, Icon } from '@material-ui/core';
import Scrollspy from 'react-scrollspy'
import React, { useRef, useEffect, useState } from "react";
import "./RestaurantMenu.css";
import { IonToolbar, IonContent, IonPage, IonButtons, IonTitle, IonMenuButton, IonSegment, IonSegmentButton, IonButton, IonIcon, IonSearchbar, IonRefresher, IonRefresherContent, IonToast, IonModal, IonHeader, getConfig } from '@ionic/react';
import { home, search } from 'ionicons/icons';
import * as selectors from '../../data/selectors';
import { connect } from '../../data/connect';
import { setSearchText } from '../../data/sessions/sessions.actions';
import Posts from '../../components_refactored/Posts/Posts'
import RestaurantList from '../../components_refactored/Restaurant/RestaurantList';


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
        height: '150px',
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
 function ScrollableTabsButtonForce({value, handleChange}) {
    const classes = useStyles();
   
  
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
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
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
        height,
        offsetTop,
        offsetBottom,
    };
};

const scrollTo = (ele, header) => {
    const { height } = header.getBoundingClientRect()
    window.scrollTo({
        top: ele.offsetTop - height,
        // behavior: 'smooth' 
      } );
};

function RestaurantMenuContent() {
    const [visibleSection, setVisibleSection] = useState();
    const [value, setValue] = React.useState(0);
  
   
    const classes = useStyles();

    const headerRef = useRef(null);

 

    const dishes = [1, 2, 3, 4, 5].map((dish, i) => (
        <Box mt={2} key={i}>
            <Dish image="https://source.unsplash.com/random/?food" />

        </Box>))

    const sectionRefs = [
        { section: "s1", ref: useRef(null) , value: 0},
        { section: "s2", ref: useRef(null) , value: 1},
        { section: "s3", ref: useRef(null) , value: 2},
        { section: "s4", ref: useRef(null) , value: 3},
        { section: "s5", ref: useRef(null) , value: 4},

    ];
    const handleChange = (event, newValue) => {
        scrollTo(sectionRefs[newValue].ref.current, headerRef.current);
      setValue(newValue);
    };
    useEffect(() => {
        const handleScroll = () => {
            const { height: headerHeight } = getDimensions(headerRef.current);
            console.log(headerHeight)
            const scrollPosition = window.scrollY + headerHeight;

            const selected = sectionRefs.find(({ section, ref , value}) => {
                const ele = ref.current;
                if (ele) {
                    console.log(getDimensions(ele))
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
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [visibleSection]);
    return (
        <>
            <div />
            <Avatar
                variant="square"
                className={classes.cover} src="https://source.unsplash.com/random/?food">
            </Avatar>

            <div className="sticky">
                <div  ref={headerRef}>
                <ScrollableTabsButtonForce value={value} handleChange={handleChange} />
          
                </div>
            </div>
            <div>
                {sectionRefs.map(x => (  
                <div key={x.value}  ref={x.ref}>
                    <h1>{x.section}</h1>
                    {dishes}
                </div>))}
          
                </div>
        </>

    );
}


const RestaurantMenu = ({ favoritesSchedule, schedule, setSearchText, mode }) => {
    const [segment, setSegment] = useState('all');
    const [showSearchbar, setShowSearchbar] = useState(false);
    const [showFilterModal, setShowFilterModal] = useState(false);
    const ionRefresherRef = useRef(null);
    const [showCompleteToast, setShowCompleteToast] = useState(false);
  
    const doRefresh = () => {
        setTimeout(() => {
          ionRefresherRef.current.complete();
          setShowCompleteToast(true);
        }, 2500)
      };
    const ios = mode === 'ios';
  
    const pageRef = useRef(null);
    return (
    <IonPage ref={pageRef} id="home-page">
    <IonHeader translucent={true}>
      <IonToolbar>
        {!showSearchbar &&
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        }
        {ios &&
          <IonSegment value={segment} onIonChange={(e) => setSegment(e.detail.value )}>
            <IonSegmentButton value="all">
              All
            </IonSegmentButton>
            <IonSegmentButton value="favorites">
              Favorites
            </IonSegmentButton>
          </IonSegment>
        }
        {!ios && !showSearchbar &&
          <IonTitle>Home</IonTitle>
        }
        {showSearchbar &&
          <IonSearchbar showCancelButton="always" placeholder="Search" onIonChange={(e ) => setSearchText(e.detail.value)} onIonCancel={() => setShowSearchbar(false)}></IonSearchbar>
        }

        <IonButtons slot="end">
          {!ios && !showSearchbar &&
            <IonButton onClick={() => setShowSearchbar(true)}>
              <IonIcon slot="icon-only" icon={search}></IonIcon>
            </IonButton>
          }
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen={true}>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Schedule</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar placeholder="Search" onIonChange={(e) => setSearchText(e.detail.value)}></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonRefresher slot="fixed" ref={ionRefresherRef} onIonRefresh={doRefresh}>
        <IonRefresherContent />
      </IonRefresher>

      <IonToast
        isOpen={showCompleteToast}
        message="Refresh complete"
        duration={2000}
        onDidDismiss={() => setShowCompleteToast(false)}
      />
      <RestaurantMenuContent />
    </IonContent>
  </IonPage>
)
}
export default connect({
    mapStateToProps: (state) => ({
      schedule: selectors.getSearchedSchedule(state),
      favoritesSchedule: selectors.getGroupedFavorites(state),
      mode: getConfig().get('mode')
    }),
    mapDispatchToProps: {
      setSearchText
    },
    component: React.memo(RestaurantMenu)
  });
