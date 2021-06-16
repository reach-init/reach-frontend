import React, { useState, useRef , useEffect} from 'react';
import { IonToolbar, IonContent, IonPage, IonButtons, IonTitle, IonMenuButton, IonSegment, IonSegmentButton, IonButton, IonIcon, IonSearchbar, IonRefresher, IonRefresherContent, IonToast, IonModal, IonHeader, getConfig } from '@ionic/react';
import { search } from 'ionicons/icons';
import { connect } from '../data/connect';
import { setSearchText } from '../data/sessions/sessions.actions';

const PageHOC = ({ setSearchText , component, id, name , handleScroll = () => {} , scrollEvents= false }) => {
    const [showSearchbar, setShowSearchbar] = useState(false);
    const ionRefresherRef = useRef(null);
    const [showCompleteToast, setShowCompleteToast] = useState(false);
  
    const doRefresh = () => {
        setTimeout(() => {
          ionRefresherRef.current.complete();
          setShowCompleteToast(true);
        }, 2500)
      };
      
    useEffect(() => console.log(scrollEvents))
    const pageRef = useRef(null);
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
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent id={"content-"+id} scrollEvents={scrollEvents}   onIonScroll={handleScroll} fullscreen={true}>

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
