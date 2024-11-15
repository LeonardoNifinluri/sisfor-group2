import {
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonImg,
  IonText,
  IonIcon,
  IonFooter,
  IonTabBar,
  IonTabButton,
} from '@ionic/react';
import { home, search, person, heart, settings } from 'ionicons/icons';
import React, { useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import './Search.css';

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const kostData = [
    {
      id: 1,
      name: "Kost A",
      address: "Jl. Merdeka No. 1",
      thumbnail: "https://via.placeholder.com/150",
      rating: 4
    },
    {
      id: 2,
      name: "Kost B",
      address: "Jl. Pemuda No. 2",
      thumbnail: "https://via.placeholder.com/150",
      rating: 3
    },
    {
      id: 3,
      name: "Kost C",
      address: "Jl. Lamtoro No. 3",
      thumbnail: "https://via.placeholder.com/150",
      rating: 5
    },
    {
      id: 4,
      name: "Kost D",
      address: "Jl. Akasia No. 4",
      thumbnail: "https://via.placeholder.com/150",
      rating: 2
    },
    {
      id: 5,
      name: "Kost E",
      address: "Jl. Jeruk No. 5",
      thumbnail: "https://via.placeholder.com/150",
      rating: 4
    },
  ];

  // Filter kostData berdasarkan searchText
  const filteredKostData = kostData.filter(kost =>
    kost.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <IonPage>
      <IonHeader>
          <IonToolbar style={{ "--background": "#BDA2A2" }}>
            <IonTitle style={{ textAlign: 'center', fontSize: '1em', fontWeight: 'bold', color: 'white' }}>
                Cari Kost 
              </IonTitle>
          </IonToolbar>
        </IonHeader>


      <IonContent fullscreen>
        <div className="search-container">
          <IonSearchbar
            value={searchText}
            onIonChange={e => setSearchText(e.detail.value!)}
            placeholder="Search"
            className="custom-searchbar"
          />
        </div>

        <div className="results-container">
          <IonText color="medium">
            <p className="results-text">Hasil...</p>
          </IonText>

          {filteredKostData.length > 0 ? (
            filteredKostData.map((kost) => (
              // everytime ordinary user click the result, they navigate to Information page
              <IonCard key={kost.id} className="kost-card" routerLink="/rency">
                <IonCardContent className="kost-content">
                  <IonImg 
                    src={kost.thumbnail} 
                    alt={kost.name}
                    className="kost-image"
                  />
                  <div className="kost-info">
                    <h2>{kost.name}</h2>
                    <p>{kost.address}</p>
                    <div className="rating">
                      {'⭐'.repeat(kost.rating)}
                    </div>
                  </div>
                </IonCardContent>
              </IonCard>
            ))
          ) : (
            <IonText>No results found</IonText>
          )}
        </div>
      </IonContent>

      <IonFooter>
        <IonTabBar slot="bottom" className="custom-tab-bar">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={search} />
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={person} />
          </IonTabButton>
          <IonTabButton tab="favorites" href="/favorites">
            <IonIcon icon={heart} />
          </IonTabButton>
          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={settings} />
          </IonTabButton>
        </IonTabBar>
      </IonFooter>
    </IonPage>
  );
};

export default Search;
