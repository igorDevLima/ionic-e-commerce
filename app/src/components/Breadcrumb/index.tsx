import { IonBreadcrumb, IonBreadcrumbs } from "@ionic/react";
import "./index.css";

interface BreadcrumProps {}

const Breadcrumb: React.FC<BreadcrumProps> = () => {
  return (
    <IonBreadcrumbs>
      <IonBreadcrumb>Promotion 40% OFF</IonBreadcrumb>
      <IonBreadcrumb>Electronics</IonBreadcrumb>
    </IonBreadcrumbs>
  );
};

export default Breadcrumb;
