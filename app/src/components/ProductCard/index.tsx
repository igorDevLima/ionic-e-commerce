import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from "@ionic/react";
import { starSharp } from "ionicons/icons";

import "./index.css";

interface ProductProps {
  productData: {
    title: string;
    image: string;
    price: number;
    category: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ productData }) => {
  return (
    <IonCard color="dark">
      <img alt="product" src={productData.image} />
      <IonCardHeader>
        <IonCardTitle
          style={{
            maxHeight: "max-content",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {productData.title}
        </IonCardTitle>
        <IonCardSubtitle>{productData.category}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <h2>${productData.price.toFixed(2)}</h2>
        <div className="avaliation">
          <div className="stars">
            <IonIcon icon={starSharp} />
            <IonIcon icon={starSharp} />
            <IonIcon icon={starSharp} />
            <IonIcon icon={starSharp} />
            <IonIcon icon={starSharp} />
          </div>
          34 avaliations
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default ProductCard;
