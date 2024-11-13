import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const Login: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            {/* isi form login di dalam tag IonContent */}
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

export default Login