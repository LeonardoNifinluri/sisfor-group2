import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonImg,
  IonText,
} from "@ionic/react";
import "./Informasi.css";

const Informasi: React.FC = () => {
  // URL gambar 
  const imageURL1 =
    "https://i.pinimg.com/736x/f9/2f/cc/f92fcc93ae73ca439986199378c73b4a.jpg"; 
  const imageURL2 =
    "https://i.pinimg.com/736x/d8/2b/e0/d82be039c2b2a925f75ac90abdc7e335.jpg"; 
  const imageURL3 =
    "https://i.pinimg.com/736x/3b/91/2c/3b912c367cb6c46dfda1373bd169806a.jpg"; 
  const imageURL4 =
    "https://i.pinimg.com/736x/08/e9/b9/08e9b980cd40c03f8a64d34deb7ab944.jpg";
  const imageURL5 =
    "https://i.pinimg.com/736x/83/eb/ed/83ebed23d1024f8563748121ce666255.jpg";
  const imageURL6 =
    "https://i.pinimg.com/736x/57/6f/3a/576f3ac73c0c0a1ba97c3e5e318c3e46.jpg";

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Informasi Kost</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="informasi-content">
        <div className="kost-container">
          {/* Gambar Utama dan Detail Kost */}
          <div className="kost-detail">
            <h2
              style={{ fontWeight: "bold", fontSize: "2.5em", lineHeight: 0.7 }}
            >
              Pondok Hidayat Kost
            </h2>
            <p>Dikelola Oleh Alsa</p>
          </div>

          {/* Preview Gambar dengan Label */}
          <div className="kost-info">
            <div className="kost-preview-container">
              <IonImg src={imageURL1} className="kost-preview" />
            </div>
            <div className="kost-preview-right">
              <div className="kost-preview-container">
                <IonImg src={imageURL2} className="kost-preview1" />
              </div>
              <div className="kost-preview-container">
                <IonImg src={imageURL3} className="kost-preview2" />
              </div>
            </div>
          </div>

          {/* Informasi Harga dan Lokasi */}
          <div className="kost-price">
            <IonText>
              <h3 style={{ fontWeight: "bold" }}>Rp 15.000.000/Tahun</h3>
            </IonText>
            <IonButton
              expand="block"
              href="https://wa.me/YOUR_PHONE_NUMBER"
              color="success"
            >
              Hubungi Pemilik Kost
            </IonButton>
          </div>

          <p className="alamat">
            Romang Lompoa, Kec. Bontomarannu, Kabupaten Gowa, Sulawesi Selatan
            92171
          </p>

          {/* Spesifikasi */}
          <div className="specification-section">
            <h2 style={{ fontWeight: "bold" }}>Spesifikasi</h2>
            <hr className="specification-line" />
            <ul>
              <li>📏 Ukuran: 100 x 110 meter</li>
              <li>💡 Gratis Listrik</li>
              <li>🚰 Gratis Air</li>
            </ul>
          </div>

          {/* Fasilitas */}
          <div className="facilities-section">
            <h2 style={{ fontWeight: "bold" }}>Fasilitas</h2>
            <hr className="specification-line" />
            <div className="facility-icons">
              <span>🛏 Kasur</span>
              <span>📶 Wifi</span>
              <span>🚗 Parkiran</span>
              <span>❄ AC</span>
              <span>📝 Meja Belajar</span>
              <span>🪑 Lemari</span>
              <span>🚿 Kamar Mandi Dalam</span>
            </div>
          </div>

          {/* Informasi Tambahan */}
          <div className="additional-info">
            <h2 style={{ fontWeight: "bold" }}>Informasi Tambahan</h2>
            <hr className="specification-line" />
            <p>
              Kami menawarkan rumah kost dengan lokasi strategis dekat sawah
              yang indah. Cocok untuk liburan keluarga atau tempat tinggal
              harian, mingguan, maupun bulanan. Dekat dengan Ambarrukmo Plaza,
              hanya 15 menit ke Bandara Internasional Adisucipto dan Stasiun
              Tugu, serta dekat dengan berbagai restoran dan minimarket.
            </p>
            <p>Pokoknya Kost di sini, hidup Anda dijamin bahagia!</p>
          </div>
        </div>

        {/* Kost Terkait */}
        <div className="related-kost-section">
          <h2 style={{ fontWeight: "bold" }}>Kost Terkait</h2>
          <div className="related-kost-cards">
            <div className="kost-card">
              <IonImg src={imageURL4} />
              <h4 style={{ fontWeight: "bold" }}>Ibnu Kost</h4>
              <p>Rp 1.500.000 / bulan</p>
            </div>
            <div className="kost-card">
              <IonImg src={imageURL5} />
              <h4 style={{ fontWeight: "bold" }}>Fathy Kost</h4>
              <p>Rp 1.500.000 / bulan</p>
            </div>
            <div className="kost-card">
              <IonImg src={imageURL6} />
              <h4 style={{ fontWeight: "bold" }}>Arjuna Kost</h4>
              <p>Rp 1.000.000 / bulan</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer-section">
          <div className="footer-content">
            <h3>KoKoS</h3>
            <div className="footer-links">
              <div>
                <h4>Bantuan</h4>
                <p>Tentang Kami</p>
                <p>Pusat Bantuan</p>
              </div>
              <div>
                <h4>Kebijakan</h4>
                <p>Kebijakan Privasi</p>
                <p>Syarat dan Ketentuan</p>
              </div>
              <div>
                <h4>Hubungi Kami</h4>
                <p>0810-101-010</p>
                <p>Email: KoKos.PunyaEmail@gmail.com</p>
              </div>
            </div>
            <p>© KoKoS 2024</p>
          </div>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default Informasi;
