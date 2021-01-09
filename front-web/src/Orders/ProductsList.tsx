import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard"
import { Product } from "./types";

type Props = {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void;
}

const ProductList = ( { products, onSelectProduct, selectedProducts }: Props ) => {
    return(
        <div className="orders-list-container" >
            <div className="orders-list-items" >
               {
                   products.map(product => {
                       return(
                        <ProductCard isSelected={checkIsSelected(selectedProducts, product)} onSelectProduct={onSelectProduct} key={product.id} 
                            product={product}
                        />
                       )
                   })
               }
            </div>
        </div>
    )
}

export default ProductList;