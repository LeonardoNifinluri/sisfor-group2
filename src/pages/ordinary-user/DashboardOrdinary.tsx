import { IonButton, IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const DashboardOrdinary: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Dashboard Ordinary</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <p>Hello</p>
                {/* this button will navigate ordinary user to search page */}
                <IonButton routerLink="/lala">Cari Kos</IonButton>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonTitle>Kokos</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    )

}

export default DashboardOrdinary