import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton } from "@ionic/react";
import "./Register.css";

const Register: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="custom-navbar">
                    <IonTitle className="navbar-title">KoKoS</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding register-content">
                <div className="register-container">
                    <h2>Register</h2>
                    <IonItem>
                        <IonInput placeholder="Username"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput type="email" placeholder="Email"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput type="password" placeholder="Password"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput type="password" placeholder="Confirm Password"></IonInput>
                    </IonItem>
                    <IonButton expand="block" color="dark">Daftar</IonButton>
                </div>
            </IonContent>

            <IonFooter>
                <IonToolbar color="medium">
                    <p className="footer-text">Sudah punya akun? <a href="/login">Masuk Sekarang</a></p>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Register;