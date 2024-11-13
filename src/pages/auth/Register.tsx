import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton, IonRadio, IonRadioGroup } from "@ionic/react";
import "./Register.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Register: React.FC = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    // const [role, setRole] = useState<Role>(Role.C)
    const history = useHistory()

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
                        <IonInput type="number" placeholder="Phone number"></IonInput>
                    </IonItem>
                    <IonRadioGroup 
                    value={5}
                    onIonChange={(it) => {console.log()}}>
                        <IonRadio value={4}>Owner</IonRadio>
                        <br/>
                        <IonRadio value={4}>Ordinary</IonRadio>
                        <br/>
                    </IonRadioGroup>
                    <IonButton expand="block" color="dark">Daftar</IonButton>
                </div>
            </IonContent>

            {/* <IonFooter>
                <IonToolbar color="medium">
                    <p className="footer-text">Sudah punya akun? <a href="/login">Masuk Sekarang</a></p>
                </IonToolbar>
            </IonFooter> */}
        </IonPage>
    );
};

export default Register