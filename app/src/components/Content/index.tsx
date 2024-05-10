import { IonContent } from "@ionic/react";
import Breadcrumb from "../Breadcrumb";
import ProductsSection from "../ProductsSection";
import Footer from "../Footer";

interface ContentProps {}

const Content: React.FC<ContentProps> = () => {
  return (
    <IonContent fullscreen>
      <Breadcrumb />
      <ProductsSection />
      <Footer />
    </IonContent>
  );
};

export default Content;
