import { Product } from "../types/contexts/products_context_type";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
type Props = {
  products: Product[];
};
const ListView = ({ products }: Props) => {
  return (
    <section className="list-view">
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListView;
