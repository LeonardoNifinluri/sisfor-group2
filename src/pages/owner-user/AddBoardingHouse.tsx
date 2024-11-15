import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonInput,
    IonLabel,
    IonItem,
    IonButton,
    IonCheckbox,
    IonList,
    IonTextarea,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon
} from "@ionic/react";
import React from "react";
import { homeOutline, heartOutline, fileTrayOutline, personOutline, calendarClearOutline, settingsOutline } from "ionicons/icons";

const AddBoardingHouse: React.FC = () => {
    return (
        <IonPage style={{ backgroundColor: "#FDF7F7" }}>
            <IonHeader>
                <IonToolbar style={{ "--background": "#AE9A9B" }}>
                    <IonTitle style={{ textAlign: 'center', fontSize: '1.5em', fontWeight: 'bold', color: 'black' }}>
                        Tambahkan Kost Anda
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonList>
                    {/* Nama Kost */}
                    <IonItem>
                        <IonLabel position="stacked" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Nama Kost</IonLabel>
                        <IonInput style={{ fontSize: '1em' }} placeholder="Masukkan Nama Kost" />
                    </IonItem>

                    {/* Alamat Kost */}
                    <IonItem>
                        <IonLabel position="stacked" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Alamat Kost</IonLabel>
                        <IonInput style={{ fontSize: '1em' }} placeholder="Masukkan Alamat Kost" />
                    </IonItem>

                    {/* Harga */}
                    <IonItem>
                        <IonLabel position="stacked" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Harga</IonLabel>
                        <IonInput style={{ fontSize: '1em' }} placeholder="Masukkan Harga" />
                    </IonItem>

                    {/* No. Whatsapp */}
                    <IonItem>
                        <IonLabel position="stacked" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>No. Whatsapp</IonLabel>
                        <IonInput style={{ fontSize: '1em' }} placeholder="Masukkan No. Whatsapp" />
                    </IonItem>

                    {/* Spesifikasi */}
                    <IonItem>
                        <IonLabel position="stacked" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Spesifikasi</IonLabel>
                        <IonTextarea style={{ fontSize: '1em' }} placeholder="Masukkan Spesifikasi" />
                    </IonItem>

                    {/* Fasilitas */}
                    <IonLabel className="ion-padding-top" style={{ fontSize: '1.2em', fontWeight: 'bold', marginLeft: '16px' }}>Fasilitas</IonLabel>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="6">
                                <IonItem lines="none">
                                    <IonLabel>Kasur</IonLabel>
                                    <IonCheckbox slot="end" />
                                </IonItem>
                                <IonItem lines="none">
                                    <IonLabel>Lemari</IonLabel>
                                    <IonCheckbox slot="end" />
                                </IonItem>
                                <IonItem lines="none">
                                    <IonLabel>Wifi</IonLabel>
                                    <IonCheckbox slot="end" />
                                </IonItem>
                                <IonItem lines="none">
                                    <IonLabel>Meja</IonLabel>
                                    <IonCheckbox slot="end" />
                                </IonItem>
                            </IonCol>
                            <IonCol size="6">
                                <IonItem lines="none">
                                    <IonLabel>Parkiran</IonLabel>
                                    <IonCheckbox slot="end" />
                                </IonItem>
                                <IonItem lines="none">
                                    <IonLabel>AC</IonLabel>
                                    <IonCheckbox slot="end" />
                                </IonItem>
                                <IonItem lines="none">
                                    <IonLabel>Kulkas</IonLabel>
                                    <IonCheckbox slot="end" />
                                </IonItem>
                                <IonItem lines="none">
                                    <IonLabel>Lainnya</IonLabel>
                                    <IonCheckbox slot="end" />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                    {/* Informasi Tambahan */}
                    <IonItem>
                        <IonLabel position="stacked" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Informasi Tambahan</IonLabel>
                        <IonTextarea style={{ fontSize: '1em' }} placeholder="Masukkan Informasi Tambahan" />
                    </IonItem>

                    {/* Upload Foto */}
                    <IonItem>
                        <IonLabel position="stacked" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Upload Foto</IonLabel>
                        <p className="ion-text-wrap text-gray-600 text-sm mb-2">Upload foto yang memperlihatkan fasilitas kost anda</p>
                        <input type="file" style={{ width: '100%' }} />
                    </IonItem>
                </IonList>

                {/* Button Tambah */}
                <div className="ion-padding">
                    {/* this button will navigate owner-user to dashboard page */}
                    <IonButton expand="block" style={{ "--background": "#AE9A9B", color: 'black', borderRadius: '10px', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)', fontWeight: 'bold'}} routerLink="/wahyu">
                        Tambah
                    </IonButton>
                </div>
            </IonContent>

            <IonFooter>
                <IonToolbar style={{ "--background": "#AE9A9B" }}>
                    <IonGrid>
                        <IonRow>
                            <IonCol className="ion-text-center">
                                <IonButton fill="clear">
                                    <IonIcon icon={homeOutline} size="medium" color="medium" />
                                </IonButton>
                            </IonCol>
                            <IonCol className="ion-text-center">
                                <IonButton fill="clear">
                                    <IonIcon icon={calendarClearOutline} size="medium" color="medium" />
                                </IonButton>
                            </IonCol>
                            <IonCol className="ion-text-center">
                                <IonButton fill="clear">
                                    <IonIcon icon={personOutline} size="medium" color="medium" />
                                </IonButton>
                            </IonCol>
                            <IonCol className="ion-text-center">
                                <IonButton fill="clear">
                                    <IonIcon icon={heartOutline} size="medium" color="medium" />
                                </IonButton>
                            </IonCol>
                            <IonCol className="ion-text-center">
                                <IonButton fill="clear">
                                    <IonIcon icon={settingsOutline} size="medium" color="medium" />
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default AddBoardingHouse;
