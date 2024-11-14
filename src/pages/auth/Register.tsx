import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton, IonRadio, IonRadioGroup } from "@ionic/react";
import "./Register.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { UserRole } from "../../types/UserRole";
import { registerUser } from "../../services/firebaseAuth";
import { saveUserData } from "../../services/firebaseDatabase";

const Register: React.FC = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [role, setRole] = useState<UserRole>(UserRole.UNKNOWN)
    const history = useHistory()

    //this is the logic when login button is clicked
    const handleRegister = async () => {
        //this is for check the data
        console.log(`Name\t: ${name}\nEmail\t: ${email}\nPassword\t: ${password}\nPhone number\t: ${phoneNumber}\nRole\t: ${UserRole[role]}`)

        //this is the auth process  
        const userCredential = await registerUser(email, password)
        if(userCredential){
            const uid = userCredential.user.uid
            console.log('User created successfully ', uid)
            await saveUserData(uid, name, email, role)

            history.goBack()
        }
    }

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
                        <IonInput placeholder="Name" value={name} onIonChange={(it) => setName(it.detail.value|| '')} />
                    </IonItem>
                    <IonItem>
                        <IonInput type="email" placeholder="Email" value={email} onIonChange={(it) => setEmail(it.detail.value|| '')} />
                    </IonItem>
                    <IonItem>
                        <IonInput type="password" placeholder="Password" value={password} onIonChange={(it) => setPassword(it.detail.value|| '')} />
                    </IonItem>
                    <IonItem>
                        <IonInput type="number" placeholder="Phone number" value={phoneNumber} onIonChange={(it) => setPhoneNumber(it.detail.value|| '')} />
                    </IonItem>
                    <IonRadioGroup 
                    value={role}
                    onIonChange={(it) => setRole(it.detail.value as UserRole)}>
                        <IonRadio value={UserRole.OWNER}>Owner</IonRadio>
                        <br/>
                        <IonRadio value={UserRole.ORDINARY}>Ordinary</IonRadio>
                        <br/>
                    </IonRadioGroup>
                    <IonButton expand="block" color="dark" onClick={handleRegister}>Daftar</IonButton>
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