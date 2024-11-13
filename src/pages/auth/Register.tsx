import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const Register: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>

            {/* isi form register di dalam tag IonContent */}
            <IonContent>

            </IonContent>

            <IonFooter>
                <IonToolbar>
                    <IonTitle>Group2</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    )
}

export default Register