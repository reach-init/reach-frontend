import React, { useState, useRef } from 'react';
import { IonToolbar, IonContent, IonPage, IonButtons, IonTitle, IonMenuButton, IonSegment, IonSegmentButton, IonButton, IonIcon, IonSearchbar, IonRefresher, IonRefresherContent, IonToast, IonModal, IonHeader, getConfig } from '@ionic/react';
import { home, search } from 'ionicons/icons';
import * as selectors from '../data/selectors';
import { connect } from '../data/connect';
import { setSearchText } from '../data/sessions/sessions.actions';
import Posts from '../components_refactored/Posts/Posts'

const HomePage = ({ favoritesSchedule, schedule, setSearchText, mode }) => {
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
      <Posts />
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
    component: React.memo(HomePage)
  });
