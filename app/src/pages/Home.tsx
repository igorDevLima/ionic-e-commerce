import { IonPage } from "@ionic/react";
import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <Content />
      <Footer />
    </IonPage>
  );
};

export default Home;
