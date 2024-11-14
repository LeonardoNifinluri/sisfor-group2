import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import "./Login.css"; // Include custom CSS for styling
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchUserData } from "../../services/firebaseDatabase";
import { loginUser } from "../../services/firebaseAuth";

const Login: React.FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const history = useHistory()

    //this is the logic when login button is clicked
  const handleLogin = async () => {
    //this is to check the data
    console.log(`Email\t: ${email}\nPassword\t: ${password}`)
    //this is the auth process
    const userCredential = await loginUser(email, password)
    if(userCredential){
      const uid = userCredential.user.uid
      console.log('Login successfully ', uid)
      const userData = await fetchUserData(uid)
      if(userData?.role){
        const role = userData.role as unknown as string
        const route = (role === "OWNER") ? `/home/OWNER/${uid}` : `/home/ORDINARY/${uid}` 
        history.push(route)
      }
    }
  }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonTitle>KoKoS</IonTitle>
                    {/* <IonButtons slot="end">
                        <IonButton routerLink="/home">Beranda</IonButton>
                        <IonButton routerLink="/help">Bantuan</IonButton>
                        <IonButton routerLink="/policy">Kebijakan</IonButton>
                        <IonButton routerLink="/contact">Hubungi Kami</IonButton>
                    </IonButtons> */}
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding login-content">
                <div className="login-container">
                    <h2>Login</h2>
                    <IonItem>
                        <IonInput placeholder="Email" value={email}
            onIonChange={(it) => setEmail(it.detail.value || '')}/>
                    </IonItem>
                    <IonItem>
                        <IonInput type="password" placeholder="Password" value={password}
            onIonChange={(it) => setPassword(it.detail.value || '')}/>
                    </IonItem>
                    <p className="forgot-password">Lupa password ??</p>
                    <IonButton expand="full" color="dark" onClick={handleLogin}>Login</IonButton>
                    <p className="register-link">Belum punya akun? <a href="/register">Daftar Sekarang</a></p>
                </div>
            </IonContent>

            {/* <IonFooter>
                <IonToolbar color="medium">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h5>Bantuan</h5>
                            <p><a href="/about">Tentang Kami</a></p>
                            <p><a href="/support">Pusat Bantuan</a></p>
                        </div>
                        <div className="footer-section">
                            <h5>Kebijakan</h5>
                            <p><a href="/privacy">Kebijakan Privasi</a></p>
                            <p><a href="/terms">Syarat dan Ketentuan</a></p>
                        </div>
                        <div className="footer-section">
                            <h5>Hubungi Kami</h5>
                            <p><a href="tel:+0810101010">0810-101-010</a></p>
                            <p><a href="mailto:KoKos_PunyaEmail@gmail.com">KoKos_PunyaEmail@gmail.com</a></p>
                            <p>@KoKos</p>
                            <p>Ko_Kos</p>
                        </div>
                    </div>
                </IonToolbar>
            </IonFooter> */}
        </IonPage>
    );
};

export default Login
