import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import styles from "../scss/components/featuredProducts.module.scss";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <section className={styles.homeFeatured}>
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className={styles.featured}>
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link to="/products" className={styles.btn}>
        all products
      </Link>
    </section>
  );
};

export default FeaturedProducts;
