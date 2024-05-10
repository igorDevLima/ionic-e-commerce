import ProductCard from "../ProductCard";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../Loader";
import { IonItem, IonList } from "@ionic/react";

import "./index.css";

const ProductsSection: React.FC = () => {
  const { data: products, isLoading } = useFetch(
    "https://fakestoreapi.com/products/category/electronics"
  );

  return (
    <IonList>
      {!isLoading ? (
        products &&
        products.map(
          (product: {
            id: number;
            title: string;
            image: string;
            price: number;
            category: string;
          }) => (
            <IonItem lines="none">
              <ProductCard key={product.id} productData={product} />
            </IonItem>
          )
        )
      ) : (
        <Loader />
      )}
    </IonList>
  );
};

export default ProductsSection;
