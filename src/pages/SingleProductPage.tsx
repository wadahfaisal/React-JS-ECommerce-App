// import { useParams, useHistory } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import { Home } from ".";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SingleProductPage = () => {
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  const { id } = useParams();

  useEffect(() => {
    fetchSingleProduct(`${url}/${id}`);
  }, [id]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     return redirect("/");
  //   }, 3000);
  // }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    inventory: stock,
    averageRating: stars,
    numOfReviews: reviews,
    id: sku,
    company,
    images,
  } = product;

  const newImages = images?.map((image) => {
    return `http://localhost:5000${image}`;
  });

  return (
    <main className="single-page">
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          {/* <ProductImages images={images} /> */}
          <ProductImages images={newImages} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available :</span>
              {stock > 0 ? "in stock" : "out of stock"}
            </p>
            <p className="info">
              <span>SKU :</span>
              {sku}
            </p>
            <p className="info">
              <span>Brand :</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </main>
  );
};

export default SingleProductPage;
