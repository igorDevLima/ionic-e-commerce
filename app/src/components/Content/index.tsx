import { IonContent } from "@ionic/react";
import Breadcrumb from "../Breadcrumb";
import ProductsSection from "../ProductsSection";

interface ContentProps {}

const Content: React.FC<ContentProps> = () => {
  return (
    <IonContent fullscreen>
      <Breadcrumb />
      <ProductsSection />
    </IonContent>
  );
};

export default Content;
