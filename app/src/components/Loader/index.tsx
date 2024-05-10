import { IonSpinner } from "@ionic/react";
import "./index.css";

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className="background">
      <IonSpinner name="circular"></IonSpinner>
    </div>
  );
};

export default Loader;
