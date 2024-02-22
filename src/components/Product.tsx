import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import productImage from "../assets/product.jpg";

const Product = ({ images, name, price, id }: Props) => {
  return (
    <article className="product-component">
      <div className="container">
        <img src={"http://localhost:5000" + images[0]} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </article>
  );
};

type Props = {
  images: string[];
  name: string;
  price: number;
  id: string;
};
export default Product;
