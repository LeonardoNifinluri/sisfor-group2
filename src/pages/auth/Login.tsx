import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import "./Login.css"; // Include custom CSS for styling

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonTitle>KoKoS</IonTitle>
                    <IonButtons slot="end">
                        <IonButton routerLink="/home">Beranda</IonButton>
                        <IonButton routerLink="/help">Bantuan</IonButton>
                        <IonButton routerLink="/policy">Kebijakan</IonButton>
                        <IonButton routerLink="/contact">Hubungi Kami</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding login-content">
                <div className="login-container">
                    <h2>Login</h2>
                    <IonItem>
                        <IonInput placeholder="Username"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput type="password" placeholder="Password"></IonInput>
                    </IonItem>
                    <p className="forgot-password">Lupa password ??</p>
                    <IonButton expand="full" color="dark">Login</IonButton>
                    <p className="register-link">Belum punya akun? <a href="/register">Daftar Sekarang</a></p>
                </div>
            </IonContent>

            <IonFooter>
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
            </IonFooter>
        </IonPage>
    );
};

export default Login
