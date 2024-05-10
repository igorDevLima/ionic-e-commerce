import { IonFooter, IonTitle, IonToolbar } from "@ionic/react";
import "./index.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <IonFooter translucent={true}>
      <IonToolbar>
        <IonTitle>All rights reserved</IonTitle>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;
