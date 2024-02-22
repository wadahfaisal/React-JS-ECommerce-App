import React from "react";
// import styled from "styled-components";
import Product from "./Product";
import { Product as ProductType } from "../types/contexts/products_context_type";

const GridView = ({ products }: Props) => {
  return (
    <section className="grid-view">
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

type Props = {
  products: ProductType[];
};

export default GridView;
