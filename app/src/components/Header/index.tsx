import {
  IonButtons,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenuButton,
  IonToolbar,
} from "@ionic/react";

import { cartSharp } from "ionicons/icons";

import "./index.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <IonHeader collapse="fade">
      <IonToolbar>
        <IonItem lines="none">
          <IonIcon icon={cartSharp}> </IonIcon> Ion-shop
          <IonButtons slot="end">
            <IonMenuButton autoHide={false}></IonMenuButton>
          </IonButtons>
        </IonItem>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
