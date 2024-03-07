import { useState } from "react";

const ProductImages = ({ images = [] }: Props) => {
  const [mainImage, setMainImage] = useState(images[0]);

  console.log(images);
  return (
    <section className="product-images">
      <img src={mainImage} alt="main" className="main" />
      <div className="gallery">
        {images.map((img, index) => {
          return (
            <img
              // src={img}
              src={img}
              key={index}
              onClick={() => setMainImage(images[index])}
              className={img === mainImage ? "active" : ""}
            />
          );
        })}
      </div>
    </section>
  );
};

type Props = {
  images: string[];
};
export default ProductImages;
