import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonFab, IonFabButton, IonIcon, IonImg } from "@ionic/react";
import { add } from 'ionicons/icons';

const DashboardOwner: React.FC = () => {
    const OwnedKost = [
        {
            id: 1,
            name: "Kost A",
            address: "Jl. Merdeka No. 1",
            thumbnail: "https://via.placeholder.com/150"
        },
        {
            id: 2,
            name: "Kost B",
            address: "Jl. Pemuda No. 2",
            thumbnail: "https://via.placeholder.com/150"
        },
        {
            id: 3,
            name: "Kost C",
            address: "Jl. Lamtoro No. 3",
            thumbnail: "https://via.placeholder.com/150"
        },
        {
            id: 4,
            name: "Kost D",
            address: "Jl. Akasia No. 4",
            thumbnail: "https://via.placeholder.com/150"
        },
        {
            id: 5,
            name: "Kost E",
            address: "Jl. Jeruk No. 5",
            thumbnail: "https://via.placeholder.com/150"
        },
    ];

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Dashboard Owner</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                
                {/*hero*/}
                <section 
                    style={{
                        backgroundImage: 'url(https://via.placeholder.com/1200x600)', 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: '60px 16px 40px',
                        textAlign: 'center'
                    }}
                >
                    <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px', color: '#ffffff' }}>
                        Kost yang terdaftar
                    </h1>
                </section>

                {OwnedKost.map((Kost) => (
                    <IonCard key={Kost.id} style={{ margin: '16px 64px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <IonImg 
                            src={Kost.thumbnail} 
                            alt={`Thumbnail of ${Kost.name}`} 
                            style={{ width: '100%', height: '150px', objectFit: 'cover' }} 
                        />
                        <IonCardHeader>
                            <IonCardTitle>{Kost.name}</IonCardTitle>
                            <IonCardSubtitle>{Kost.address}</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>
                ))}

                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton routerLink="/AddKost">
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>
            </IonContent>

            <IonFooter>

            </IonFooter>
        </IonPage>
    );
};

export default DashboardOwner;
